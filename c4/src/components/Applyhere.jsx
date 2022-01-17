import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { applyJob } from "../features/jobs/action";

export const Apply = () => {

    const [list , setList] = useState(null);
    const dispatch = useDispatch();

    const getJobs = () => {
        axios.get("http://localhost:3001/jobs")
        .then((res) => (console.log(res.data) , 
        setList(res.data)))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getJobs();
    } , [])

    const handleApply = (id) => {
      
        axios.patch(`http://localhost:3001/jobs/${id}`,({status:'applied'}))
        .then((res) => (console.log(res) , dispatch(applyJob(res.data))))
        .catch((err) => console.log(err))
    }

    const Sort = () => {
        axios.get("http://localhost:3001/jobs?_sort=id&_order=desc")
        .then((res) => (console.log(res.data) , 
        setList(res.data)))
        .catch((err) => console.log(err))
    }


    
    return (
        <div>
<button onClick={Sort}>sort</button>
     {list ?
     
     list.map((e) => 
     <div key={e.id}>

<i style={{margin:"10px"}}>name : {e.job}</i> 
<i style={{margin:"10px"}}>type: {e.jobtype}</i>
<i style={{margin:"10px"}}>location : {e.location}</i>
<i style={{margin:"10px"}}>salary: {e.id * 10000}</i>
<button onClick={() => handleApply(e.id)} style={{margin:"10px"}}>Apply</button>

     </div>
    
     
     ): null
    
    }

    

        </div>
    )

}