import {Link} from "react-router-dom";
import zer from './Examiner2.module.css'
const Examiner2 = () => {
    return ( 
        <div className={zer.all}>
        <div className={zer.sidebar}>
        <div className={zer.top}>
        <img src="images/logo.png" alt="" />
        </div>
        <div className={zer.write}>
           <ul>
                <li className={zer.profile}><p>Profile Details</p></li>
                <li  className={zer.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                <li><p>Confirm</p></li>
           </ul>
        </div>
        </div>
        <div className={zer.organ}>
            <h1>Register as an Organization</h1>
            <div className={zer.org}>
            <input type="text" id="text" placeholder="Examiner"/>
            </div>
            <div className={zer.regis}>
                <input type="text" id="text" placeholder="Email"/><br />
                <input type="text" id="text" placeholder="Password"/><br />
                <input type="text" id="text" placeholder="Comfirm Password"/><br />
            </div>
            <div className={zer.check}>
                <input type="checkbox" id="topping" name="topping"/>
                <label>Rememeber me</label><br />
            </div>
            <div className={zer.check1}>
                <input type="checkbox" id="topping" name="topping"/>
                <label>I agree to all the terms and privacy policy</label>
            </div>
            <div className={zer.butt}>
                <div className={zer.bac}>
                <Link to="/Examiner1"><button>Back</button></Link>
                    </div>
                <div className={zer.nes}>
                   <Link to="/LandingPage"><button>Confirm</button></Link>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Examiner2;