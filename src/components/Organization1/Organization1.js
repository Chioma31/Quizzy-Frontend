import {Link} from "react-router-dom";
import {Box, Button, Input, Flex, Heading, form} from "@chakra-ui/react"
import FirstSidebar from "../FirstSidebar/FirstSidebar";
import cer from './Organization1.module.scss'
import { First } from "react-bootstrap/esm/PageItem";
const Organize = () => {
    return ( 
        <Flex>
            <FirstSidebar/>
         {/* <div className={cer.all}>
             <div className={cer.sidebar}>
             <div className={cer.top}>
             <img src="images/logo.png" alt="" />
             </div>
             <div className={cer.write}>
                <ul>
                     <li className={cer.profile}><p>Profile Details</p></li>
                     <li  className={cer.orga}><p>Organisational/Institutional<br></br> Details</p></li>
                     <li><p>Confirm</p></li>
                </ul>
             </div>
             </div> */}
            <Box  h='100vh' w='60%' bg='#042A37' justifyContent='center' textAlign='center' pt='3rem' color='white'>
                <Heading>What are you registering as?</Heading>
                <Button width='20rem' mt='2rem'>
                    <Button width='15rem' bg='blue' _hover={{background:"blue", color:"white"}}>Organization</Button>
                </Button>
                <form >
                    <Input my='1rem' width='35rem' type="text" Id="text" placeholder="Country"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="State"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="City"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="Zipcode"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="Address"/>
                </form>
                <Flex justifyContent='center' columnGap='5rem' mt='3rem'>
                    <Link to="/Organization"><Button width='8rem' bg='blue' _hover={{background:"blue", color:"white"}}>Back</Button></Link>
                    <Link to="/Organization2"><Button width='8rem' bg='blue' _hover={{background:"blue", color:"white"}}>Next</Button></Link>
                </Flex>
            </Box>
            {/* <div className={cer.organ}>
                <h1>what are you registering as?</h1>
                <div className={cer.org}>
                <input type="text" id="text" placeholder="Organization"/>
                </div>
                <div className={cer.regis}>
                    <input type="text" id="text" placeholder="Country"/><br />
                    <input type="text" id="text" placeholder="State"/><br />
                    <input type="text" id="text" placeholder="City"/><br />
                    <input type="text" id="text" placeholder="Zipcode"/><br />
                    <input type="text" id="text" placeholder="Address"/>
                </div>
                <div className={cer.butt}>
                    <div className={cer.bac}>
                    <Link to="/Organization"><button>Back</button></Link>
                        </div>
                    <div className={cer.nes}>
                       <Link to="/Organization2"><button>Next</button></Link>
                    </div>
                </div>
            </div> */}
        </Flex>
     );
}
 
export default Organize;