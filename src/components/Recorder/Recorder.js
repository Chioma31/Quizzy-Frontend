import rec from './Recorder.module.css';
import RecorderItem from "../RecorderItem/RecorderItem";
import {CgProfile} from "react-icons/cg";
import {Link} from "react-router-dom";
import questions from "../../questions.json";
import {useState} from "react";
import Timer from "simple-circle-timer";

// import CircularProgress from 'react-native-circular-progress-indicator'

const Recorder = () => {
        const [ timerExists, setTimerExists ] = useState( true )
        const [ running, setRunning ] = useState( true )
        const [ reset, setReset ] = useState( false )
      
        //new timer is loaded in a paused state, awaiting 'play' command
        const mountPaused = () => {
          setTimerExists( true )
          setRunning( false )
        }
      
        //new timer is loaded already in a running state
        const mountRunning = () => {
          setTimerExists( true )
          setRunning( true )
        }
      
    const [setTimeout, setsetTimeout] = useState(0);
    let numberOfQuestions = [];
    for(let i = 1; i <= 50; i++) {
        numberOfQuestions.push(i);
    }
    // const change_progressbar_input = () => {
    //   setsetTimeout(50);
    // };
    const questionObj = questions.map(question =>  {
        return ({ isAnswered: false, userAnswer: "" });
    });
    const [questionIndex, setQuestionIndex] = useState(0);
   const [questionState, setQuestionState] = useState([...questionObj]);

   const handleAnsweredQuestion = (event, questionNumber) => {
    setQuestionState((prevState) =>{ 
        prevState[questionNumber].userAnswer = event.target.value;
        console.log(questionState);
       return [...prevState]
    })
   }

const checkIfAnswered = (questionNo) => {
    // console.log(questionState[questionIndex]);
    if(questionState[questionNo].isAnswered) return true;
    else return false;
}
    
    const handleClick = (action) => {
        switch (action) {
            case "next":
                if(questionState[questionIndex].userAnswer) {
                    let index = questionIndex - 1;
                    setQuestionIndex(prevState => ++prevState);
                    setQuestionState((prevState) => {
                        prevState[questionIndex].isAnswered = true;
                        return [...prevState];
                    });
                }
                setQuestionIndex(prevState => ++prevState);
                break;

                case "previous":
                    if(questionIndex === 0) return; 
                setQuestionIndex(prevState => --prevState);
                break;
        
            default:
                break;
        } 
    }
    
    const pop = {fontSize:"6rem", backgroundColor:"white"}
    return (
        <>
        <div className={rec.recorder}>
            <div className={rec.firstrec}>
                    <img src="images/logo.png" alt="" />
                    <h3>{questions[questionIndex].question}</h3>
                <div className={rec.choose}>
                    {
                        questions[questionIndex].options.map(option => <div>
                        <input key={option.id} type="radio" name='radio' value={option} onClick={(event) => handleAnsweredQuestion(event, questionIndex)}/>
                    <label htmlFor="">{option}</label><br />
                        </div>)
                    }
                </div>
                <div className={rec.next}>
                    <div onClick={() => handleClick("previous")}><button>Previous</button></div>
                    <div onClick={() => handleClick("next")}><button>Next</button></div>
                    
                </div>
            </div>
            <div className={rec.secondrec}>
                <div className={rec.peace}>
                    <div> <CgProfile pop={pop}/> </div>
                    <div className={rec.base}>
                        <select name="select" id="">
                            <option value="">Hallilu</option>
                            <option value="">Logout</option>
                        </select>
                    </div>
                    
                </div>
                 <div>
                {/* <div style={{ display: 'grid' }}>
                    <button onClick={() => mountRunning()}>Load New Timer (running)</button>
                    <button onClick={() => mountPaused()}>Load New Timer (paused)</button>
                    <button onClick={() => setTimerExists( false )}>Remove Timer</button>
                    <button onClick={() => setRunning( true )}>Play</button>
                    <button onClick={() => setRunning( false )}>Pause</button>
                    <button onClick={() => setReset( true )}>Reset</button>
                </div> */}
                <div className={rec.timer}>
                {timerExists ? <Timer running={running} setRunning={setRunning} reset={reset} setReset={setReset} /> : null} 
                </div>
                </div> 
                              {/* <Progressbar
                    input={setTimeout}
                    pathWidth={10}
                    pathColor={['#00E1F0', '#00E1F0']} 
                    trailWidth={20}
                    trailColor='#302D93' 
                    textStyle={{ fill: 'white' }} 
                    >
         
                </Progressbar>  */}
                     
               
                <div className={rec.questions}>
                    <h2>Questions Answered</h2>
                    <div className={rec.questionNumbers}>
                        {
                
                           numberOfQuestions.map((question, index) => <RecorderItem key={index} isAnswered={questionState[questionIndex].isAnswered} number={question}/>)
                        }
                        {/* <RecorderItem /> */}
                        <div className={rec.map}>
                            </div>
                    </div>
                    <Link to="/QuizComplete"><button>Submit</button></Link>
                </div>
            </div>
        </div>
        </>
     );

}
export default Recorder;
// const Recorder = () => {
   
//                 const [ timerExists, setTimerExists ] = useState( false )
//                 const [ running, setRunning ] = useState( true )
//                 const [ reset, setReset ] = useState( false )
              
//                 //new timer is loaded in a paused state, awaiting 'play' command
//                 const mountPaused = () => {
//                   setTimerExists( true )
//                   setRunning( false )
//                 }
              
//                 //new timer is loaded already in a running state
//                 const mountRunning = () => {
//                   setTimerExists( true )
//                   setRunning( true )
//                 }
//     return (
//         <>
            
//         </>
//     )
// }

// export default Recorder;