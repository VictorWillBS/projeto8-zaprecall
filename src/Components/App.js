import Inicio from "./Inicio"
import React from "react"
import Questions from "./Questions"
import "./../assets/Estilos/css-reset.css"
import "./../assets/Estilos/estilo.css"
export default function App(){
    //Logic
    const [tela,setTela] = React.useState("init")
    const [spaceBetween,setSpaceBetween] = React.useState("")
    const [goal, setGoal] = React.useState(false)
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
    const numberQuests = arrQuestions.length;
    //UI
    return(
        <div className="conteiner-Total" id={spaceBetween}>
        {tela === "init" ? 
        <Inicio setTela={setTela} setSpaceBetween={setSpaceBetween} goal={goal} setGoal={setGoal} numberQuests={numberQuests} /> : 
        <Questions arrQuestions={arrQuestions} numberQuests={numberQuests} goal={goal}/>}

        </div>
    )
}