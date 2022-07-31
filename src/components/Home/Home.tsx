import "./Home.css"

const Home = () => {


    return (

        <div className={"page-wrapper"}>
            <div className={"main-wrapper"}>
                <div className={"nav-bar"}>
                    <div className={"nav-bar-container"}></div>
                </div>

                <div className={"section-todo-hero"}>
                    <div className={"page-padding"}>
                        <div className={"container-large"}>
                            <div className={"padding-vertical padding-small"}>
                                <h2>Welcome to today todo List</h2>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={"section-todo-body"}>
                    <div className={"page-padding"}>
                        <div className={"container-large"}>
                            <div className={"padding-vertical padding-small"}>

                            </div>

                        </div>
                    </div>

                </div>

                <div className={"section-todo-footer"}>


                </div>

            </div>
        </div>


    )
}

export default Home;