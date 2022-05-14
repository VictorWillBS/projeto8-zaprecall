import React from "react"
import Card from "./Card"
import Front_Card from "./Front_Card"

export default function Question({number,arrQuestions,setReplied,replied,anwsersIcons,setAnwsersIcons,iconClass,setIconClass}){
    //Logic
    const [hidden,setHidden] = React.useState("")
    const [front,setFront] = React.useState("hidden")
    const [questIcon,setQuestIcon] =  React.useState("play-outline")
    const [iconID,setIconID] =  React.useState("")
    function play(){
        {hidden=== "" ? setHidden("hidden"):setHidden("")}
        {front === "hidden"? setFront(""): setFront("hidden")}
    }
    //UI
    return(<>
        <section>
            
            <Front_Card hidden={hidden}>
                {iconID===""? <strong><h4> Pergunta {number+1}</h4> </strong>: <strong><h4 className="stroke" id={iconID}> Pergunta {number+1}</h4> </strong>}
                <figure> <ion-icon onClick={play} size="large" name={questIcon} id={iconID}></ion-icon></figure>           
            </Front_Card>   
            <Card 
            front={front}  
            play={play} 
            arrQuestions={arrQuestions} 
            setReplied={setReplied} 
            replied={replied}
            setQuestIcon={setQuestIcon}
            setIconID={setIconID}
            anwsersIcons={anwsersIcons}
            setAnwsersIcons={setAnwsersIcons}
            iconClass={iconClass}
            setIconClass={setIconClass}/>
        </section>
    </>)
}