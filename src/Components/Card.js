import setinha from "./../assets/images/setinha.png"
import React from "react"
export default function Card({
    front, play, arrQuestions,setReplied, replied, setQuestIcon, setIconID ,anwsersIcons, setAnwsersIcons, iconClass, setIconClass}){
    //logic
    const [frontFace,setFrontFace]= React.useState("");
    const [backFace,setBackFace]= React.useState("hidden");
    const [controlClick,setControlClick] = React.useState(false);

    
    function turn(){
        {frontFace ==="" ? setFrontFace("hidden"):setFrontFace("")};
        {backFace === "hidden"? setBackFace(""):setBackFace("hidden")};
    }
    function reply(response){
        const newIcons=[...anwsersIcons]
        const newClass=[...iconClass]
        let nameIcon;
        
        play();
        turn();
       
        if (!controlClick){
            setReplied(replied + 1);
            setControlClick(true);
            
            switch (response){
                case "wrong":
                    nameIcon = "close-circle"
                    newIcons.push(nameIcon)
                    newClass.push(response)
                    setQuestIcon(nameIcon)
                    setIconID(response)
                    break;
                case "half-right":
                    nameIcon = "help-circle"
                    newIcons.push(nameIcon)
                    newClass.push(response)
                    setQuestIcon(nameIcon)
                    setIconID(response)
                    break
                default:
                    nameIcon="checkmark-circle"
                    newIcons.push(nameIcon)
                    newClass.push(response)
                    setQuestIcon(nameIcon)
                    setIconID(response)
            }
        }
        setIconClass(newClass)
        setAnwsersIcons(newIcons)
    }

    //UI
    return(
        <section>
                <article className="verse" id={front}>
                    <div className="card-face" id={frontFace}>
                        <h4> {arrQuestions.ask}</h4>
                        <figure> <img onClick={turn} src= {setinha}alt ="seta de virar a carta"></img></figure>
                    </div>
                    <div className="card-face" id={backFace}>
                       <section>
                           <h4>{arrQuestions.anwsers}</h4>
                           <section className="botoes">
                               <button className="wrong" onClick={()=> reply("wrong")}>
                                   <p>N??o lembrei</p>
                               </button>

                               <button className="half-right" onClick={()=> reply("half-right")}>
                                   <p>Quase n??o lembrei</p>
                               </button>
                               
                               <button className="right" onClick={()=> reply("right")}>
                               <p>Zap!</p>
                               </button>
                           </section>
                        </section>
                    </div>
                </article>
                
            </section>
    )   
}