import "./Home.css"
import {IconButton, Link} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Home = () => {
    //Constants

    return (
        <div className={"navbar-body"}>
            <div className={"Navbar"}>
                <div className={"main-navbar-container"}>
                    <Link className={"brand"}></Link>
                    <nav className={"navbar-nav-container"}>
                        <IconButton color={"primary"}>
                            <HomeOutlinedIcon>
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
    )
}

export default Home;