import axios from "axios";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {  addJobtodb } from "../features/jobs/action";

export const Dashboard = () => {

    const [form , setForm] = useState({status:"not applied"});
    const dispatch = useDispatch();
    const [applied , setApplied] = useState(null);

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

        dispatch(addJobtodb(form))

    }

    const handlebtn = () => {
        axios.get('http://localhost:3001/jobs?status=applied')
        .then((res) => (console.log(res.data) , setApplied(res.data)))
        .catch((err) => console.log(err))
    }

    const handlenot = () => {
        axios.get('http://localhost:3001/jobs?status=not applied')
        .then((res) => (console.log(res.data) , setApplied(res.data)))
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <h3>admin</h3>
            
            <form onSubmit={handleSubmit}>

            <input onChange={handleChange} placeholder="addjob" name='job' type='text'></input>
            <input onChange={handleChange} placeholder="location" name='location' type='text'></input>
            <input onChange={handleChange} placeholder="jobtype" name='jobtype' type='text'></input>
            <input type="submit"></input>

            </form>

            <button onClick={handlebtn}>applied</button> <button onClick={handlenot}>notapplied</button>

            <div>
                
                {applied? applied.map((e) => <h2>{e.job}</h2>) : null}
            </div>


          
        </div>
    )
}