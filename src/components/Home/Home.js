
import {BsFillArrowRightSquareFill} from "react-icons/bs";
import First from '../First/First'
import Footer from '../Footer/Footer'
import {Stack, Flex, Box, Text, Image ,Heading,  Input ,Button} from "@chakra-ui/react"
import {useMediaQuery} from "@chakra-ui/react"
import {Container, Col, Row} from "react-bootstrap"
import {Link} from "react-router-dom"
const Home = () =>{
    const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");

    return(
        <>
        <First/>
            <Stack  bg='rgb(46, 46, 78)' h='auto' w='100%' pt='5rem' overflowX='hidden' alignContent='center' justifyContent='center'>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} columnGap='3rem'>
                    <Image 
                    h='30rem' 
                    w='40rem' 
                    w={[300, 400, 600]}
                    alignSelf='center' 
                    src='images/people.png'/>
                    <Image  ml={isNotSmallerScreen ? "null" : "3rem"} h='25rem' mt='3rem' w='35rem' src='images/circle.png' w={[300, 400, 600]}/>
                </Flex>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} columnGap='10rem'>
                    <Box color='white' ml={isNotSmallerScreen ? "4rem" : "null"} mb={isNotSmallerScreen ? "null" : "2rem"}>
                        <Heading  fontSize="3rem">Quizzy</Heading>
                        <Heading as='h3' fontSize={{ base: '22px', md: '40px', lg: '35px' }}>Unlocking Knowledge at the <br></br>speed of thought</Heading>
                        <Text> Quizzy app is an   Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!</Text>
                    </Box>
                    <Box  mb={isNotSmallerScreen ? "null" : "2rem"}>
                        <Heading as='h6' color='white' fontSize='2rem' fontSize={{base: '`20px', md: '40px', lg: '30px' }}>Sign in above or type profile code here</Heading>
                        <Flex>
                        <Box>
                            <Input type="text" name='text' placeholder='Profile Code' w='30rem' w={[300, 600, 500]}/>
                        </Box>
                        <Box>
                        <Link to="/Recorder"><Button ><BsFillArrowRightSquareFill size={40}  color='blue'/></Button></Link>
                        </Box>
                        </Flex>
                    </Box>
                </Flex>
               
            </Stack>
             <Footer/>
     </>

          
     )
 }
 export default Home;