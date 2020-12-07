import Rect, { Fragment } from "react"

function PlayAgain(props){

    function handleClick(){

        props.handleGameOver(false)

    }

{console.log(props.playerAns)}



  const result =  props.quesArr.map((question,index) => {
   
        if(props.playerAns[index] ){
          
        return(    <li  className="list"> 
                   {question.question}
                    <ul >
                        <li className="c-ans"><strong>Correct Answer: {question.correct_answer   }</strong> </li>
                        <li className="p-ans"><strong>Your Answer : {props.playerAns[index]} </strong></li>
                    </ul>
                    </li> 
                )
            
        }else{
            return(   <li> 
                        {question.question}
                        <ul>
                        <li className="c-ans">Correct Answer: {question.correct_answer   } </li>
                        <li className="p-ans">Your Answer : NA </li>
                        </ul>  </li>   
             
           )

        }
    
    
    })

    return(<div>
        <h1 style={{color:"white"}}>Your Score : {props.score}</h1>
        <div onClick={handleClick} className="play-again">Play Again</div>
        <ol className="result">{result}</ol>
       

    </div>)
}

export default PlayAgain;