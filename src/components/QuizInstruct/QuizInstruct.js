import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import PieNav from "../PieNav/PieNav";
import ins from'./QuizInstruct.module.css'
const TakeQuiz = () => {
    return ( 
            <>
            <Sidebar/>
        <PieNav/>
            <div className={ins.side}>
                    <div className={ins.tak}>
                        <h1>Take Quiz</h1>
                        </div>
                        {/* <p className={ins.co}>Type your quiz code</p>
                        <div className={ins.in}><input type="text" name="quiz code" placeholder="Quiz Code"/></div> */}
                        <div className={ins.intro}>
                        <h2>Quiz Instructions!</h2>
                        </div>
                    <div class={ins.instruction}>
                        <p className={ins.paragraph}>The Quiz consist of questions carefully deseigned to help you  self-assess your comprehensation of the information<br />
                           presented on topics covered in the model.Each question in the quiz is of multiple choices. Read each questions carefully <br />
                           and click on the correct answer and the next button for the next question<br />If you make a mistake you can go back by clicking previous button to go to the recent question<br/>
                           After responding to alll the questions , click on the submit button to submit your answers
                           </p>
                        <p class={ins.timer}>Time limit: 30min</p>
                    </div>
                    <div class={ins.twobtn1}>
                        <Link to="/TestYourSelf"><button>Start Quiz</button></Link>
                    </div>
            </div>
            
            </>
     );
}
 
export default TakeQuiz;