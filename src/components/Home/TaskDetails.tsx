import {ButtonGroup} from "@mui/material";
import {useLocation} from "react-router-dom";
import {Task} from "../../Task";
import Button from "@mui/material/Button";
import {useState} from "react";
import {TaskDetailsState} from "../../TaskDetailsState";
import TodoListView from "./TodoListView";

export function TaskDetails() {
    //todo - error handing if no data is passed
    const location = useLocation();
    const data = location.state as Task;
    const [taskDetailsState, setDetailsState] = useState<TaskDetailsState>();

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
                    <div className={"todo-list-container"}>
                        {taskDetailsState?.todoView ?
                            <TodoListView todo={data.todo}/>
                            : taskDetailsState?.notesView ? <div><h3>Hello World from the notes view</h3></div>
                                : taskDetailsState?.linksView ? <div><h3>Hello World from the links view</h3></div>
                                    : <TodoListView todo={data.todo}/>

                        }
                    </div>
                </div>
            </div>
        </div>
    </div>;
}