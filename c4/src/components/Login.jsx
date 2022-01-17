
import axios from "axios";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginError, loginSuccess } from "../features/jobs/action";


export const Login = () => {


 const [login , setLogin] = useState({});
 const navigate = useNavigate();


  const handleChange = (e) => {
      
   let {name , value} = e.target

      setLogin({
          ...login,
          [name] : value
      });
  
      //console.log(form)
  }
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(login);
    

      axios.post("https://reqres.in/api/login" , login)
      .then((res) => (console.log(res.data.token) ,   dispatch(loginSuccess(login))  ))
      .catch((err) => (console.log(err) ,dispatch(loginError(err))))
  
      

  }

    return (
        <div>

      <h1>login</h1>

      <form onSubmit={handleSubmit}>

<input onChange={handleChange} placeholder="email" name='email' type='text'></input>
<input onChange={handleChange} placeholder="password" name='password' type='text'></input>

<input type="submit"></input>

</form>

        </div>
    )
    }