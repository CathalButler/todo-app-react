import "./Home.css"

const Home = () => {
    //Constants
    const label = {inputProps: {'aria-label': 'Complete'}};

    return (

        <div className={"page-wrapper"}>
            <div className={"main-wrapper"}>
                <div className={"navbar-body"}>
                    <div className={"Navbar"}>
                        <div className={"main-navbar-container"}>
                            <a href={"#"} className={"brand"}></a>
                            <nav className={"navbar-nav-container"}>
                                <a href={"#"} className={"home-nav"}>
                                    <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png"/><img/>
                                </a>
                                <a href={"#"} className={"fav-nav"}>
                                    <img src="https://img.icons8.com/material-outlined/24/000000/hearts.png"/>
                                </a>
                                <a href={"#"} className={"more-nav"}>
                                    <img src="https://img.icons8.com/material-outlined/24/000000/more.png"/>
                                </a>
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
                                                        height={"24"} width={"24"} className={"image"}/>
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
                                                <ul className={"list w-list-unstyled"}>
                                                    <li className={"tag-item-todo-list"}>Todo React App</li>
                                                    <li className={"tag-item-todo-list"}>Web Scraper</li>
                                                    <li className={"tag-item-todo-list"}>Network Packet Sniffer</li>

                                                </ul>
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
                            <div className={"margin-vertical margin-medium"}>
                                <div className={"todo-heading-wrapper"}>
                                    <h5>Todo React App</h5>
                                    <h1>Todo UI Design</h1>
                                    <div className={"margin-top margin-top-small"}>
                                        <div className={"todo-navbar wf-section"}>
                                            <div className={"container"}>
                                                <ul className={"todo-menu-block w-list-unstyled"}>
                                                    <li>
                                                        <a className={"nav-link"} href={"#"}>Todos</a>
                                                    </li>
                                                    <li>
                                                        <a className={"nav-link"}  href={"#"} >Notes</a>
                                                    </li>
                                                    <li>
                                                        <a className={"nav-link"}  href={"#"} >Links</a>
                                                    </li>


                                                </ul>
                                            </div>
                                        </div>
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