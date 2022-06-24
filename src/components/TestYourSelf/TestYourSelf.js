import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import PieNav from "../PieNav/PieNav";
import {Box, Button,  Stack, Heading, Select} from "@chakra-ui/react";

 
const TestSelf = () => {
    return ( 
        <>
         <Sidebar/>
        <PieNav/>
        <Stack ml='19rem' boxShadow='2xl' rounded='xl' w='155vh' mt='1rem'>
            <Box textAlign='center' justifyContent='center' alignContent='center'>
                <Heading fontSize='3rem'>Test YourSelf!</Heading>
                <Select placeholder='Choose your level of Education' w='35rem' ml='14rem' my='2rem' h='4rem'>
                    <option value='option1'>Highschool</option>
                    <option value='option2'>College/University</option>
                    <option value='option3'>Professional</option>
                </Select>
                <Select placeholder='Choose your exam' w='35rem' ml='14rem' my='2rem' h='3.5rem'>
                    <option value='option1'>WAEC</option>
                    <option value='option2'>JAMB</option>
                    <option value='option3'>NECO</option>
                </Select>
                <Select placeholder='Choose your Subject' w='35rem' ml='14rem' my='2rem' h='3.5rem'>
                    <option value='option1'>Mathematics</option>
                    <option value='option2'>English</option>
                    <option value='option3'>Chemistry</option>
                    <option value='option4'>Biology</option>
                </Select>
                <Select placeholder='Choose your Topic' w='35rem' ml='14rem' my='2rem' h='3.5rem'>
                    <option value='option1'>Algebra</option>
                    <option value='option2'>Differenciation</option>
                    <option value='option3'>Blank</option>
                </Select>
                <Link to="/Recorder"><Button h='4rem' my='1.5rem' w='10rem' color='white' bg='#444ADD' _hover={{background:"#444ADD", color:"white"}}>Start Quiz</Button></Link>
            </Box>
        </Stack>
        
        </>
     );
}
export default TestSelf;