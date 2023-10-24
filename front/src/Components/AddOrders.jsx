import React, { useState } from 'react'
import axios from "axios"
import {ToastContainer, toast} from 'react-toastify'

const AddOrders = () => {

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [adresse, setAdresse] = useState("");
    const [carType, setCarType] = useState("");
    const [fuelCar, setFuelCar] = useState("");
    const [yearsCar, setYearsCar] = useState("");
    const [partsOrder, setPartsOrder] = useState("");

    const [errors, setErrors] = useState([]);

    

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5230/api/orders/", {
        fullName,
        phone,
        email,
        adresse,
        carType,
        fuelCar,
        yearsCar,
        partsOrder
    })
    .then((res) => {
        // console.log(res)
        // console.log(res.data)
        setFullName("")
        setPhone("")
        setEmail("")
        setAdresse("")
        setCarType("")
        setFuelCar("")
        setYearsCar("")
        setPartsOrder("")
        toast("Your Order Is Submited Successfuly" , { position: "top-center" });
        toast("Our Team Will Call You Soon" , { position: "top-center" });
        
    })
    .catch(err=>{
        console.log("this is chatch",err)
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    })            
}

  return (
    <div className="containerForm">
        <h2>Add New Order</h2>
        

        <form onSubmit={submitHandler}>
          <input type="text" className="form-control mb-2" placeholder="Your Full Name" onChange={(e) => setFullName(e.target.value)} value={fullName}/>
          <input type="number" className="form-control mb-2" placeholder="Your Number Phone (exp : 22 300 040)" onChange={(e) => setPhone(e.target.value)} value={phone}/>
          <input type="email" className="form-control mb-2" placeholder="Your Email (exp : contact@lawajli.tn)" onChange={(e) => setEmail(e.target.value)} value={email}/>
          <input type="text" className="form-control mb-2" placeholder="Your Adresse (exp : Street, City, NewYork)" onChange={(e) => setAdresse(e.target.value)} value={adresse}/>  
          <input type="text" className="form-control mb-2" placeholder="Your Car Type (exp : BMW F30 316i)" onChange={(e) => setCarType(e.target.value)} value={carType}/>
          <div class="row">
            <div class="col">

              <input type="number" className="form-control mb-2" placeholder="Years Car (exp : 2004)" onChange={(e) => setYearsCar(e.target.value)} value={yearsCar}/>
            </div>
            <div class="col">
            <select className="form-select form-select-sm mb-2" aria-label=".form-select-sm example" onChange={(e) => setFuelCar(e.target.value)} defaultValue={fuelCar}>
              <option>Choise Type Of Fuel</option>
              <option value="Fuel">Fuel</option>
              <option value="Diesel">Diesel</option>
              <option value="Gaz">Gaz</option>
              </select>
            </div>
          </div>
          <textarea className="form-control mb-2" placeholder="Parts Order (exp : Steering System)" onChange={(e) => setPartsOrder(e.target.value)} value={partsOrder}/>   
          <button type="submit" className="btn btn-primary ms-3 mb-3 mt-3">Order Now</button>
          {errors.map((err, index) => <div className="alert alert-danger" key={index}>{err}</div>)}
        </form>

        <ToastContainer/>
    </div>
  )
}

export default AddOrders

