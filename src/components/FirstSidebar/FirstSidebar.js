import {Link} from "react-router-dom";
// import pop from "./Signup3.module.css"
import {Box, Stack ,Image,UnorderedList,ListItem,  Button, Flex} from "@chakra-ui/react"
const FirstSidebar = () => {
    return ( 
            <Stack h='100vh' w='40%' bg='rgb(6, 1, 22)'>
                <Image 
                m='3rem'
                h='5rem'
                w='5rem'
                src="images/logo.png"
                alt=""
                 />
                <Box  color='white' >
                <UnorderedList ml='10rem' mt='3rem'>
                <ListItem mb='1rem'>Profile Details</ListItem>
                <ListItem mb='1rem'>Organisational/Institutional<br></br> Details</ListItem>
                <ListItem>Confirm</ListItem>
                </UnorderedList>
                </Box>
            </Stack>
        // <div className={pop.branch}>
        // <div className={pop.sidebar}>
        //     <div className={pop.top}>
        //     <img src="images/logo.png" alt="" />
        //     </div>
        //     <div className={pop.write}>
        //        <ul>
        //             <li className={pop.profile}><p>Profile Details</p></li>
        //             <li  className={pop.organ}><p>Organisational/Institutional<br></br> Details</p></li>
        //             <li><p>Confirm</p></li>

        //        </ul>
        //     </div>
        //     {/* <div className="buttom">
        //         <p>Save and exit</p>
        //     </div> */}
        // </div>
        // <div className={pop.branch1}>
        //     <div className={pop.icon}>
        //         <img src="images/profile1.png" alt="" />
        //         <h2>Choose a photo</h2>
        //     </div>
        //     <div className={pop.login}>
        //         <div className={pop.login2}>
        //         <div><label>Username</label></div>
        //         <div><input type="text"name='text' placeholder='Username' /></div>
        //         <div><label>Password</label></div>
        //         <div><input type="text"name='text' placeholder='Password' /></div>
        //         <div><label>Confirm</label></div>
        //         <div><input type="text"name='text' placeholder='Password' /></div>
        //         </div>
        //         <div className={pop.checkbox}>
        //             <input type="checkbox" name="topping" id="topping"/>
        //             <label>Remember me</label><br />
        //             <input type="checkbox" name="topping" id="topping"/>
        //             <label>I agree to all the terms and privacy policy</label>
        //         </div>
        //         <div className={pop.lbutt}>
        //             <div className={pop.lbutt1}>
        //                 <Link to="/Signup2"><button >Back</button></Link>
        //                 </div>
        //             <div className={pop.lbutt2}>
        //                 <Link to="/LandingPage"><button >Confirm</button></Link>
        //                 </div>
        //         </div>
                

        //     </div>
        // </div>
        // </div>
     );
}
 
export default FirstSidebar;