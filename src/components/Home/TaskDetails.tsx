import {ButtonGroup, Stack} from "@mui/material";
import {useLocation} from "react-router-dom";
import {Task} from "../../interfaces/task";
import Button from "@mui/material/Button";
import {useState} from "react";
import {TaskDetailsState} from "../../interfaces/taskDetailsState";
import TodoListView from "./TodoListView";
import AddTodoDialog from "../AddTodoDialog";
import {Delete} from "@mui/icons-material";

export function TaskDetails() {
    //todo - error handing if no data is passed
    const location = useLocation();
    const data = location.state as Task;
    const [taskDetailsState, setDetailsState] = useState<TaskDetailsState>();
    console.log(data);

    return <div className={"todo-details-layout"}>
        <div className={"page-padding"}>
            <div className={"todo-heading-section"}>
                <div className={"margin-vertical margin-large"}>
                    <div className={"todo-heading-wrapper"}>
                        <h5>{data.createdAt.slice(0, 16)}</h5>
                        <h1>{data.title}</h1>
                        <div className={"margin-top margin-top-small"}>
                            <div className={"todo-navbar wf-section"}>
                                <div className={"container"}>
                                    <ButtonGroup variant="text"
                                                 orientation={"horizontal"}
                                                 aria-label="large button group"
                                                 fullWidth={false}
                                                 className={"todo-menu-block"}>
                                        <Button sx={{
                                            fontWeight: "bold",
                                        }} color={"secondary"} onClick={() => setDetailsState({
                                            todoView: true,
                                            notesView: false,
                                            linksView: false,
                                        })}>
                                            Todos
                                        </Button>
                                        <Button sx={{
                                            fontWeight: "bold",
                                        }} color={"secondary"} onClick={() => setDetailsState({
                                            todoView: false,
                                            notesView: true, linksView: false
                                        })}>
                                            Notes
                                        </Button>
                                        <Button sx={{
                                            fontWeight: "bold",
                                        }} color={"secondary"} onClick={() => setDetailsState({
                                            todoView: false,
                                            notesView: false, linksView: true
                                        })}>
                                            Links
                                        </Button>

                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={"todo-body-section"}>
                <div className={"margin-vertical margin-large"}>
                    <div className={"margin-vertical margin-bottom"}>
                        <Stack direction={"row"} spacing={2}>
                            <AddTodoDialog task={data}/>
                            <Button variant={"contained"} color={"error"} startIcon={<Delete/>}>Remove</Button>
                        </Stack>
                    </div>
                    <div className={"todo-list-container"}>
                        {taskDetailsState?.todoView ?
                            <TodoListView todos={data.todos}/>
                            : taskDetailsState?.notesView ? <div><h3>Hello World from the notes view</h3></div>
                                : taskDetailsState?.linksView ? <div><h3>Hello World from the links view</h3></div>
                                    : <TodoListView todos={data.todos}/>

                        }
                    </div>
                </div>
            </div>
        </div>
    </div>;
}