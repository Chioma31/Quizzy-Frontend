import {Link} from "react-router-dom";
import {CgProfile} from "react-icons/cg"
import './PieNav.css';
const PieNav = () => {
    return ( 
        <div className="PieNav">
            <div className="pie">
            <Link className="pie1"  to="/">Home</Link>
            <Link className="pie2" to="/About">About Us</Link>
            <CgProfile />
            <select name="drop-down" id="drop-dom">
                <option value=""><Link to="/pieChartPage">Dashboard</Link></option>
                <option value="Username"><Link to="/TakeQuiz">Take Quiz</Link></option>
                <option value="Username">Test Yourself</option>
                <option value="Username">Logout!</option>
            </select>
            </div>
        </div>
     );
}
 
export default PieNav;