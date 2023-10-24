import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import DisplayOrderSuccess from './DisplayOrderSuccess'

const DisplayOrders = () => {

    const { id } = useParams()

    const [ordersList, setOrdersList] = useState([])


    useEffect(() => {
        axios.get("http://localhost:5230/api/orders/")
            .then((res) => {
                console.log(res.data)
                setOrdersList(res.data.allOrders)
            })
            .catch((err) => { console.log(err) })
    }, [])

    const deleteOrders = (id) => {
        axios.delete(`http://localhost:5230/api/orders/${id}`)
            .then(res => {
                console.log("deleted")

                const filteredOrders = ordersList.filter((eachOrders) => {
                    if (eachOrders._id === id) {
                        return false
                    } else {
                        return true

                    }

                })
                setOrdersList(filteredOrders)
            })
            .catch(err => {
                console.log(err)
            })
    }

    


    return (
        <div>
        <div className='containerDash'>
            <div className='titleListOrderSucc'>List Of Active Orders</div>
            <Link to={"/newOrder"}> <button type="button" className="btn btn-primary mb-3">Add New Order</button> </Link >
            
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col ms-3"><span className="tableTitle">Client Name</span></th>
                        <th scope="col ms-3"><span className="tableTitle">Phone</span></th>
                        <th scope="col ms-3"><span className="tableTitle">Type Car</span></th>
                        <th scope="col ms-3"><span className="tableTitle">Years Car</span></th>
                        <th scope="col ms-3"><span className="tableTitle">Parts Order</span></th>
                        <th scope="col ms-3"><span className="tableTitle">Actions</span></th>
                        <th scope="col ms-3"><span className="tableTitle">√</span></th>
                    </tr>
                </thead>
                <tbody>
                    {ordersList.map((orderDisplayOne, idx) => {
                      if(orderDisplayOne.status==="active")  return (
                            <tr key={idx}>
                                <td><Link to={"/api/orders/" + orderDisplayOne._id}>{orderDisplayOne.fullName} </Link ></td>
                                <td>{orderDisplayOne.phone}</td>
                                <td>{orderDisplayOne.carType}</td>
                                <td>{orderDisplayOne.yearsCar}</td>
                                <td>{orderDisplayOne.partsOrder}</td>
                                <td>
                                <Link to={"/api/orders/" + orderDisplayOne._id}><button type="button" className="btn btn-success ms-3">View</button> </Link >
                                    <button type="button" className="btn btn-danger ms-3" onClick={() => deleteOrders(orderDisplayOne._id)}>Delete</button>
                                </td>
                                <td>
                                {(orderDisplayOne.status==="active") ? <span className="badge bg-warning text-dark">Active</span> 
                                           :  <button type="submit" className="btn btn-outline-warning ms-3">Not Active</button>}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <DisplayOrderSuccess/>
        </div>
    )
}

export default DisplayOrders