import party from "./../assets/images/party.png"
import sad from "./../assets/images/sad.png"

export default function Finish_Message({iconClass}){
    //Logic
    const arrWrong = iconClass.filter((icon)=> icon === "wrong")
    //UI
    return(
        <>
            {arrWrong.length >= 1 ? 
            <section className="reaction"> <img src={sad}></img>    <strong> <h4>Putz</h4> </strong> </section> : 
            <section className="reaction"> <img src={party}></img>  <strong> <h4> Parabéns</h4> </strong> </section>}
            <article className="finish_message">
                {arrWrong.length >= 1 ? 
                <h4>Ainda faltam alguns... Mas não desanime!</h4>: 
                <h4> Você não esqueceu de nenhum flashcard!</h4>}
            </article>
        </>
    )
}