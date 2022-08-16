import {Checkbox, FormControlLabel, FormGroup, Stack} from "@mui/material";
import {Todo} from "../../Task";
import Button from "@mui/material/Button";
import {Add, Delete} from "@mui/icons-material";
import {SubmitHandler, useForm} from "react-hook-form";
import {gql, useMutation} from "@apollo/client";
import {useState} from "react";


const UPDATE_TODO = gql`
    mutation UpdateTodo(
        $id: String!
        $taskId: String!
        $title: String!
        $isComplete: Boolean
        $note: String
        $link: String
    ){
        updateTodo(id: $id, taskId:$taskId, title: $title, isComplete:$isComplete, note: $note, link: $link){
            id
            taskId,
            title,
            isComplete,
            note,
            link
        }
    }
`;

function TodoListView(props: any) {

    const {register, handleSubmit, control} = useForm();
    const [complete, setComplete] = useState(true);

    const [updateTodo] = useMutation(UPDATE_TODO,
        {
            onCompleted: ({updateTodo}) => {
                console.log("complete")
            },
        }
    );

    const onSubmit: SubmitHandler<any> = data => updateTodo(
        {
            variables: {
                id: props.id, taskId: props.taskId, title: props.title, isComplete: data.complete,
                note: props.note, link: props.link
            }
        },
    ).then(({data}) => {
        console.log(data)
    })

    return <div>
        <div>
            <div className={"margin-vertical margin-bottom"}>
                <Stack direction={"row"} spacing={2}>
                    <Button variant={"contained"} startIcon={<Add/>}>Todo</Button>
                    <Button variant={"contained"} color={"error"} startIcon={<Delete/>}>Remove</Button>
                </Stack>
            </div>
        </div>
        <div className={"todo-list-form-block w-form"}>
            {props.todo.length
                ? props.todo.map((todo: Todo, index: any) => (
                    <FormGroup className={"todo-list-form"} onSubmit={handleSubmit(onSubmit)}>
                        <FormControlLabel control={<Checkbox {...register("complete")} checked={todo.isComplete}
                                                             color={"secondary"}/>}
                                          label={todo.title}/>
                    </FormGroup>
                ))
                : <p>Add todo's for this task</p>
            }
        </div>
    </div>
}

export default TodoListView;