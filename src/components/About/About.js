import First from '../First/First';
 import {Container, Row, Col, Card} from "react-bootstrap"
 import Footer from '../Footer/Footer'
 import {Box, Stack, Heading, Text, Flex, Image} from "@chakra-ui/react"
const About = () => {
    return ( 
        <>
        <First/>
        <Stack h='auto' w='100%' color='white' textAlign='center' bg='rgb(67, 67, 104)' pt='4rem' justifyContent='center'>
            <Heading>Quizzy comes with amazing</Heading>
            <Heading>features like</Heading>
            <Flex textAlign='center' justifyContent='center' columnGap='10rem' pt='1rem'>
                <Box boxShadow='2xl' p='6' rounded='md'>
                <Image ml='6rem' src="images/Vector1.png" alt="" />
                <Text>Taking exams with your devices</Text>
                <Text>easily</Text>
                </Box>
       
                <Box boxShadow='2xl' p='6' rounded='md'>
                <Image ml='6rem'  src="images/Vector2.png" alt="" />
                <Text>Plenty of Tests to help you prepare</Text>
                <Text>for your exams</Text>
                </Box>
        
                <Box boxShadow='2xl' p='6' rounded='md'>
                <Image ml='6rem'  src="images/Vector3.png" alt="" />
                <Text>Detailed statistics showing your</Text>
                <Text>progress across your tests</Text>
                </Box>
        </Flex>
            <Heading textAlign='center'>What our clients say</Heading>
            <Text textAlign='center'>see what our customer say about us. It really matter for us. <br/> How good or bad
                        We will make it for evaluation to make Quizzy better.</Text>
        <Flex textAlign='center' pt='2rem' justifyContent='center' columnGap='5rem' pb='2rem'>
            <Box>
                <Text boxShadow='2xl' p='6' rounded='md' bg='rgb(67, 67, 104)' >Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Iste, dicta saepe? Labore recusandae <br /> nostrum reiciendis, quas dolorem <br /> repudiandae delectus. Libero similique, <br /> dolore doloribus voluptas vel facere <br /> quasi repellat numquam. Adipisci!</Text>
            </Box>
            <Box>
                <Text boxShadow='2xl' p='6' rounded='md' bg='rgb(67, 67, 104)'  >Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Iste, dicta saepe? Labore recusandae <br /> nostrum reiciendis, quas dolorem <br /> repudiandae delectus. Libero similique, <br /> dolore doloribus voluptas vel facere <br /> quasi repellat numquam. Adipisci!</Text>
            </Box>
            <Box>
                <Text boxShadow='2xl' p='6' rounded='md' bg='rgb(67, 67, 104)' >Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Iste, dicta saepe? Labore recusandae <br /> nostrum reiciendis, quas dolorem <br /> repudiandae delectus. Libero similique, <br /> dolore doloribus voluptas vel facere <br /> quasi repellat numquam. Adipisci!</Text>
            </Box>
            
        </Flex>
        </Stack>
        <Footer/>
        </>
           
    
     );
}
 
export default About;