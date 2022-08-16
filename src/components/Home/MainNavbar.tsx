import "./Home.css"
import {IconButton, Link} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const MainNavbar = () => {
    //Constants

    return (
        <div className={"navbar-body"}>
            <div className={"MainNavbar"}>
                <div className={"main-navbar-container"}>
                    <Link className={"brand"}></Link>
                    <nav className={"navbar-nav-container"}>
                        <IconButton color={"primary"} href={"/"}>
                            <HomeOutlinedIcon/>
                        </IconButton>
                        <IconButton color={"primary"}>
                            <StarBorderOutlinedIcon/>
                        </IconButton>
                        <IconButton color={"primary"}>
                            <MoreHorizOutlinedIcon/>
                        </IconButton>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default MainNavbar;