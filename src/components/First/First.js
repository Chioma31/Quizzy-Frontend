
import { Navbar, Container, Nav} from 'react-bootstrap';
// import nav from "./Navbar.module.css";
import {IoMdContact} from "react-icons/io";
import {Link} from "react-router-dom";
const First = () => {
    const style = {color:"blue", fontSize:"2.5rem", marginLeft:"3rem"}
    return (
     
      <Navbar collapseOnselect fixed="top"  style={{ backgroundColor:"rgb(46, 46, 78)"}} expand="lg" variant="dark">
      <Container className="ml-5">
        <Navbar.Brand href="#home">
        <img
        src="images/logo.png"
        width="35"
        height="35"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-10" style={{marginLeft:"auto"}}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            <IoMdContact style={style}/>
            <Link to="/Signin"><button style={{borderRadius:"5px",padding:".5rem", marginLeft:"1rem", backgroundColor:"rgb(46, 46, 78)", color:"white",border:"1px solid blue"}}>Sign In</button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        // <nav className={nav.navbar}>
        //     <img src="images/logo.png" alt="" />
        // <div className={nav.navitems}>
        //    <Link  to="/">Home</Link>
        //    <Link className={nav.about} to="/About">About  Us</Link>
        // </div>
        // <div className={nav.licon}>
        //         < IoMdContact style={style}/>
        //     </div>
        // <div className={nav.button}>
        //     <Link to="/Signin"><button>Sign In</button></Link>
            
        // </div>
        // </nav>
        
    );
}
 
export default First;
