import React, { useEffect , useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const DisplayAdmin = () => {

    const [adminList, setAdminList] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5230/api/user/")
            .then((res) => {
                console.log(res.data)
                setAdminList(res.data.allUser)
            })
            .catch((err) => { console.log(err) })
    }, [])

    const deleteAdmin = (id) => {
      axios.delete(`http://localhost:5230/api/user/${id}`)
          .then(res => {
              console.log("deleted")

              const filteredAdmin = adminList.filter((eachAdmin) => {
                  if (eachAdmin._id === id) {
                      return false
                  } else {
                      return true
                  }
              })
              setAdminList(filteredAdmin)
          })
          .catch(err => {
              console.log(err)
          })
      } 

      useEffect(() => {
        const verifyUser = async () => {
          if (!cookies.jwt) {
            navigate("/login");
          } 
          
        };
        verifyUser();
      }, [cookies, navigate, removeCookie]);

  return (

    <div>
        <div className='containerAdmin'>
            <div className='titleListAdmin'>List Of Admin</div>
            
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col ms-3"><span className="tableTitle">First Name</span></th>
                        <th scope="col ms-3"><span className="tableTitle">Last Name</span></th>
                        <th scope="col ms-3"><span className="tableTitle">Email</span></th>
                        {/* <th scope="col ms-3"><span className="tableTitle">Actions</span></th> */}
                    </tr>
                </thead>
                <tbody>
                    {adminList.map((adminDisplayOne, idx) => {
                       return (
                            <tr key={idx}>
                                <td>{adminDisplayOne.firstName}</td>
                                <td>{adminDisplayOne.lastName}</td>
                                <td>{adminDisplayOne.email}</td>
                                {/* <td>
                                    <button type="button" className="btn btn-danger ms-3" onClick={() => deleteAdmin(adminDisplayOne._id)}>Delete</button>
                                </td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* <Link to={"/register"}><button className="btn btn-primary mb-3"> Creacte New Account </button></Link > */}
        </div>
        </div>
  )
}

export default DisplayAdmin