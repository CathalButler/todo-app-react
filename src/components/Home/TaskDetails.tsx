import {Checkbox, FormControlLabel, FormGroup, Link} from "@mui/material";
import {useLocation} from "react-router-dom";
import {Task} from "../../Task";

export function TaskDetails() {

    // const {data, loading, error} = useQuery(TASK_QUERY);

    //todo - error handing if no data is passed
    const location = useLocation();
    const data = location.state as Task;

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
                                    <ul className={"todo-menu-block w-list-unstyled"}>
                                        <li className={"padding-right"}>
                                            <Link color={"black"} underline={"hover"}
                                                  href={"#"}>Todos</Link>
                                        </li>
                                        <li className={"padding-right"}>
                                            <Link color={"black"} underline={"hover"}
                                                  href={"#"}>Notes</Link>
                                        </li>
                                        <li className={"padding-right"}>
                                            <Link color={"black"} underline={"hover"}
                                                  href={"#"}>Links</Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={"todo-body-section"}>
                <div className={"margin-vertical margin-large"}>
                    <div className={"todo-list-container"}>
                        <div className={"todo-list-form-block w-form"}>
                            {/*TODO - Change this to dynamically create Checkbox's from task data from the
                                        server*/}
                            <FormGroup className={"todo-list-form"}>
                                <FormControlLabel control={<Checkbox defaultChecked color={"secondary"}/>}
                                                  label="Create Login UI"/>
                                <FormControlLabel control={<Checkbox color={"secondary"}/>}
                                                  label="Create SignUp UI"/>
                                <FormControlLabel control={<Checkbox color={"secondary"}/>}
                                                  label="Create Home UI"/>
                            </FormGroup>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>;
}