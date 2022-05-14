import Question from "./Question"
import logo_Pequena from "./../assets/images/logo-pequeno.png"
import React from "react"
import Footer from "./Footer"
import Finish_Message from "./Finish_Message"


export default function Questions(){
    //Logic
    
    const [replied,setReplied]= React.useState(0)
    const [anwsersIcons,setAnwsersIcons]= React.useState([])
    const [iconClass, setIconClass] =React.useState([])
    const arrQuestions = [
        {ask:"O que é JSX?", anwsers: "R: Uma extensão de linguagem do JavaScript"},
        {ask:"O React é __", anwsers:"uma biblioteca JavaScript para construção de interfaces"},
        {ask: " Componentes devem iniciar com __ ", anwsers:"letra maiúscula"},
        {ask: "Podemos colocar __ dentro do JSX ", anwsers: "expressões"},
        {ask: "O ReactDOM nos ajuda __ ", anwsers: "interagindo com a DOM para colocar componentes React na mesma"},
        {ask:"Usamos o npm para __ ", anwsers: "Gerenciar os pacotes necessários e suas dependências"},
        {ask:"Usamos props para __", anwsers:"passar diferentes informações para componentes "},
        {ask:"Usamos estado (state) para __", anwsers:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]
    
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
                    {replied === arrQuestions.length? <Finish_Message iconClass={iconClass} /> : "" }
                    <h4> {replied}/{arrQuestions.length} Concluido</h4>
                    <article className="icons_anwser">
                        {anwsersIcons.map((icon,index)=><ion-icon key={index}  size="large" name={icon} id= {iconClass[index]}></ion-icon>)}
                    </article>
            </Footer>
            
    </>)
}