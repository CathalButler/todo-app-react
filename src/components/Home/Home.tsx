import "./Home.css"
import {Box, Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, Typography} from "@mui/material";

const Home = () => {
    //Constants
    const label = {inputProps: {'aria-label': 'Complete'}};

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
                                <Card sx={{minWidth: 275}}>
                                    <CardContent>
                                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                            Date - Time
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Learning CSS
                                        </Typography>
                                        <Typography variant="body2">
                                            Take some notes on implementing material elements.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <FormControlLabel label={"Complete"} control={
                                            <Checkbox {...label} color="secondary"/>
                                        }/>
                                        <Button size="small">Delete</Button>
                                    </CardActions>
                                </Card>

                                <div className={"padding-vertical padding-small"}></div>

                                <Card sx={{minWidth: 275}}>
                                    <CardContent>
                                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                            Date - Time
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Do Taxes
                                        </Typography>
                                        <Typography variant="body2">
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <FormControlLabel label={"Complete"} control={
                                            <Checkbox {...label} color="secondary"/>
                                        }/>
                                        <Button size="small">Delete</Button>
                                    </CardActions>
                                </Card>
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