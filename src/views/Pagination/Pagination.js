import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ToDoItem from '../../components/ToDoItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import './pagination.css';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Pagination = () => {
  const [list, setList] = useState([]);
  const classes = useStyles();
  const [nextToken, setNextToken] = useState(undefined);
  const [nextNextToken, setNextNextToken] = useState();
  const [previousTokens, setPreviousTokens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [nItems,setNItems] = useState(3)

  function handleNItems(e){
    setNItems(e.target.value)
  }

  useEffect(() => {
    fetch('https://af5xufo4j6.execute-api.us-east-1.amazonaws.com/test/all', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({ LastEvaluatedKey: nextToken }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.LastEvaluatedKey) {
          setNextBtnDisabled(true);
        }
        setNextNextToken(data.LastEvaluatedKey);
        setList(data.Items);
      })
      .catch((e) => console.log(e));
  }, [nextToken]);

  const next = () => {
    setPreviousTokens((c) => [...c, nextToken]);
    setNextToken(nextNextToken);
    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (isNextBtnDisabled) {
      setNextBtnDisabled(false);
    }
    const copy = [...previousTokens];
    const b = copy.pop();
    setPreviousTokens(copy);
    setNextToken(b);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            The LiveRoom Pagination App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} className="main_container">
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} style={{ marginTop: '3%' }}>
          <div id="btn_container">
            <div style={{ flexGrow: 1 }} />
            <Select
          value={nItems}
          id="n_items_selector"
         disableUnderline
          onChange={handleNItems}
        >
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
            <Button variant="contained" onClick={prev} color="primary" disabled={currentPage === 1}>
              prev
            </Button>
            <p id="current_page">current page: {currentPage}</p>
            <Button variant="contained" onClick={next} color="primary" disabled={isNextBtnDisabled}>
              next
            </Button>
          </div>
          {list.map((item, index) => {
            return <ToDoItem id={Math.random()} timeout={250 * (index + 1)} name={item.PK} date={item.SK} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Pagination;
