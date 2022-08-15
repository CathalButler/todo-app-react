import {ButtonGroup, Checkbox, FormControlLabel, FormGroup, Link} from "@mui/material";
import {useLocation} from "react-router-dom";
import {Task} from "../../Task";
import Button from "@mui/material/Button";
import {useState} from "react";
import {TaskDetailsState} from "../../TaskDetailsState";

export function TaskDetails() {

    // const {data, loading, error} = useQuery(TASK_QUERY);

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
                        <h5>{data.createdAt}</h5>
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
                                            notesView: false, linksView: false
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
                            <div className={"todo-list-form-block w-form"}>
                                {/*TODO - Change this to dynamically create Checkbox's from task data from the
                                        server*/}
                                <FormGroup className={"todo-list-form"}>
                                    <FormControlLabel control={<Checkbox defaultChecked color={"secondary"}/>}
                                                      label="Create Login UI"/>
                                    <FormControlLabel control={<Checkbox color={"secondary"}/>}
                                                      label="Create SignUp UI"/>
                                    <FormControlLabel control={<Checkbox color={"secondary"}/>}
                                                      label="Create MainNavbar UI"/>
                                </FormGroup>
                            </div>
                            : taskDetailsState?.notesView ? <div><text>Hello World from the notes view</text></div>
                                : taskDetailsState?.linksView ? <div><text>Hello World from the links view</text></div>
                                    : <div><text>Default will be todo</text></div>

                        }

                    </div>

                </div>
            </div>

        </div>
    </div>;
}