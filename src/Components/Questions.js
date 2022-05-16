import React from "react"
import Question from "./Question"
import Footer from "./Footer"
import Finish_Message from "./Finish_Message"
import Button_Reload from "./Button_Reload"
import logo_Pequena from "./../assets/images/logo-pequeno.png"


export default function Questions({arrQuestions, numberQuests, goal}){
    //Logic
    
    const [replied,setReplied]= React.useState(0)
    const [anwsersIcons,setAnwsersIcons]= React.useState([])
    const [iconClass, setIconClass] =React.useState([])
   
    
    function comparador() { 
            return Math.random() - 0.5;
    }
    arrQuestions.sort(comparador)
  
    //UI
    return(<>
            <header>
                <img src={logo_Pequena} alt = "logo do ZapRecall"></img>
              <h2> ZapRecall </h2>  
            </header>

            <section className="questionCard">
            {arrQuestions.map((a, index)=><Question 
            key={index} 
            arrQuestions={a} 
            number={index} 
            setReplied={setReplied} 
            replied={replied}
            anwsersIcons={anwsersIcons}
            setAnwsersIcons={setAnwsersIcons}
            iconClass={iconClass}
            setIconClass={setIconClass}/> )}   
            </section>

            

            <Footer> 
                    {replied === numberQuests? <Finish_Message goal={goal} iconClass={iconClass} /> : "" }
                    <h4> {replied}/{numberQuests} Concluido</h4>
                    <article className="icons_anwser">
                        {anwsersIcons.map((icon,index)=><ion-icon key={index}  size="large" name={icon} id= {iconClass[index]}></ion-icon>)}
                    </article>
                    {replied === numberQuests? <Button_Reload/> :""}
            </Footer>
            
    </>)
}