import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import { useCookies } from "react-cookie";
import axios from "axios"

const Login = (props) => {

  const [values, setValues] = useState({email: "", password: "" });
  const navigate = useNavigate();


  const [cookies] = useCookies(["cookie-name"]);
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
      generateError("you are already connected");
    }
  }, [cookies, navigate]);

  const generateError = (error) => {
    toast.error(error, { position: "top-center"  });
  }
  
  function refreshPage() {
    window.location.reload(false);
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5230/login", values, {
        withCredentials: true,
      });
  
        const { data } = response;
        console.log(data);
        refreshPage();

      if (data) {
        navigate("/");
      }
    } catch (ex) { 
      generateError("Verif Email Or Password");
    }  }
  

  return (

    <div className='contentLoginReg mb-3'>
        <h1>Login</h1>
        <form onSubmit={(e) => submitHandler(e)}>
            <input type="email" className="form-control mb-3 mt-3" placeholder="Email" name="email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            } 
            />

            <input type="password" className="form-control mb-3"  placeholder="Password" name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            } />

            <button type="submit" className="btn btn-primary"> Login </button>
            <p className='mt-3'>NB : Login Is Only For Admin</p>
        </form>

        <ToastContainer />
    </div>

  )
}

export default Login