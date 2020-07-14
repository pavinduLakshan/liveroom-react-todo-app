import React, { useState } from 'react';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import NotCompletedIcon from '@material-ui/icons/CheckCircleOutline';
import UndoCompletedIcon from '@material-ui/icons/Undo';
import MoreVerticalIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    display: 'flex',
    height: '15vh',
    justifyContent: 'center',
    flexDirection: 'row',
  },
}));

const ToDoItem = ({ name, date, time, timeout, isFirstRender, isCompleted }) => {
  const classes = useStyles();

  return (
    <Grow in={true} key={name} unmountOnExit={true} style={{ transformOrigin: `0 0 0` }} {...{ timeout: timeout }}>
      <Paper
        elevation={3}
        className={classes.paper}
        style={{
          color: isCompleted ? 'white' : 'black',
          marginBottom: '2%',
          backgroundColor: isCompleted ? '#35C706' : 'white',
        }}
      >
        {/* Todo item details */}
        <div>
          <Typography variant="h6" className={classes.title}>
            {name}
          </Typography>
          <Typography variant="subtitle1" className={classes.title}>
            {date}
          </Typography>
        </div>
        <div style={{ flexGrow: 1 }}></div>
        <img src={`https://avatars.dicebear.com/api/human/${name}.svg`} height="70" width="70" />
      </Paper>
    </Grow>
  );
};

export default ToDoItem;
