import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'



const DisplayOneOrder = () => {

    const { id } = useParams()
    const navigate = useNavigate();

    const [oneOrder, setOneOrder] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5230/api/orders/${id}`)
        .then(res => {
                console.log(res.data)
                setOneOrder(res.data)
            })
        .catch(err => {
                console.log("❌❌❌❌", err)
            })

    }, [id])

    const successHandler = (e) => {
        e.preventDefault()
        const newObj = {
            status:"success"
        }
        axios.put(`http://localhost:5230/api/orders/${id}`, newObj)
            .then(res => {
                console.log("`order is changed status ✅✅✅✅")
                navigate("/dashboard");

            })
            .catch(err => {
                console.log(err)
            })
    }
    const backToActive = (e) => {
        e.preventDefault()
        const newObj = {
            status:"active"
        }
        axios.put(`http://localhost:5230/api/orders/${id}`, newObj)
            .then(res => {
                console.log("`order is changed status ✅✅✅✅")
                navigate("/dashboard");

            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <div className="containerDash">
        <div className='flexBox'>
            <div className="alert alert-info me-1">Client : <span className='bolder'>{oneOrder.fullName}</span></div>
            <div className="alert alert-info me-1">Phone Number : <span className='bolder'>{oneOrder.phone}</span></div>
            <div className="alert alert-info me-1">Email : <span className='bolder'>{oneOrder.email}</span></div>
        </div>
        <div>
        <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col ms-3"><span className="tableTitle">Address</span></th>
                        <th scope="col ms-3"><span className="tableTitle">Type Car</span></th>
                        <th scope="col ms-3"><span className="tableTitle">Fuel Car</span></th>
                        <th scope="col ms-3"><span className="tableTitle">Years Car</span></th>
                        <th scope="col ms-3"><span className="tableTitle">Parts Order</span></th>
                    </tr>
                </thead>
                <tbody>
                            <tr>
                                <td>{oneOrder.adresse}</td>
                                <td>{oneOrder.carType}</td>
                                <td>{oneOrder.fuelCar}</td>
                                <td>{oneOrder.yearsCar}</td>
                                <td>{oneOrder.partsOrder}</td>

                            </tr>
                </tbody>
            </table>
            <p>Date : {oneOrder.createdAt}</p>
        </div>
            <Link to={"/dashboard"}> <button type="button" className="btn btn-secondary ms-3">Go Back</button> </Link >
             {(oneOrder.status==="active") ? <button type="submit" class="btn btn-outline-warning ms-3" onClick={(e) => successHandler(e) }>√ Finish This Order</button> 
                                           :  <button type="submit" class="btn btn-outline-success ms-3" onClick={(e) => backToActive(e) }>√ Put Order In Active List</button>}

                    

            
            
    </div>
  )
}

export default DisplayOneOrder