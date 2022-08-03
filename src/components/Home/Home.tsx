import "./Home.css"
import {Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, IconButton, Link} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

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
                                <IconButton>
                                    <HomeOutlinedIcon>
                                        {/* TODO- App link to open home UI   */}
                                    </HomeOutlinedIcon>
                                </IconButton>
                                <IconButton>
                                    <StarBorderOutlinedIcon>
                                        {/* TODO- App link to open Favorite tasks    */}
                                    </StarBorderOutlinedIcon>
                                </IconButton>
                                <IconButton>
                                    <MoreHorizOutlinedIcon>
                                        {/* TODO- App link to open more menu   */}
                                    </MoreHorizOutlinedIcon>
                                </IconButton>

                            </nav>
                        </div>
                    </div>
                </div>

                <div className={"tag-menu"}>
                    <div className={"page-padding"}>
                        <div className={"tag-menu-items"}>
                            <div className={"margin-vertical margin-large"}>
                                <div className={"tag-menu-items-wrapper"}>

                                    <div className={"tag-item"}>
                                        <div className={"tag-item-heading"}>
                                            <div className={"tag-heading-colum w-row"}>
                                                <div className={"tag-column-item-1 w-col w-col-2"}>
                                                    <CircleOutlinedIcon className={"image"}></CircleOutlinedIcon>
                                                </div>
                                                {/*TODO - Change from hardcoded value to what will be read from the DB*/}
                                                <div className={"tag-column-item-2 w-col w-col-10"}>
                                                    <h3>Projects</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={"tag-item-todo-list"}>
                                            <div className={"w-row"}>
                                                <div className={"tag-column-item-1 wf-empty w-col w-col-2"}></div>
                                                <div className={"tag-column-item-2 w-col w-col-10"}>
                                                    {/*Todo - Updated data with db data*/}

                                                    <ButtonGroup className={"tag-menu-nav"} variant="text"
                                                                 orientation={"vertical"} aria-label="large button group "
                                                                 fullWidth={true}>
                                                        <Button sx={{
                                                            justifyContent: 'start'
                                                        }} color={"primary"}>Todo React App</Button>
                                                        <Button sx={{
                                                            justifyContent: 'start'
                                                        }}>Web Scraper</Button>
                                                        <Button sx={{
                                                            justifyContent: 'start'
                                                        }}>Network Packet</Button>
                                                    </ButtonGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"tag-item"}>
                                        <div className={"tag-item-heading"}>
                                            <div className={"tag-heading-colum w-row"}>
                                                <div className={"tag-column-item-1 w-col w-col-2"}>
                                                    <CircleOutlinedIcon className={"image"}></CircleOutlinedIcon>
                                                </div>
                                                {/*TODO - Change from hardcoded value to what will be read from the DB*/}
                                                <div className={"tag-column-item-2 w-col w-col-10"}>
                                                    <h3>Personal</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={"tag-item-todo-list"}>
                                            <div className={"w-row"}>
                                                <div className={"tag-column-item-1 wf-empty w-col w-col-2"}></div>
                                                <div className={"tag-column-item-2 w-col w-col-10"}>
                                                    {/*Todo - Updated data with db data*/}

                                                    <ButtonGroup className={"tag-menu-nav"} variant="text"
                                                                 orientation={"vertical"} aria-label="large button group "
                                                                 fullWidth={true}>
                                                        <Button sx={{
                                                            justifyContent: 'start'
                                                        }} color={"primary"}>Reading</Button>
                                                        <Button sx={{
                                                            justifyContent: 'start'
                                                        }}>Taxes</Button>
                                                        <Button sx={{
                                                            justifyContent: 'start'
                                                        }}>Dinner with the family</Button>
                                                    </ButtonGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


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
                                                        <Link className={"nav-link"} underline={"hover"}
                                                              href={"#"}>Todos</Link>
                                                    </li>
                                                    <li className={"padding-right"}>
                                                        <Link className={"nav-link"} underline={"hover"}
                                                              href={"#"}>Notes</Link>
                                                    </li>
                                                    <li className={"padding-right"}>
                                                        <Link className={"nav-link"} underline={"hover"}
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