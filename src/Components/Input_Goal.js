


export default function Input_goal({setGoal}){
    //Logic
    function getGoal(event){
        const goalValue = event.target.value
        setGoal(goalValue)
    }
    const placeholderTxt="Digite sua meta de zaps..."
    //UI
    return( <input placeholder={placeholderTxt} type="number" onChange={getGoal} />)
}