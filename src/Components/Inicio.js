import logo from "./../assets/images/logo.png"

export default function Inicio ({setTela,setSpaceBetween}){
    function initQuestions (){
        setTela("Questions")
        setSpaceBetween("spaceBetween")
    }
    return(<>
        <figure> <img src={logo} alt="logo do ZapRecall"></img>  </figure>
       <h1> ZapRecall</h1>
       <button onClick={initQuestions}> <p>Iniciar Recall</p> </button>
    </>)
}