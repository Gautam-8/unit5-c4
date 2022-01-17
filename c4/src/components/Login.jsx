import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginSuccess } from "../features/jobs/action";


export const Login = () => {


 const [login , setLogin] = useState({});


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

      dispatch(loginSuccess(login));
  
       

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