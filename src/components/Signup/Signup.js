import {Link} from "react-router-dom";
import sup from "./Signup.module.scss"
import FirstSidebar from '../FirstSidebar/FirstSidebar';
import {Box, Text, Heading, Button, Flex} from "@chakra-ui/react"
const Sidebar = () => {
    return ( 
       <Flex>
       <FirstSidebar/>
       
                <Box h='100vh' w='60%' bg='#042A37' justifyContent='center' color='white' textAlign='center' pt='3rem'>
                    <Heading mb='2rem'>What Are You Registering As?</Heading>
                    <Button bg='#042A37'border='1px solid blue' w='30rem' _hover={{background: "transparent"}}>
                        <Flex bg='transparent' >
                            <Link to='/Organization'><Button _hover={{background:"blue" , color:'white'}} mx='2rem' bg='transparent'  hover='text-black' >Organization</Button></Link>
                            <Link to='/User'><Button _hover={{background:"blue", color:"white"}} mx='2rem' bg='transparent'>User</Button></Link>
                        </Flex>
                    </Button>
                    <Text ml='18rem'>Choose One <Link to='/Signup2' color='blue'>What's this?</Link></Text>
                    <Link to="/Signin"><Button _hover={{background:"blue",color:"white"}} bg='blue' mt='20rem' width='8rem' >Back</Button></Link>
                </Box>
        </Flex>
     );
}
 
export default Sidebar;