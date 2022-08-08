import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {TextField} from "@mui/material";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// Todo - write code to push form data t

export default function AddTaskDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color={"secondary"} onClick={handleClickOpen}>
                Add Task
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a new task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Name
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Task Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />

                    <div className={"padding padding-small"}/>
                    <DialogContentText>
                        Category
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Category"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button color={"error"} onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" color={"secondary"} onClick={handleClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
