import axios from "axios"
import { useEffect, useState } from "react"

export const Apply = () => {

    const [list , setList] = useState(null);

    const getJobs = () => {
        axios.get("http://localhost:3001/jobs")
        .then((res) => (console.log(res.data) , 
        setList(res.data)))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getJobs();
    } , [])

    return (
        <div>

     {list ?
     
     list.map((e) => 
     <div key={e.id}>

<i style={{margin:"10px"}}>name : {e.job}</i> 
<i style={{margin:"10px"}}>type: {e.jobtype}</i>
<i style={{margin:"10px"}}>location : {e.location}</i>
<i style={{margin:"10px"}}>salary: {e.id * 10000}</i>
<button style={{margin:"10px"}}>Apply</button>

     </div>
    
     
     ): null
    
    }

        </div>
    )

}