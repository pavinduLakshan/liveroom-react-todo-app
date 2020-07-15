import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Other imports
import { HashRouter, Route } from 'react-router-dom';
import ToDoList from './views/TodoList/TodoList';
import Pagination from './views/Pagination/Pagination';
import './App.css';

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: '#D4E0E4',
    },
  },
});

function App() {
  return (
    <HashRouter basename="/liveroom-react-todo-app">
      <MuiThemeProvider theme={themeLight}>
        <CssBaseline />
        <div className="App">
          <Route exact path="/" component={ToDoList} />
          <Route path="/pagination" component={Pagination} />
        </div>
      </MuiThemeProvider>
    </HashRouter>
  );
}

export default App;
