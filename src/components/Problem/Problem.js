import Sidebar from "../Sidebar/Sidebar";
import PieNav from "../PieNav/PieNav";
import {Link} from "react-router-dom"
import {Box, Button,Text,  Stack, Heading,Input, Select, Textarea} from "@chakra-ui/react";

const Problem = () => {
    return ( 
        <>
        <Sidebar/>
        <PieNav/>
        <Stack ml='19rem' boxShadow='2xl' rounded='xl' w='155vh' mt='2rem'>
            <Box ml='10rem'>
            <Select placeholder='Category' w='35rem' h='4rem' mt='1rem'>
                    <option value='option1'>Quiz</option>
                    <option value='option2'>Account</option>
                    <option value='option3'>Feedback</option>
                </Select>
                <Input w='35rem' my='1rem' h='4rem' type='text' placeholder='Subject'/>
                <Input w='35rem' mb='1rem' h='4rem' type='text' placeholder='Email'/>
                <Textarea h='10rem' w='50rem' placeholder='Briefly describe the situation our support team will get back to you as soon as possible'/>
                <Link to="#"><Button h='4rem' my='2rem' ml='10rem' w='10rem' color='white' bg='#444ADD' _hover={{background:"#444ADD", color:"white"}}>Submit</Button></Link>
            </Box>
        </Stack>
        {/* <div className={pro.category}>
            <div className={pro.cat}>
            <label>Category</label>
                <select id="dropdown">   
                    <option>Category</option>
                    <option>Quiz</option>
                    <option>Account</option>
                    <option>Feedback</option>
                </select>
                </div>
                <div className={pro.sub}>
                   <label>Subject</label> 
                   <input type="text" id="text" placeholder="Subject"/>
                </div>
                <div className={pro.ema}>
                   <label>Email</label> 
                   <input type="text" id="text" placeholder="Email"/>
                </div>
                <div className={pro.description}>
                   <label>Description of problem</label><br />
                    <textarea name="textarea" id="" cols="50" rows="50">Tell us about your problem</textarea>
                </div>
                <div className={pro.brief}>
                    <p>Briefly describe the situation our support team will get back to you as soon as possible</p>
                </div>
                <div class={pro.bnn}>
                <button>Submit</button>        
             </div>
        </div> */}
        </>
     );
}
 
export default Problem;