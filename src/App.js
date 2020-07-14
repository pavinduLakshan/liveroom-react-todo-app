import React, { useState } from 'react';
// Material UI component imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Other imports
import './App.css';
import ToDoItem from './components/ToDoItem';
import AddTaskForm from './components/AddTaskForm';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: '#D4E0E4',
    },
  },
});

function App() {
  const classes = useStyles();

  const [toDos, setToDos] = useState([]);

  function addToDo(todo) {
    console.log(todo);
    setToDos([...toDos, todo]);
  }

  function setCompletedStatus(id, newStatus) {
    let selectedItem = toDos.find((todo) => todo.id === id);
    if (!selectedItem) {
      alert("Item doesn't exist.");
      return;
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
    <MuiThemeProvider theme={themeLight}>
      <CssBaseline />

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

          {/* Main Container */}
          <Grid container spacing={0} className="main_container">
            {/* To do work */}
            <Grid item xs={12} sm={12} md={6} lg={6} style={{ minHeight: '40vh', padding: '1%', paddingRight: '1%' }}>
              <Typography variant="h5" component="h5" style={{ textAlign: 'left', marginBottom: '1%' }}>
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
            <Grid item xs={12} sm={12} md={6} lg={6} style={{ minHeight: '40vh', padding: '1%', paddingRight: '1%' }}>
              <Typography variant="h5" component="h5" style={{ textAlign: 'left', marginBottom: '1%' }}>
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
          <AddTaskForm onSubmit={addToDo} />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
