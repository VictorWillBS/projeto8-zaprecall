export default function Inicio ({setTela,setSpaceBetween}){
    function initQuestions (){
        setTela("Questions")
        setSpaceBetween("spaceBetween")
    }
    return(<>
        <figure> <img src="assets/logo.png"></img>  </figure>
       <h1> ZapRecall</h1>
       <button onClick={initQuestions}> <p>Iniciar Recall</p> </button>
    </>)
}