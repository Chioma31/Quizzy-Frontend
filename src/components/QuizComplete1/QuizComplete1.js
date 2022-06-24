import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import PieNav from "../PieNav/PieNav";
import {Box, Button,Text,  Stack, Heading} from "@chakra-ui/react";
import kui from './QuizComplete1.module.css'
const QuizComplete1 = () => {
    return (  
        <>
        <Sidebar/>
        <PieNav/>
        <Stack ml='19rem' boxShadow='2xl' rounded='xl' w='155vh' mt='1rem'>
            <Box textAlign='center' mt='3rem'>
                <Heading fontSize='4rem'>Test Completed</Heading>
                <Heading fontSize='1.2rem' my='3rem'>You Have Successfully Completed the Test</Heading>
                <Heading>Your Results Have been <br /> recorded And Sent To<br />  Your Institution</Heading>
                <Link to="/AdminPage"><Button h='4rem' my='3.5rem' w='10rem' color='white' bg='#444ADD' _hover={{background:"#444ADD", color:"white"}}>Dashboard</Button></Link>
            </Box>
        </Stack>
        </>
    );
}
export default QuizComplete1;