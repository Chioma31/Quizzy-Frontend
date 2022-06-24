import {Link} from "react-router-dom";
import xer from './Examiner1.module.css'
const Examiner1 = () => {
    return ( 
        <div className={xer.all}>
            <div className={xer.sidebar}>
            <div className={xer.top}>
            <img src="images/logo.png" alt="" />
            </div>
            <div className={xer.write}>
               <ul>
                    <li className={xer.profile}><p>Profile Details</p></li>
                    <li  className={xer.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                    <li><p>Confirm</p></li>
               </ul>
            </div>
            </div>
            <div className={xer.organ}>
                <h1>what are you registering as?</h1>
                <div className={xer.org}>
                <input type="text" id="text" placeholder="Examiner"/>
                </div>
                <div className={xer.regis}>
                    <input type="text" id="text" placeholder="Department"/><br />
                    <input type="text" id="text" placeholder="Staff Identification Number"/><br />
                    <input type="text" id="text" placeholder="City"/><br />
                    <input type="text" id="text" placeholder="Zipcode"/><br />
                    <input type="text" id="text" placeholder="Address"/>
                </div>
                <div className={xer.butt}>
                    <div className={xer.bac}>
                    <Link to="/Examiner"><button>Back</button></Link>
                        </div>
                    <div className={xer.nes}>
                       <Link to="/Examiner2"><button>Next</button></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Examiner1;