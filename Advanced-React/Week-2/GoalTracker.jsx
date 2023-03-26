// A Single Component Which Takes Goal Through Input and Add it to un-ordered list
// To Run this: Save the file in component and import it ot App.js file

import { useState } from "react"; 
 

 function GoalForm(props) {
  const [formData, setFormData] = useState({goal: "", by: ""});

  function changeHandler(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function submitHandler(e) {
    e.preventDefault();
    if(formData.goal === "" || formData.by === ""){
      window.alert("Empty Fileds! Please Fill Both Fileds");
    } else {
      props.onAdd(formData);
    }
    
    setFormData({goal: "", by: ""});

  }

  return (
    <>
    <h1>My Little Goals</h1>
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Goal..." name="goal" value={formData.goal} onChange={changeHandler} />
      <input type="text" placeholder="By..." name="by" value={formData.by}
      onChange={changeHandler} />
      <button>Goal Submit</button>
    </form>
    </>
  );
    
  }

  function ListOfGoals(props) {
    return (
     <>
      <h3>List of goals</h3>
        <ul>
          {props.allGoals.map((g) => (
            <li key={g.goal}>
              <span>My goal is to: {g.goal}, by : {g.by}.</span>
            </li>
          ))}
        </ul>
     </>
    );
  }


export default function GoalTracker() { 
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {updateAllGoals([...allGoals, goal])};
  // console.log(allGoals);
  return ( 
    <div> 
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals}/>
    </div> 
  ); 
} 