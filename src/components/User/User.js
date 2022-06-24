import {Link} from "react-router-dom";
import {useState} from "react"
import {Box, Button, Input, Flex, Heading, Text,VStack } from "@chakra-ui/react"
import FirstSidebar from "../FirstSidebar/FirstSidebar";
import { useFormik} from 'formik';
import * as yup from "yup"
import {FiEyeOff} from "react-icons/fi"
import {FiEye} from "react-icons/fi"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'


const PASSWORD_REGEX = /.{8,}/;

const User = () =>{
 const toast = useToast()
const navigate = useNavigate();
const [error, setError] = useState(false);
const onSubmit = async (values, actions) => {
    try {
    const user = await axios.post("https://arcane-bayou-79576.herokuapp.com/api/users/register/user",{...values})
    toast({
        title: 'Account Created',
        description: "Your Account Have Been Created SuccessFully Thanks For Registering",
        status: 'success',
        duration: 9000,
        position: 'top',
        isClosable: true,
      })
        navigate("/Signin")
        formik.resetForm();
    } catch(err) {
        console.log(err)
        toast({
            title: 'Sorry Acccount Can Not Be Created',
            description: "User With This Email Already Exist",
            status: 'success',
            duration: 9000,
            position: 'top',
            isClosable: true,
          })
       setError(err.response.data.message);
       
    }
    
};

    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () =>{
        if(passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };

    console.log(passwordType)

    const style = {marginLeft:"-1.8rem"}
    const formik = useFormik({
        initialValues:{
            firstname: "",
            surname:"" ,
            username:"" , 
            email:"", 
            password:"", 
            password2:""
        },
        validationSchema : yup.object({
            firstname: yup.string().min(3, "please enter your  firstname").required("Firstname is required"),
            surname: yup.string().min(3, "please enter your surname").required("Surname is required"),
            username: yup.string().min(3, "please enter your username").required("Username is required"),
            email: yup.string().email( "Invalid Email").required("please enter your email address"),
            password: yup.string().matches(PASSWORD_REGEX, "password must contain atleast min 8 characters").required("password is required"),
            password2: yup.string().required("please confirm your password").when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: yup.string().oneOf([yup.ref("password")], "password does not match"),
            }),
        }),
        onSubmit,
    });

    return ( 
        <Flex>
        <FirstSidebar/>
            <Box  h='100vh' w='60%' bg='#042A37' justifyContent='center' textAlign='center' pt='1rem' color='white'>
                <Heading>What are you registering as?</Heading>
                <Button width='20rem' mt='1rem'>
                    <Button width='15rem' bg='blue' _hover={{background:"blue", color:"white"}}>User</Button>
                </Button>
                <VStack as="form" onSubmit={formik.handleSubmit}>
                    <div>
                    <Input
                     name="firstname" 
                     text="text"
                     my='1rem' width='35rem' type="text" Id="text" 
                     placeholder="firstname" 
                     _placeholder={{color:"white"}}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.firstname}
                     className={formik.errors.firstname && formik.touched.firstname ? "input-error" :""}
                     />
                    {formik.touched.firstname && formik.errors.firstname ? <p className="red">{formik.errors.firstname}</p> : null}
                    </div>
                  
                   <div>
                    <Input 
                    name="surname" 
                    my='1rem' width='35rem' 
                    type="text" id="text" 
                    placeholder="surname" 
                    _placeholder={{color:"white"}}
                    onChange={formik.handleChange}
                    value={formik.values.surname}
                    onBlur={formik.handleBlur}
                    className={formik.errors.surname && formik.touched.surname ? "input-error" :""}
                    />
                   {formik.touched.surname && formik.errors.surname ? <p className="red">{formik.errors.surname}</p> : null}
                    </div>


                    <div>
                    <Input 
                    name="username" 
                    my='1rem' width='35rem' 
                    type="text" id="text" 
                    placeholder="username" 
                    _placeholder={{color:"white"}}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    className={formik.errors.username && formik.touched.username ? "input-error" :""}
                    />
                   {formik.touched.username && formik.errors.username ? <p className="red">{formik.errors.username}</p> : null}
                    </div>

                    <div>
                    <Input 
                    name="email" 
                    type="email"
                    my='1rem' width='35rem' 
                    id="email" 
                    placeholder="email" 
                    _placeholder={{color:"white"}}
                    onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.email}
                     className={formik.errors.email && formik.touched.email ? "input-error" :""}
                    />
                    {formik.touched.email && formik.errors.email ? <p className="red">{formik.errors.email}</p> : null}
                    </div>

                    <Flex   alignItems="center" >
                   <Box>
                    <Input 
                    name="password" 
                    type={passwordType}
                    my='1rem' width='35rem' 
                    id="text" 
                    placeholder="password" 
                    _placeholder={{color:"white"}}
                    onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.password}
                     className={formik.errors.password && formik.touched.password ? "input-error" :""}
                    />
                    {formik.touched.password && formik.errors.password ? <p className="red">{formik.errors.password}</p> : null}
                     </Box>
                     <span onClick={togglePassword}>
                        { passwordType === "password" ? (<FiEye style={style} size={25}/>
                        ) : (
                            <FiEyeOff  size={25}/>
                        )}
                    </span>
                    </Flex>
                  
                    <Flex alignItems="center">
                    <Box>
                    <Input 
                    name="password2" 
                    my='1rem' width='35rem' 
                    type="password" id="text" 
                    placeholder="confirm password" 
                    _placeholder={{color:"white"}}
                    onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.touched.password2 && formik.values.password2}
                     className={formik.errors.password2 && formik.touched.password2 ? "input-error" :""}
                    />
                     {formik.touched.password2 && formik.errors.password2 ? <p className="red">{formik.errors.password2}</p> : null}
                     </Box>
                     <FiEye style={style} size={25}/>
                    </Flex>

                        <Flex columnGap='3rem' mt='2rem'>
                        <Link to="/Signup"><Button width='8rem' bg='blue' _hover={{background:"blue", color:"white"}}>Back</Button></Link>
                        <Button type="Submit"
                        
                         disabled={!formik.isValid}  width='8rem' bg='blue' _hover={{background:"blue", color:"white"}}>Submit</Button>
                        </Flex>
                </VStack>
            </Box>
          
            </Flex>
     );
}
 
export default User;