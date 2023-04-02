import React, {useState} from 'react'

const Form = () => {
    const [taskname,settaskname]=useState("");
    const [taskdesp,settaskdesp]=useState("");
    const[Completed,setCompleted]=useState();
    const[taskarr,setarr]=useState([]);
    const [errorshow,seterror]=useState(false);


    const setName=(e)=>{
        console.log("e",e.target.value);
        settaskname(e.target.value);
    }
    const setDesp=(e)=>{
        console.log("e",e.target.value);
        settaskdesp(e.target.value);
    }
    const setComplete=(e)=>{
        console.log("e",e.target.checked);
        setCompleted(e.target.checked ? "Yes":"No");
    }
    const pusharray=()=>{
        setarr([taskname,taskdesp,Completed,...taskarr]);
    }
    const handlesubmit=(e)=> {
        e.preventDefault();
        seterror(true);
        if (taskname==="" || taskdesp==="")
         return;
           console.log(taskname,taskdesp);
           pusharray();
    }
    

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <label>Taskname</label>
            <input type="text" placeholder="TaskName" value={taskname} onChange={setName}/>
            {taskname ==="" && errorshow && <h5>Taskname is required.</h5>}
            <label>Description</label>
            <input type="text" placeholder="Description" value={taskdesp} onChange={setDesp}/>
            {taskdesp ==="" && errorshow && <h5>Description  is required.</h5>}
            <label>isComplete</label>
            <input type="checkbox" onChange={setComplete}/>
            <input type="submit"/>
        </form>
        <ul >
            {taskarr.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Form