import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
// date and time utils
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const AddTaskForm = ({ onSubmit }) => {
  const [isOpen, setOpen] = useState(false);
  //form values
  const [name, setName] = useState("");
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTimeChange = (time) => {
    setTime(time);
  };

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
        id: Math.random(),
      name,
      date: date.toLocaleDateString(),
      time: time.toLocaleTimeString(),
      completed: false
    });
    handleClose()
  }

  return (
    <div>
      <Button id="add_todo_button" onClick={handleOpen}>
        Add Todo
      </Button>
      <Modal
        open={isOpen}
        disableBackdropClick
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="add-todo-modal">
          <CloseIcon
            onClick={handleClose}
            style={{ float: "right", marginBottom: "3%" }}
          />
          <Typography variant="h6" style={{ marginBottom: "4%" }}>
            Add new Todo
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              id="outlined-basic"
              label="name"
              required
              variant="outlined"
              onChange={handleNameChange}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date"
                format="MM/dd/yyyy"
                required
                value={date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time"
                value={time}
                required
                onChange={handleTimeChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>
            <Button
              type="submit"
              style={{ backgroundColor: "green", color: "white" }}
            >
              <Typography variant="h6">Create</Typography>
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddTaskForm;
