
import {Link} from "react-router-dom";
import {Stack, Flex, Box, Text, Image ,Heading,  Input ,Button} from "@chakra-ui/react"
import {useMediaQuery} from "@chakra-ui/react"
import {BsFillArrowRightSquareFill} from "react-icons/bs";
import SecondNavbar from '../SecondNavbar/SecondNavbar'
import Footer from '../Footer/Footer'
const LandingPage = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");
    return ( 
        <>
        <SecondNavbar/>
            <Stack  bg='rgb(46, 46, 78)' h='auto' w='100%' pt='5rem' overflowX='hidden' alignContent='center' justifyContent='center'>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} columnGap='3rem'>
                    <Image 
                    h='30rem' 
                    w='40rem' 
                    w={[300, 400, 600]}
                    alignSelf='center' 
                    src='images/people.png'/>
                    <Image  ml={isNotSmallerScreen ? "null" : "3rem"} h='25rem' mt='3rem' w='35rem' src='images/contact.png' w={[300, 400, 600]}/>
                </Flex>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} columnGap='10rem'>
                    <Box color='white' ml={isNotSmallerScreen ? "4rem" : "null"} mb={isNotSmallerScreen ? "null" : "2rem"}>
                        <Heading  fontSize="3rem">Quizzy</Heading>
                        <Heading as='h3' fontSize={{ base: '22px', md: '40px', lg: '35px' }}>Unlocking Knowledge at the <br></br>speed of thought</Heading>
                        <Text> Quizzy app is an   Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!</Text>
                    </Box>
                    <Box  mb={isNotSmallerScreen ? "null" : "2rem"}>
                        <Heading as='h6' color='white' fontSize='1.5rem' fontSize={{ base: '`20px', md: '40px', lg: '27px' }}>Sign in above or type profile code here</Heading>
                        <Flex>
                        <Box>
                            <Input type="text" name='text' placeholder='Profile Code' w='20rem' w={[300, 600, 500]}/>
                        </Box>
                       
                        <Box>
                        <Link to="/Recorder"><Button ><BsFillArrowRightSquareFill size={40}  color='blue'/></Button></Link>
                        </Box>
                        
                        </Flex>
                        <Link to="/AdminPage"  ><Button color='white' _hover={{color:"white"}} bg='blue' mt='5rem' ml='15rem'>Dashboard</Button></Link>
                    </Box>
                </Flex>
            </Stack>
             <Footer/>
     </>
    );
}
 
export default LandingPage;