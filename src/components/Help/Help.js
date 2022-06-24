import First from '../First/First';
import  help from './Help.module.scss';
import {Box, form, Button, Textarea,  Image, Flex,Text, Heading, TagLabel, Input, FormControl, FormLabel, Select, Stack} from "@chakra-ui/react"
const Help = () => {
    return (
        <>
         <First/>
         <Flex bg='rgb(67, 67, 104)' h='92.5vh' w='100%' overflowY='hidden' columnGap='5rem' mt='3rem' alignContent='center' color="white" justifyContent='center' >
            <Box>
            <Image 
                    h='30rem' 
                    w='40rem' 
                    w={[300, 400, 600]}
                    alignSelf='center' 
                    src='images/people.png'/>
                <Heading as='h3' fontSize='2rem'>Welcome To Quizzy</Heading>
                <Heading as='h6' fontSize='1.5rem'>What Can We Help You With?</Heading>
            </Box>
            <Box mt='7rem'>
            <FormControl mb='1.5rem'>
                <Flex>
                <FormLabel htmlFor='country' fontSize='2xl'>Category</FormLabel>
                <Select id='Category' placeholder='Category' width='30rem'>
                    <option>Quiz</option>
                    <option>Account</option>
                    <option>Feedback</option>
                </Select>
                </Flex>
                </FormControl>
                <FormControl mb='1.5rem'>
                    <Flex>
                        <FormLabel fontSize='2xl'>Subject</FormLabel>
                        <Input type='text' placeholder='Subject'/>
                    </Flex>
                </FormControl>
                <FormControl mb='1.5rem'>
                    <Flex>
                        <FormLabel fontSize='2xl'>Email</FormLabel>
                        <Input type='text' placeholder='Email'/>
                    </Flex>
                </FormControl>
                <Heading>Description of Problem</Heading>
                <Textarea h='7rem' placeholder='Tell us more about your problem'/>
                <Text>Briefly describe the situation our surport team will get back to you as soon as possible</Text>
                <Button width='10rem' ml='10rem' mt='2rem' bg='blue.400' _hover={{background:"blue.600"}}>Submit</Button>
            </Box>
         </Flex>
            {/* <div className={help.Help} >
                <div className={help.Image} class="d-flex">
                    <div className={help.People}>
                        <img src="./images/people.png" alt="" />
                        <h1>Welcome To Quizzy</h1>
                        <h3>What can we help you with?</h3>
                    </div>
                    <div className={help.Input}>
                        <label>Category</label>
                        <select id="dropdown">   
                            <option>Category</option>
                            <option>Quiz</option>
                            <option>Account</option>
                            <option>Feedback</option>
                        </select><br />
                        <div className={help.class}>
                        <label htmlFor="">Subject</label>
                        <input type="text" placeholder='Subject'/><br />
                        <label htmlFor="">Email</label>
                        <input  type="text" placeholder='Email'/>
                        </div>
                        <div className={help.placeholder}>
                        <label htmlFor="">Description of Problem</label><br />
                        <textarea name="textarea" id="textarea" cols="10" rows="5">Tell us more about your problem</textarea>
                        <p>Briefly describe the situation our surport team will get back to you as soon as possible</p>
                        <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
     );
}
 
export default Help;