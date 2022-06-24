import {Container, } from "react-bootstrap"
import {Link} from "react-router-dom"

const Footer = () => {
    return ( 
        <footer style={{backgroundColor:"rgb(46, 46, 78)"}}>
            <Container className='px-8 text-white text-center'>
                <h6>Need Help? <Link to="/Help"><span style={{color:'blue'}}>Click Here</span></Link> </h6>
                <h2  class='p-2' style={{fontSize:"1.5rem"}}>Copyright &copy; Quizzy 2022</h2>
                <Link to='/' style={{backgroundColor:"transparent"}}>Terms&Conditions</Link>
            </Container>
        </footer>

     );
}
 
export default Footer;