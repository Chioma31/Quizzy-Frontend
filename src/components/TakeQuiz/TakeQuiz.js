import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import {Box, Button,Text,Input,  Stack, Heading} from "@chakra-ui/react";
import PieNav from "../PieNav/PieNav";
const TakeQuiz = () => {
    return ( 
        <>
         <Sidebar/>
        <PieNav/>
            <Stack ml='19rem' boxShadow='2xl' rounded='xl' w='155vh' mt='1rem'>
                <Box textAlign='center'>
                    <Heading fontSize='3rem' mb='2rem'>Take Quiz!</Heading>
                    <Heading fontSize='1.5rem' mb='.5rem'>Type your quiz code here</Heading>
                    <Input w='25rem' type='text' placeholder="Quiz Code"/>
                </Box>
                <Box pt='3rem'>
                    <Heading ml='2rem'>Quiz Instructions!</Heading>
                    <Box bg='whitesmoke' w='58rem' boxShadow='md' rounded='xl' pl='2rem' mt='1rem' ml='2rem'>
                        <Text p='1rem' fontSize='1rem'>
                            The Quiz consist of questions carefully deseigned to help you  self-assess your comprehensation of the information<br />
                           presented on topics covered in the model.Each question in the quiz is of multiple choices. Read each questions carefully <br />
                           and click on the correct answer and the next button for the next questionIf you make a mistake you can go back <br />by clicking previous button to go to the recent question
                           After responding to alll the questions ,<br/> click on the submit button to submit your answers
                        </Text>
                    </Box>
                    <Link to="/TestYourSelf"><Button h='4rem' ml='25rem' my='2rem' w='10rem' color='white' bg='#444ADD' _hover={{background:"#444ADD", color:"white"}}>Next</Button></Link>
                </Box>
            </Stack>
            </>
     );
}
 
export default TakeQuiz;