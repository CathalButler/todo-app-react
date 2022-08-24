import "./Home.css"
import {IconButton, Link} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {AUTH_TOKEN} from "../../constants";
import {useNavigate} from "react-router-dom";

const MainNavbar = () => {
    //Constants
    const navigate = useNavigate();

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
                        <IconButton color={"primary"} onClick={() => {
                            localStorage.removeItem(AUTH_TOKEN);
                            navigate('/login')
                        }}>
                            <LogoutIcon/>
                        </IconButton>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default MainNavbar;