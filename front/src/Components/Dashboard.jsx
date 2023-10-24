import React, { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import DisplayOrders from "./DisplayOrders";

const Dashboard = () => {

    const [values, setValues] = useState({email: ""});
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:5230",
          {...values},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
            toast("Hello Admin" , {
                theme: "dark",position: "top-center" 
              });
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Hi ${data.user}`, {
            theme: "dark",position: "top-center"
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);



    return (
        <div>

            <ToastContainer />

            <DisplayOrders/>
        </div>
    )
}

export default Dashboard