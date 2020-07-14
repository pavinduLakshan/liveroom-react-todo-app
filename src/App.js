import React, { useState } from 'react';
// Material UI component imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Other imports
import './App.css';
import ToDoItem from './components/ToDoItem';
import AddTaskForm from './components/AddTaskForm';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  const [toDos, setToDos] = useState([]);

  function addToDo(todo) {
    console.log(todo);
    setToDos([...toDos, todo]);
  }

  function setCompletedStatus(id, newStatus) {
    let selectedItem = toDos.find((todo) => todo.id === id);
    if(!selectedItem){
      alert("Item doesn't exist.")
      return
    }
    selectedItem.completed = newStatus;

    const otherItems = toDos.filter((todo) => todo.id !== id);
    setToDos([...otherItems, selectedItem]);
  }

  function deleteToDo(id) {
    let newList = toDos.filter((todo) => todo.id !== id);
    setToDos(newList);
  }

  return (
    <div className="App">
      <div>
        {/* AppBar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              The LiveRoom Todo App
            </Typography>
          </Toolbar>
        </AppBar>
        <AddTaskForm onSubmit={addToDo} />
        {/* Main Container */}
        <Grid container spacing={0} className="main_container">
          {/* To do work */}
          <Grid item xs={12} sm={12} md={6} lg={6} style={{ minHeight: '20vh' }}>
            <Typography variant="h5" component="h5" style={{ textAlign: 'left' }}>
              To do
            </Typography>
            {toDos
              .filter((item) => !item.completed)
              .map((item) => (
                <ToDoItem
                  id={item.id}
                  name={item.name}
                  date={item.date}
                  time={item.time}
                  onChangeStatus={setCompletedStatus}
                  onDelete={deleteToDo}
                  isCompleted={item.completed}
                />
              ))}
          </Grid>
          {/* Completed tasks */}
          <Grid item xs={12} sm={12} md={6} lg={6} style={{ minHeight: '20vh' }}>
            <Typography variant="h5" component="h5" style={{ textAlign: 'left' }}>
              Done
            </Typography>
            {toDos
              .filter((item) => item.completed)
              .map((item) => (
                <ToDoItem
                  id={item.id}
                  name={item.name}
                  date={item.date}
                  time={item.time}
                  onChangeStatus={setCompletedStatus}
                  onDelete={deleteToDo}
                  isCompleted={item.completed}
                />
              ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
