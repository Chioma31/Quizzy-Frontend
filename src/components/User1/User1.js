import {Link} from "react-router-dom";
import {Box, Button, Input, Flex, Heading, form} from "@chakra-ui/react"
import FirstSidebar from "../FirstSidebar/FirstSidebar";
import use from './User1.module.css'
const User1 = () => {
    return ( 
        <Flex>
        <FirstSidebar/>
        {/* <div className={use.all}>
            <div className={use.sidebar}>
            <div className={use.top}>
            <img src="images/logo.png" alt="" />
            </div>
            <div className={use.write}>
               <ul>
                    <li className={use.profile}><p>Profile Details</p></li>
                    <li  className={use.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                    <li><p>Confirm</p></li>
               </ul>
            </div>
            </div> */}
            <Box  h='100vh' w='60%' bg='#042A37' justifyContent='center' textAlign='center' pt='3rem' color='white'>
                <Heading>What are you registering as?</Heading>
                <Button width='20rem' mt='2rem'>
                    <Button width='15rem' bg='blue' _hover={{background:"blue", color:"white"}}>User</Button>
                </Button>
                <form >
                    <Input my='1rem' width='35rem' type="text" Id="text" placeholder="Department"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="Staff Identification Number"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="City"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="Zipcode"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="Address"/>
                </form>
                <Flex justifyContent='center' columnGap='5rem' mt='3rem'>
                    <Link to="/User"><Button width='8rem' bg='blue' _hover={{background:"blue", color:"white"}}>Back</Button></Link>
                    <Link to="/User2"><Button width='8rem' bg='blue' _hover={{background:"blue", color:"white"}}>Next</Button></Link>
                </Flex>
            </Box>
            {/* <div className={use.organ}>
                <h1>what are you registering as?</h1>
                <div className={use.org}>
                <input type="text" id="text" placeholder="User"/>
                </div>
                <div className={use.regis}>
                    <input type="text" id="text" placeholder="Department"/><br />
                    <input type="text" id="text" placeholder="Staff Identification Number"/><br />
                    <input type="text" id="text" placeholder="City"/><br />
                    <input type="text" id="text" placeholder="Zipcode"/><br />
                    <input type="text" id="text" placeholder="Address"/>
                </div>
                <div className={use.butt}>
                    <div className={use.bac}>
                    <Link to="/User"><button>Back</button></Link>
                        </div>
                    <div className={use.nes}>
                       <Link to="/User2"><button>Next</button></Link>
                    </div>
                </div>
            </div> */}
      
        </Flex>
     );
}
 
export default User1;