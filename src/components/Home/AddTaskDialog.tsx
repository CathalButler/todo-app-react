import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {TextField} from "@mui/material";
import {gql, useMutation} from "@apollo/client";
import {SubmitHandler, useForm} from "react-hook-form";
import {ErrorMessage} from "../../errorMessage";

interface TaskDetails {
    title: string,
    category: string
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CREATE_NEW_TASK_MUTATION = gql`
    mutation CreateMutation(
        $title: String!
        $category: String!
    ) {
        createTask(title: $title, category: $category) {
            id
            title
            category
            createdAt
        }
    }
`;

export default function AddTaskDialog() {

    //Constants:
    const [open, setOpen] = React.useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<TaskDetails>();
    // TODO - Add error handling
    const [error, setError] = useState<ErrorMessage>()

    const [addTask] = useMutation(CREATE_NEW_TASK_MUTATION,
        {
            onCompleted: ({addTask}) => {
                handleClose();
            },
        }
    );

    const onSubmit: SubmitHandler<TaskDetails> = data => addTask(
        {
            variables: {title: data.title, category: data.category}
        },
    ).then(({data}) => {
        console.log(data)
    })

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

            <form onSubmit={handleSubmit(onSubmit)}>
                <Dialog open={open} onClose={handleClose}
                        TransitionComponent={Transition}
                        disablePortal
                        fullWidth
                        maxWidth={"sm"}>
                    <DialogTitle>Add a new task</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Name</DialogContentText>
                        <TextField
                            {...register("title", {
                                required: true,
                                min: 4
                            })}
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Task Name"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        {errors.title && <p className={"error-message-text"}>Please enter a title</p>}
                        <div className={"padding padding-small"}/>


                        <DialogContentText>Category</DialogContentText>
                        <TextField
                            {...register("category", {
                                required: true,
                                min: 4
                            })}
                            autoFocus
                            margin="dense"
                            id="category"
                            label="Category"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        {errors.category && <p className={"error-message-text"}>Please enter a category</p>}
                    </DialogContent>
                    <DialogActions>
                        <Button color={"error"} onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" color={"secondary"} type={"submit"}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </div>
    );
}
