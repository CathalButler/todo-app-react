import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import {ButtonGroup} from "@mui/material";
import {gql, useQuery} from "@apollo/client";
import AddTaskDialog from "./AddTaskDialog";
import {Link} from "react-router-dom";
import {Task} from "../../Task";
import ReactLoading from 'react-loading';
import Button from "@mui/material/Button";


const TASK_QUERY = gql`
    {
        getTasks {
            id
            title
            createdAt
            category
        }

    }
`;


const TaskMenu = () => {

    const {data, loading, error} = useQuery(TASK_QUERY);

    if (loading) return <div className={"tag-menu page-padding align-center"}><ReactLoading type={"spin"} height={50}
                                                                                            width={50}
                                                                                            color={"#ab4bd5"}></ReactLoading>
    </div>
    //Todo - Updated this to insure its a more user friendly message if there is any backend issues.
    if (error) return <div className={"tag-menu page-padding align-center"}>
        <pre>{error.message}</pre>
    </div>


    return <div className={"tag-menu"}>
        <div className={"page-padding"}>
            <div className={"tag-menu-items"}>
                <div className={"margin-vertical margin-large"}>
                    <div className={"tag-menu-items-wrapper"}>
                        <div className={"tag-item"}>
                            {data && (
                                <>
                                    {data.getTasks.map((task: Task) => (
                                        <>
                                            <div className={"tag-item-heading"}>
                                                <div className={"tag-heading-colum w-row"}>
                                                    <div className={"tag-column-item-1 w-col w-col-2"}>
                                                        <CircleOutlinedIcon
                                                            className={"icon-padding"}></CircleOutlinedIcon>
                                                    </div>
                                                    <div className={"tag-column-item-2 w-col w-col-10"}>
                                                        {/*Todo - Group the map of objects by value:category to insure I am not creating multiple of the same tag-item-heading*/}
                                                        <h3>{task.category}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"tag-item-todo-list"}>
                                                <div className={"w-row"}>
                                                    <div className={"tag-column-item-1 wf-empty w-col w-col-2"}></div>
                                                    <div className={"tag-column-item-2 w-col w-col-10"}>
                                                        <ButtonGroup className={"tag-menu-nav"} variant="text"
                                                                     orientation={"vertical"}
                                                                     aria-label="large button group"
                                                                     fullWidth={true}>
                                                            <Button sx={{
                                                                fontWeight: "bold",
                                                                justifyContent: "start"
                                                            }}
                                                                    color={"secondary"}>
                                                                <Link to={"/task"} state={{
                                                                    ...task
                                                                }}>{task.title}</Link>
                                                            </Button>
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"add-button"}>
            <AddTaskDialog/>
        </div>
    </div>;
}

export default TaskMenu;