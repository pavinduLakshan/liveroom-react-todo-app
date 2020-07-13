import React, { useState } from "react";
// Material UI component imports
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// Other imports
import "./App.css";
import ToDoItem from "./components/ToDoItem";
import AddTaskForm from "./components/AddTaskForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  const [toDo, setToDo] = useState([]);
  const [done, setDone] = useState([]);

  function addToDo(todo) {
    console.log(todo);
    setToDo([...toDo, todo]);
  }

  function markAsCompleted(id){
    let comItem = toDo.filter(t => t.id === id)
    comItem[0].completed = true
    setDone([...done,comItem[0]])
    const newToDo = toDo.filter(t => t.id !== id)
    setToDo(newToDo)
  }

  function markAsNotCompleted(id){
    let comItem = done.filter(t => t.id === id)
    comItem[0].completed = false

    setToDo([...toDo,comItem[0]])
    const newDone = done.filter(t => t.id !== id)
    setDone(newDone)
  }

  function deleteToDo(id,completed){
    if(completed){
      let newList = done.filter(t => t.id !== id)
      setDone(newList)
    }
    else{
      let newList = toDo.filter(t => t.id !== id)
      setToDo(newList)
    }
  }

  return (
    <div className="App">
      <div className={classes.root}>
        {/* AppBar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              The LiveRoom Todo App
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Menu buttons */}
        <div className="menu_buttons">
          <div style={{ flexGrow: 1 }}></div>

          <AddTaskForm onSubmit={addToDo} />
        </div>

        {/* Main Container */}
        <Grid container spacing={5} className="main_container">
          {/* To do work */}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              variant="h5"
              component="h5"
              style={{ textAlign: "left" }}
            >
              To do
            </Typography>
            {toDo.length > 0 ? toDo.map((item) => (
              <ToDoItem
              id={item.id}
                name={item.name}
                date={item.date}
                time={item.time}
                onComplete={markAsCompleted}
                onDelete={deleteToDo}
                onReverse={markAsNotCompleted}
                isCompleted={item.completed}
              />
            )) : <Typography variant="subtitle1" style={{padding: "2%",color: "grey"}}>No tasks yet</Typography>}
          </Grid>
          {/* Completed tasks */}
          <Grid item xs={6} sm={12} md={6} lg={6}>
            <Typography
              variant="h5"
              component="h5"
              style={{ textAlign: "left" }}
            >
              Done
            </Typography>
            {done.length > 0 ? done.map(item => <ToDoItem
                          id={item.id}
              name={item.name}
              date={item.date}
              time={item.time}
              onDelete={deleteToDo}
              isCompleted={item.completed}
              onReverse={markAsNotCompleted}
            /> ) : <Typography variant="subtitle1" style={{padding: "2%",color: "grey"}}>No completed tasks yet</Typography>}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
