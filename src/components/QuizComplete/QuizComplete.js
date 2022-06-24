
import Sidebar from "../Sidebar/Sidebar";
import {Box, Button,Text,  Stack, Heading} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import PieNav from "../PieNav/PieNav";
const QuizComplete = () => {
    const style={color:'blue'}
    return ( 
        <>
        <Sidebar/>
        <PieNav/>
        <Stack ml='19rem' boxShadow='2xl' rounded='xl' w='155vh' mt='1rem'>
            <Box textAlign='center' mt='3rem'>
                <Heading fontSize='4rem'>Test Completed</Heading>
                <Heading fontSize='1.2rem' my='3rem'>You Have Successfully Completed the Test</Heading>
                <Heading>You answered <span style={style}>80% </span>of <br /> the questions correctly</Heading>
                <Text my='1rem'><span style={style}>Click here!</span> To See What You Got Wrong</Text>
                <Link to="/QuizComplete1"><Button h='4rem' my='3.5rem' w='10rem' color='white' bg='#444ADD' _hover={{background:"#444ADD", color:"white"}}>Next</Button></Link>
            </Box>
        </Stack>
       
        </>
     );
}
 
export default QuizComplete;