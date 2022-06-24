import React from "react";
import {Link} from "react-router-dom";
import {useFormik} from "formik"
import * as yup from "yup"
import { useMediaQuery } from '@chakra-ui/media-query';
import {FcGoogle} from "react-icons/fc"
import { Flex,Box,Heading, ButtonGroup, VStack, Button, Spacer ,Text, FormControl, form,  FormLabel,Input , Stack ,Checkbox} from '@chakra-ui/react'
import {FiEyeOff} from "react-icons/fi"
import {useState} from "react"
import {FiEye} from "react-icons/fi"
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import axios from "axios"

const PASSWORD_REGEX = /.{8,}/;
const style = {marginLeft:"-1.8rem"};

const Home= () => {

   const toast = useToast();
   const navigate = useNavigate();
   const [error, setError] = useState(false);
   const onSubmit = async (values, actions) => {
      try {
      const user = await axios.post("https://arcane-bayou-79576.herokuapp.com/api/users/login/user",{...values})
      toast({
          title: 'Thanks',
          description: "You Have Successfully Logged In",
          status: 'success',
          duration: 9000,
          position: 'top',
          isClosable: true,
        })
          navigate("/LandingPage")
          formik.resetForm();
      } catch(err) {
          toast({
              title: 'Login Failed',
              description: "Invalid Password or Email",
              status: 'success',
              duration: 9000,
              position: 'top',
              isClosable: true,
            })
         setError(err.response.data.message);
         
      }
      
  };
  
 
   const formik = useFormik({
      initialValues: {
         email:"",
         password:"",
         remember:""
      },
      validationSchema : yup.object({
         email: yup.string().email( "Invalid Email").required("please enter your email address"),
         password: yup.string().matches(PASSWORD_REGEX, "password must contain atleast min 8 characters").required("password is required"),
         remember: yup.boolean().oneOf([true], "Please Agree To All Terms & Conditions").required("Required")
     }),
     onSubmit,
   });

   const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");
    return ( 
    <Flex direction={isNotSmallerScreen ? "row" : "column"} width='100%' h='100vh'>
   <Box width='50%' backgroundSize='cover'  bg='#042A37' overflowY='hidden' overflow='hidden' overflowX='hidden'  >
      <Flex  alignItems='center' gap='2' >
      <Box p='2'>
        <img src="images/logo.png" alt="" />
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
         <Heading as='h6' color='white' fontSize={{ base: '20px', md: '40px', lg: '25px' }} >Have an account?</Heading>
        <Link to="/Signup"><Button colorScheme='teal'>Sign Up</Button></Link>
      </ButtonGroup>
    </Flex>
   
    <Flex  width='full' align='center' height='100vh' overflowY='hidden' overflow='hidden' overflowX='hidden' bg='#042A37' flexDirection='column' justifyContent='center'>
    <Button mt='-5rem'  border="3px solid teal"  rounded="xl" w='20rem' bg='transparent' _hover={{background:"transparent"}}  justifyContent="center">
    <Flex color="white" rounded="xl" textAlign="center" columnGap='1rem'>
         <FcGoogle size={30}/>
         <Heading fontSize="1.5rem">Continue With Google</Heading>
    </Flex>
    </Button>
    <Box bg='#042A37' color='white' textAlign='center' mt='3rem'>
         <Heading as='h1'  fontSize='xxx-large' fontSize={{ base: '24px', md: '40px', lg: '45px' }}>Welcome</Heading>
         <Text fontSize='3xl' fontSize={{ base: '24px', md: '40px', lg: '30px' }}>Login in to your account</Text>
    </Box>
      <VStack as="form" onSubmit={formik.handleSubmit} color='white'>
         <FormControl color='white'   p='3' w={[400, 600, 500]}>
            <FormLabel fontSize={{ base: '24px', md: '40px', lg: '23px' }}>Email Address</FormLabel>
            <Input type='email'
            name="email"
             placeholder='Enter your email address'
             _placeholder={{color:"white"}}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.email}
             className={formik.errors.email && formik.touched.email ? "input-error" :""}
             />
              {formik.touched.email && formik.errors.email ? <p className="blue">{formik.errors.email}</p> : null}
         </FormControl >
         <FormControl color='white'  p='3' >
            <FormLabel fontSize={{ base: '24px', md: '40px', lg: '23px' }}>Password</FormLabel>
         
            <Box>
            <Input type='Password' 
            name="password"
            placeholder='Enter your Password'
            _placeholder={{color:"white"}}
            onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.password}
             className={formik.errors.password && formik.touched.password ? "input-error" :""}
            />
              {formik.touched.password && formik.errors.password ? <p className="blue">{formik.errors.password}</p> : null}
              </Box>
              
              
         </FormControl>
         <Flex isInline justifyContent='space-between' color='white' py='1rem' columnGap="5rem">
            <Box>
               <Checkbox 
               type="checkbox"
               name="remember"
               fontSize={{ base: '24px', md: '40px', lg: '35px' }}
               onBlur={formik.handleBlur}
               value={formik.values.remember}
               onChange={formik.handleChange}
               >Accept All Terms & Conditions
               </Checkbox>
               {formik.touched.remember && formik.errors.remember ? <p className="blue">{formik.errors.remember}</p> : null}
            </Box>
            <Box>
               <Text  colorScheme='teal' fontSize={{ base: '15px', md: '30px', lg: '15px' }}>Forgot your password?</Text>
            </Box>
         </Flex>
        
            <Button  disabled={!formik.isValid} type="submit" mt='2rem' width='full' colorScheme='teal' mt='3rem' w={[400,  600, 500]}>Login</Button>
        
      </VStack>
   </Flex>
</Box>
<Box bg='rgb(10, 10, 49)' height='100vh' width='50%' color='white' justifyContent='center' alignContent='center' alignItems='center' >
      <img 
      src="images/people.png" 
      height='350rem' 
      width='550rem'
      alt="" />
      <Heading m='3'>Quizzy</Heading>
      <Heading m='3'>Landing Page Ui Design</Heading>
      <Text m='3' as='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Tempore suscipit doloribus magnam aliquid expedita numquam officia <br /> impedit sint asperiores ad, facilis recusandae, quisquam similique <br /> perferendis ratione sed architecto. Excepturi, tempora.</Text>
</Box>
</Flex> 
   
     
        
     );
}
 
export default Home;
