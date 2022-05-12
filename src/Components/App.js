import Inicio from "./Inicio"
import React from "react"
import Questions from "./Questions"
export default function App(){
    //Logic
    const [tela,setTela] = React.useState("init")
    const [spaceBetween,setSpaceBetween] = React.useState("")
    //UI
    return(
        <div className="conteiner-Total" id={spaceBetween}>
        {tela === "init" ? <Inicio setTela={setTela} setSpaceBetween={setSpaceBetween}/> : <Questions/>}

        </div>
    )
}