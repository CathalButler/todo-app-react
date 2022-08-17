import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import {Todo} from "../../interfaces/task";
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

    // console.log(props);

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
                id: props.id, taskId: props.id, title: props.title, isComplete: data.complete,
                note: props.note, link: props.link
            }
        },
    ).then(({data}) => {
        console.log(data)
    })

    return <div>
        <div className={"todo-list-form-block w-form"}>
            {props.todos.length
                ? props.todos.map((todo: Todo, index: any) => (
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