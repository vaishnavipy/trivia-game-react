import React, { Fragment, useEffect, useState } from "react"
import "./App.css"

function Quiz(props){

    const [questionsArr,setQuestionsArr] = useState("")

    const [questionNo,setQuestionNo] = useState(0)
   const [answers,setAnswers] = useState([])

   const [score,setScore] =useState(0);
  const [timeLeft,setTimeLeft] = useState(10)

 const [playerAnsArr,setPlayerAnsArr] = useState(Array(10))

    const categories =[
        {category :"Science And Nature",
        no:17},
        {category :"Celebrities",
        no:26},
        {category :"Sports",
        no:21},
        {category :"Animals",
        no:27},
        {category :"Mythology",
        no:20},
        {category :"Genral Knowledge",
        no:9}  ]

    useEffect(()=>{

        if(props.category){
            const categoryNo = categories.find(obj => obj.category === props.category)
           
            fetch(`https://opentdb.com/api.php?amount=10&category=${categoryNo.no}`)
            .then(response => response.json())
            .then(data => setQuestionsArr(data.results) )

        }
    },[])

    function timer(){

        setTimeLeft(prevTime => prevTime -1)
    }


    useEffect(()=>{


        //console.log(questionsArr)
       
       
        if(questionsArr.length !== 0 && questionNo < 10){
            //console.log(questionNo)
        let randomIndex = Math.floor(Math.random()*4)
          var tempArr=[]
          var count =0
          let incorrect_ans_length = questionsArr[questionNo].incorrect_answers.length
         
            if(incorrect_ans_length == 1){
               
                tempArr.push(<div id="answers" className="answer-class" dangerouslySetInnerHTML={{ __html:questionsArr[questionNo].correct_answer }}></div>)

                tempArr.push(<div  className="answer-class" dangerouslySetInnerHTML={{ __html:questionsArr[questionNo].incorrect_answers[0] }}></div>)
               
            }else{

            for(let i = 0 ; i< 4 ;i++){

                if(i === randomIndex){
                    tempArr.push(<div id="answers" className="answer-class" dangerouslySetInnerHTML={{ __html: questionsArr[questionNo].correct_answer}}></div>)

                }else{
                    tempArr.push(<div className="answer-class" dangerouslySetInnerHTML={{ __html: questionsArr[questionNo].incorrect_answers[count]}}></div>)
                    count++
                }
                
            }
             }
         
        setAnswers(tempArr)


        } 

        if(questionNo > 9){
           // console.log("ji")
             props.handleGameOver(true)
             props.chooseCategory("")
             props.handleScore(score)
             console.log(playerAnsArr )
             props.handlePlayerAns(playerAnsArr)
             props.handleQuestionsArr(questionsArr)
 
         }
        

    


      
    },[questionsArr,questionNo])

    useEffect(()=>{

        let intervalId =  setInterval(()=>{

            if(timeLeft>=1){
            timer()    
            }else{
                setQuestionNo(prevNo => prevNo + 1)
                setTimeLeft(10)
            }

        },1000)


        return () => clearInterval(intervalId)




    },[timeLeft])



       
    
   function handleClick(event){

    if(event.target.nodeName !== "H1" || event.target.nodeName !== "H4" ){

        if(event.target.textContent === questionsArr[questionNo].correct_answer){
            setScore(prevScore => prevScore +1)
            //console.log(score)
        }
        let tempArr = playerAnsArr
        tempArr[questionNo] =event.target.textContent

        setPlayerAnsArr(tempArr) 
        console.log(playerAnsArr)
        console.log(questionNo)
        setQuestionNo(prevNo => prevNo + 1)
        setTimeLeft(10)
       
    }

   }

   
 
  
    return(

    <div onClick={handleClick}>
      
        { questionsArr.length !== 0 && questionNo < 10 ? 
        <Fragment>
        <h4 >
            <span className="questionNo">{`QUESTION : ${questionNo+1}`}</span>
            <span className="time">{`${(questionsArr[questionNo].difficulty).toUpperCase()} | TIME LEFT : ${timeLeft}` }</span>
        </h4>
        <h1 className="question" dangerouslySetInnerHTML={{ __html:questionsArr[questionNo].question }}></h1> 
         {answers}
         </Fragment> 
         
         : ""}
      
       

    </div>)

}

export default Quiz;