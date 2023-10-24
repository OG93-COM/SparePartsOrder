import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import logo from '../Assets/logo.png'

const NavBar = (props) => {

    const [cookies, setCookie, removeCookie] = useCookies([]);
    const navigate = useNavigate();
    const [values, setValues] = useState({email: ""});
    const [welcome, setWelcome] = useState("");

    useEffect(() => {
        const verifyUser = async () => {
          if (!cookies.jwt) {
            console.log('No Login')
          } else {
            const { data } = await axios.post(
              "http://localhost:5230",
              {...values},
              {
                withCredentials: true,
              }
            );
            if (!data.status) {
              removeCookie("jwt");
              
            } else
              setWelcome("Hello "  + data.user);
          }
        };
        verifyUser();
      }, [cookies, navigate, removeCookie]);
    

    const logOut = () => {
        removeCookie("jwt");
        navigate("/login");
        window.location.reload(false);
      };

  return (
    <div>

    <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Ras Jebel, Bizerte</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3">
                    <small className="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 09.00 AM - 06.00 PM</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small>22 3000 40</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn btn-sm-square bg-white text-primary me-1" href="https://www.facebook.com/lawajli.ste"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-sm-square bg-white text-primary me-1" href="https://twitter.com/lawajli"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-sm-square bg-white text-primary me-0" href="https://www.instagram.com/lawajli/"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3  ms-3">
                    <small>{welcome}</small>
                    
                </div>
                
            </div>
        </div>
    </div>

    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 ">
    <Link to={"/"}><span  className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><img className="img-logo" src={logo} alt=""/>LAWAJLI.TN</h2>
        </span></Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to={"/"}><span className="nav-item nav-link ">Home</span></Link>
                <Link to={"/aboutus"}><span className="nav-item nav-link ">AboutUs</span></Link>
              { (cookies.jwt) ? (<Link to={"/dashboard"}>
                                    <span className="btn btn-primary py-2 px-lg-4 me-2 d-none d-lg-block">Dashboard</span></Link>)
                : <Link to={"/login"}><span className="btn btn-success py-3 px-lg-3 me-2 d-none d-lg-block">LOGIN<i className="fa fa-arrow-right ms-3"></i></span></Link>  } 
                { (cookies.jwt) ? (<Link to={"/showAdmin"}><span className="btn btn-primary py-2 px-lg-3 me-2 d-none d-lg-block"><i className="fa fa-wrench"></i></span></Link>)
                :  <span></span> }
                { (cookies.jwt) ? (<span onClick={logOut} className="btn btn-secondary py-3 px-lg-3 me-2 d-none d-lg-block">Logout</span>)
                : <span></span>  }
            </div>
            
        </div>
    </nav>

    </div>
  )
}

export default NavBar