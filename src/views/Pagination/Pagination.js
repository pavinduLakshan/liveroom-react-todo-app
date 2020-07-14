import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ToDoItem from '../../components/ToDoItem';
import './pagination.css';

const Pagination = () => {
  const [list, setList] = useState([]);

  const [nextToken, setNextToken] = useState(undefined);
  const [nextNextToken, setNextNextToken] = useState();
  const [previousTokens, setPreviousTokens] = useState([]);

  useEffect(() => {
    fetch('https://af5xufo4j6.execute-api.us-east-1.amazonaws.com/test/all', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({ LastEvaluatedKey: nextToken }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNextNextToken(data.LastEvaluatedKey);
        setList(data.Items);
      })
      .catch((e) => console.log(e));
  }, [nextToken]);

  const next = () => {
    setPreviousTokens((c) => [...c, nextToken]);
    setNextToken(nextNextToken);
  };

  const prev = () => {
    const copy = [...previousTokens];
    const b = copy.pop();
    setPreviousTokens(copy);
    setNextToken(b);
  };
  return (
    <div>
      <Grid container spacing={0} className="main_container">
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} style={{ marginTop: '3%' }}>
          {list.map((item) => {
            return <ToDoItem id={Math.random()} name={item.PK} date={item.SK} />;
          })}
          <div id="btn_container">
            <Button variant="contained" onClick={prev} color="primary">
              prev
            </Button>
            <div style={{ flexGrow: 1 }} />
            <Button variant="contained" onClick={next} color="primary">
              next
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Pagination;
