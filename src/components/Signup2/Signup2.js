import {Link} from "react-router-dom";
import FirstSidebar from "../FirstSidebar/FirstSidebar";
import {Box, Button, Input, Flex, Heading,Text,UnorderedList,ListItem, form} from "@chakra-ui/react"
import sub from "./Signup2.module.scss"
const Signup2 = () => {
    return ( 
        <Flex>
            <FirstSidebar/>
            <Box h='100vh' w='60%' bg='#042A37' justifyContent='center' color='white' textAlign='center' pt='3rem'>
                    <Heading mb='2rem'>What Are You Registering As?</Heading>
                    <Button bg='#042A37'border='1px solid blue' w='30rem' _hover={{background: "transparent"}}>
                        <Flex bg='transparent'>
                            <Link to='/Organization'><Button _hover={{background:"blue" , color:'white'}} mx='2rem' bg='transparent'  hover='text-black' >Organization</Button></Link>
                            <Link to='/User'><Button _hover={{background:"blue", color:"white"}} mx='2rem' bg='transparent'>User</Button></Link>
                        </Flex>
                    </Button>
                    <UnorderedList mt='3rem' fontSize='2xl'>
                        <ListItem mb='1rem'>Registering as an organisation allows you to <br />create an account for an organization or an <br /> institution such as a school, it also allows you <br />to manage multiple examiner accounts such <br /> as teacher and it includes the features of an <br />examiner</ListItem>
    
                        <ListItem>Registering as a user allows you to take quizes <br /> and take tests for practice</ListItem>
                    </UnorderedList>
                    <Link to="/Signup"><Button _hover={{background:"blue"}} bg='blue' mt='1rem' width='8rem' >Back</Button></Link>
                </Box>
        
       
       </Flex>
     );
}
 
export default Signup2;