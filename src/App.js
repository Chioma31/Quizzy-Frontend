import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Signup2 from './components/Signup2/Signup2';
import LandingPage from './components/LandingPage/LandingPage';
import AdminPage from './components/AdminPage/AdminPage';
import TakeQuiz from './components/TakeQuiz/TakeQuiz';
import QuizInstruct from "./components/QuizInstruct/QuizInstruct";
import TestYourSelf from "./components/TestYourSelf/TestYourSelf"
import Recorder from './components/Recorder/Recorder';
import QuizComplete from './components/QuizComplete/QuizComplete';
import QuizComplete1 from './components/QuizComplete1/QuizComplete1';
import Username from './components/Username/Username';
import Problem from './components/Problem/Problem';
import Help from './components/Help/Help';
import Organization from './components/Organization/Organization';
import Organization1 from './components/Organization1/Organization1';
import Organization2 from './components/Organization2/Organization2';
import Examiner from './components/Examiner/Examiner';
import Examiner1 from './components/Examiner1/Examiner1';
import Examiner2 from './components/Examiner2/Examiner2';
import User from './components/User/User';
import User1 from './components/User1/User1';
import User2 from './components/User2/User2';
import { ChakraProvider } from '@chakra-ui/react'
import OrgLogin from './components/OrgLogin/OrgLogin';

function App() {
  return (
    
      
        <Router>
    <div className='Apps'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signup2' element={<Signup2/>}/>
        <Route path='/LandingPage' element={<LandingPage/>}/>
        <Route path='/AdminPage' element={<AdminPage/>}/>
        <Route path='/TakeQuiz' element={<TakeQuiz/>}/>
        <Route path='/QuizInstruct' element={<QuizInstruct/>}/>
        <Route path='/TestYourSelf' element={<TestYourSelf/>}/>
        <Route path='/Recorder' element={<Recorder/>}/>
        <Route path='/QuizComplete' element={<QuizComplete/>}/>
        <Route path='/QuizComplete1' element={<QuizComplete1/>}/>
        <Route path='/Problem' element={<Problem/>}/>
        <Route path='/Username' element={<Username/>}/>
        <Route path='/Help' element={<Help/>}/>
        <Route path='/Organization' element={<Organization/>}/>
        <Route path='/Organization1' element={<Organization1/>}/>
        <Route path='/Organization2' element={<Organization2/>}/>
        <Route path='/Examiner' element={<Examiner/>}/>
        <Route path='/Examiner1' element={<Examiner1/>}/>
        <Route path='/Examiner2' element={<Examiner2/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/User1' element={<User1/>}/>
        <Route path='/User2' element={<User2/>}/>
        <Route path='/OrgLogin' element={<OrgLogin/>}/>
      </Routes>
    
      </div>
      </Router>
      

  );
}

export default App;
