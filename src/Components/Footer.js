import React from "react"

export default function Footer({replied,arrQuestions,anwsersIcons,iconClass}){
    //Logic
    const [icon,setIcon] = React.useState("")
    //UI
    return( 
    <footer>
        
        <h4> {replied}/{arrQuestions.length} Concluido</h4>
        <article>{anwsersIcons.map((icon,index)=><ion-icon key={index}  size="large" name={icon} id= {iconClass[index]}></ion-icon>)}</article>
    </footer>)
}