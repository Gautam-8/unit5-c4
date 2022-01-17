import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "../features/jobs/action";

export const Dashboard = () => {

    const [form , setForm] = useState({});
    const dispatch = useDispatch();

    const {jobs} = useSelector((state) => state.jobState.jobs)

    const handleChange = (e) => {
        

        let {name , value} = e.target

        setForm({
            ...form,
            [name] : value
        });
        //console.log(form)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);

        dispatch(addJob(form))

    }

    return (
        <div>
            <h3>dashboard</h3>
            
            <form onSubmit={handleSubmit}>

            <input onChange={handleChange} placeholder="addjob" name='job' type='text'></input>
            <input onChange={handleChange} placeholder="location" name='location' type='text'></input>
            <input onChange={handleChange} placeholder="jobtype" name='jobtype' type='text'></input>
            <input type="submit"></input>

            </form>
          


        </div>
    )
}