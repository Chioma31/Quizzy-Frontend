import {IoMdContact} from "react-icons/io";
import {Link} from "react-router-dom";
import sec from "./SecondNavbar.module.css"
const SecondNavbar = () => {
    const style = {color:"blue", fontSize:"2.5rem",marginRight:"1.5rem"}
    const dropdown = {backgroundColor:"blue", paddingTop:"4rem"}
    return (
        <nav className={sec.navbar}>
            <img src="images/logo.png" alt="" />
        <div className={sec.navitems}>
           <Link  to="/">Home</Link>
           <Link className="about" to="/About">About  Us</Link>
        </div>
        <div className={sec.licon}>
                < IoMdContact style={style}/>
            </div>
            <div className={sec.dropdown}>
            < select name="Username" id="dropdown" dropdown={dropdown}>
                <option value="Username">Username</option>
                <option value="Username">Dashboard</option>
                <option value="Username">Take Quiz</option>
                <option value="Username">Test Yourself</option>
                <option value="Username">Logout!</option>
            </select>
            </div>
        </nav>
        
    );
}
 
export default SecondNavbar;
