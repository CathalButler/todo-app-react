import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {TransitionProps} from "@mui/material/transitions";
import Slide from '@mui/material/Slide';
import {Add} from "@mui/icons-material";
import {Box, TextField} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {gql, useMutation} from "@apollo/client";
import {CREATE_NEW_TODO_MUTATION} from "../apollo/mutations/createNewTodoMutation";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddTodoDialog(props: any) {
    const [open, setOpen] = React.useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<any>();

    console.log(props.task);

    const [addToto] = useMutation(CREATE_NEW_TODO_MUTATION,
        {
            onCompleted: ({addTodo}) => {
                //todo - add refresh
                handleClose();
            },
        }
    );

    const onSubmit: SubmitHandler<any> = data => addToto(
        {
            variables: {
                taskId: props.task.id, title: data.title, isComplete: true, note: data.note,
                link: data.link
            }
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
            <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
                <Button variant={"contained"} color={"success"} startIcon={<Add/>}
                        onClick={handleClickOpen}>Add</Button>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    disablePortal
                    fullWidth
                    maxWidth={"sm"}>
                    <DialogTitle>Add a todo</DialogTitle>

                    <DialogContentText>Todo Name</DialogContentText>
                    <TextField {...register("title", {
                        required: true,
                    })}
                               required={true}
                               autoFocus
                               margin="dense"
                               id="title"
                               label="Todo Name"
                               type="text"
                               fullWidth
                    />

                    {errors.title && <p className={"error-message-text"}>Please enter a title</p>}

                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose} color="error">Close</Button>
                        <Button variant="contained" color={"secondary"} type={"submit"}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </div>
    );
}