import "./Home.css"
import {Button, ButtonGroup, IconButton, Link} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Home = () => {
    //Constants
    const label = {inputProps: {'aria-label': 'Complete'}};

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
                                                    <img
                                                        src="https://img.icons8.com/material-outlined/24/000000/circled.png"
                                                        height={"24"} width={"24"} className={"image"}
                                                        alt={"Circle Icon"}/>
                                                </div>
                                                {/*TODO - Change from hardcoded value to what will be read from the DB*/}
                                                <div className={"tag-column-item-2 w-col w-col-10"}>
                                                    <h3>Projects</h3>
                                                </div>
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
                                        <form className={"todo-list-form"}>
                                            <label className={"w-checkbox todo-checkbox-field"}>
                                                <div className={"w-checkbox todo-checkbox"}></div>
                                                <input name={"checkbox"} type={"checkbox"}></input>
                                                <span
                                                    className={"todo-checkbox-label w-form-label"}> Create Login UI</span>
                                            </label>

                                            <label className={"w-checkbox todo-checkbox-field"}>
                                                <div className={"w-checkbox todo-checkbox"}></div>
                                                <input name={"checkbox"} type={"checkbox"}></input>
                                                <span
                                                    className={"todo-checkbox-label w-form-label"}> Create SignUp UI</span>
                                            </label>

                                            <label className={"w-checkbox todo-checkbox-field"}>
                                                <div className={"w-checkbox todo-checkbox"}></div>
                                                <input name={"checkbox"} type={"checkbox"}></input>
                                                <span
                                                    className={"todo-checkbox-label w-form-label"}> Create Home UI</span>
                                            </label>


                                        </form>

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