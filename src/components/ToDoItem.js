import React, { useState } from "react";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import NotCompletedIcon from "@material-ui/icons/CheckCircleOutline";
import UndoCompletedIcon from "@material-ui/icons/Undo";
import MoreVerticalIcon from "@material-ui/icons/MoreVert";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "row",
  },
}));

const ToDoItem = ({ id,name, date, time, isCompleted, onComplete, onDelete, onReverse}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper elevation={3} className={classes.paper} style={{
        color: isCompleted ? "white" : "black",
        marginBottom: "2%",
        backgroundColor: isCompleted ? "#35C706" : "white"}}>
      {/* Todo item details */}
      <div>
        <Typography variant="h6" className={classes.title}>
          {name}
        </Typography>
        <Typography variant="subtitle1">
          {date} | {time}
        </Typography>
      </div>
      <div style={{ flexGrow: 1 }}></div>
      {/* Show corresponding icons based on completion status */}
      {isCompleted ? (
        <div>
          <IconButton>
            <UndoCompletedIcon style={{ color: "red", fontSize: 30 }} onClick={() => onReverse(id)}/>
          </IconButton>
        </div>
      ) : (
 <IconButton>
          <NotCompletedIcon style={{ fontSize: 30 }} onClick={() => onComplete(id)}/>
        </IconButton>
      )}
{/* Todo options menu */}

<IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <MoreVerticalIcon style={{ color: isCompleted ? "white" :  "black" ,fontSize: 25 }} />
      </IconButton>

      <Paper className={classes.root}>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuList id="todo-options">
            
            <MenuItem onClick={() => {
onDelete(id,isCompleted)
handleClose();
            }}>
              <ListItemIcon>
                <DeleteIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Delete</Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </Paper>

    
    </Paper>
  );
};

export default ToDoItem;
