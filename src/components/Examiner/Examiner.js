import {Link} from "react-router-dom";
import exa from './Examiner.module.css'
const Examiner = () => {
    return ( 
        <div className={exa.all}>
            <div className={exa.sidebar}>
            <div className={exa.top}>
            <img src="images/logo.png" alt="" />
            </div>
            <div className={exa.write}>
               <ul>
                    <li className={exa.profile}><p>Profile Details</p></li>
                    <li  className={exa.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                    <li><p>Confirm</p></li>
               </ul>
            </div>
            </div>
            <div className={exa.organ}>
                <h1>what are you registering as?</h1>
                <div className={exa.org}>
                <input type="text" id="text" placeholder="Examiner"/>
                </div>
                <div className={exa.regis}>
                    <input type="text" id="text" placeholder="First Name"/><br />
                    <input type="text" id="text" placeholder="Surname"/><br />
                    <input type="text" id="text" placeholder="Middle Name"/><br />
                    <input type="text" id="text" placeholder="Name of Organization/Institution"/><br />
                    <input type="text" id="text" placeholder="Organization/Institution code"/>
                </div>
                <div className={exa.butt}>
                    <div className={exa.bac}>
                    <Link to="/Signup"><button>Back</button></Link>
                        </div>
                    <div className={exa.nes}>
                       <Link to="/Examiner1"><button>Next</button></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Examiner;