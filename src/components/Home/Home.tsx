import "./Home.css"
import {Checkbox, FormControlLabel, FormGroup, IconButton, Link} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import TaskMenu from "./TaskMenu";

const Home = () => {
    //Constants

    return (

        <div className={"page-wrapper"}>
            <div className={"main-wrapper"}>
                <div className={"navbar-body"}>
                    <div className={"Navbar"}>
                        <div className={"main-navbar-container"}>
                            <Link href={"#"} className={"brand"}></Link>
                            <nav className={"navbar-nav-container"}>
                                <IconButton color={"primary"}>
                                    <HomeOutlinedIcon>
                                        {/* TODO- App link to open home UI   */}
                                    </HomeOutlinedIcon>
                                </IconButton>
                                <IconButton color={"primary"}>
                                    <StarBorderOutlinedIcon>
                                        {/* TODO- App link to open Favorite tasks    */}
                                    </StarBorderOutlinedIcon>
                                </IconButton>
                                <IconButton color={"primary"}>
                                    <MoreHorizOutlinedIcon>
                                        {/* TODO- App link to open more menu   */}
                                    </MoreHorizOutlinedIcon>
                                </IconButton>

                            </nav>
                        </div>
                    </div>
                </div>

                <TaskMenu/>


                <div className={"todo-details-layout"}>
                    <div className={"page-padding"}>
                        <div className={"todo-heading-section"}>
                            <div className={"margin-vertical margin-large"}>
                                <div className={"todo-heading-wrapper"}>
                                    <h5>Todo React App</h5>
                                    <h1>Todo UI Design</h1>
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

                </div>

            </div>
        </div>


    )
}

export default Home;