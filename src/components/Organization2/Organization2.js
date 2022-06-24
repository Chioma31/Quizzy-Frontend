import {Link} from "react-router-dom";
import per from './Organization2.module.scss'
import {Box, Button, Input, Flex, Heading, form, Stack, Checkbox, Text} from "@chakra-ui/react"
import FirstSidebar from "../FirstSidebar/FirstSidebar";
const Pattern = () => {
    return ( 
        <Flex>
            <FirstSidebar/>
        {/* <div className={per.all}>
        <div className={per.sidebar}>
        <div className={per.top}>
        <img src="images/logo.png" alt="" />
        </div>
        <div className={per.write}>
           <ul>
                <li className={per.profile}><p>Profile Details</p></li>
                <li  className={per.orga}><p>Organisational/Institutional<br></br> Details</p></li>
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
                    <Input my='1rem' width='35rem' type="text" Id="text" placeholder="Email"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="Password"/><br />
                    <Input my='1rem' width='35rem' type="text" id="text" placeholder="Confirm Password"/><br />
                    <Stack  justifyContent='space-between' color='white'>
                        <Flex direction='column' justifyContent='center' textAlign='center' >
                            <Checkbox justifyContent='center' textAlign='center'  fontSize={{ base: '24px', md: '40px', lg: '35px' }}>Remember Me</Checkbox>
                            <Checkbox justifyContent='center' textAlign='center'  fontSize={{ base: '24px', md: '40px', lg: '35px' }}>I agree to all the terms and privacy policy</Checkbox>
                        </Flex>
                    </Stack>
                </form>
                <Flex justifyContent='center' columnGap='5rem' mt='6rem'>
                    <Link to="/Organization1"><Button width='8rem' bg='blue' _hover={{background:"blue", color:"white"}}>Back</Button></Link>
                    <Link to="/LandingPage"><Button width='8rem' bg='blue' _hover={{background:"blue", color:"white"}}>Next</Button></Link>
                </Flex>
            </Box>
        {/* <div className={per.organ}>
            <h1>what are you registering as?</h1>
            <div className={per.org}>
            <input type="text" id="text" placeholder="Organization"/>
            </div>
            <div className={per.regis}>
                <input type="text" id="text" placeholder="Email"/><br />
                <input type="text" id="text" placeholder="Password"/><br />
                <input type="text" id="text" placeholder="Comfirm Password"/><br />
            </div>
            <div className={per.check}>
                <input type="checkbox" id="topping" name="topping"/>
                <label>Rememeber me</label><br />
            </div>
            <div className={per.check1}>
                <input type="checkbox" id="topping" name="topping"/>
                <label>I agree to all the terms and privacy policy</label>
            </div>
            <div className={per.butt}>
                <div className={per.bac}>
                <Link to="/Organization1"><button>Back</button></Link>
                    </div>
                <div className={per.nes}>
                   <Link to="/LandingPage"><button>Confirm</button></Link>
                </div>
            </div>
        </div> */}
    </Flex>
     );
}
 
export default Pattern;