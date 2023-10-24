import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from 'react-toastify'
import axios from "axios"

const Register = (props) => {

  const [cookies] = useCookies(["cookie-name"]);
  const [values, setValues] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    if (!cookies.jwt) {
      console.log("cookisssss", cookies.jwt)
      // navigate("/");  //Active this line for first Register
    }
  }, [cookies, navigate]);


  const generateError = (error) => {
    toast.error(error, { position: "top-center" });
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5230/register", { ...values }, { withCredentials: true })
      // console.log(data)
      navigate("/");
      refreshPage();
      

      if (data) {
        navigate("/");
      }
    } catch (ex) {
      const { firstName, lastName, email, password } = ex.response.data.errors;
      console.log(firstName, lastName, email, password)
      if (firstName) generateError(firstName.message);
      else if (lastName) generateError(lastName.message);
      else if (email) generateError(email.message);
      else if (password) generateError(password.message);
    }
  }


  return (

    <div className='contentLoginReg mb-3'>

      <form onSubmit={submitHandler}>
        <h4>Add New Admin</h4>
        <input type="text" name='firstName' onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} className="form-control mb-3 mt-3" placeholder="First Name" />
        <input type="text" name='lastName' onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} className="form-control mb-3" placeholder="Last Name" />
        <input type="email" name='email' onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} className="form-control mb-3" placeholder="Email" />
        <input type="password" name='password' onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} className="form-control mb-3" placeholder="Password" />
        <button type="submit" className="btn btn-primary"> Creacte New Account </button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Register