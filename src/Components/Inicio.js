import logo from "./../assets/images/logo.png"
import Input_goal from "./Input_Goal"
export default function Inicio ({setTela,setSpaceBetween, goal, setGoal, numberQuests}){
    //Logic
    const goalMaxValid = numberQuests>=goal;
    const goalMinValid = goal<=0
    function initQuestions (){
        if(!goal){
                alert("Insira uma meta")
                return
        }
        else if (goalMinValid){
            alert(`Para um bom teste, escolha uma meta maior! ( a meta mínima permitida é de 1)`)
            return
        }
        else if (goalMaxValid){
            alert(`A meta máxima permitida é de ${numberQuests}. Por favor escolha um número menor!`)
            return
        }
        else{
            setTela("Questions")
            setSpaceBetween("spaceBetween")
        }
    }
    //UI
    return(<section className="init_Screen">
        <figure> <img src={logo} alt="logo do ZapRecall"></img>  </figure>
        <h1> ZapRecall</h1>
        <Input_goal setGoal={setGoal} />
        <button onClick={initQuestions}> <p>Iniciar Recall</p> </button>
      
    </section>)
}