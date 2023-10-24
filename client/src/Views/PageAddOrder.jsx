import React from 'react'
import AddOrders from '../Components/AddOrders'
import { Link } from 'react-router-dom'

const PageAddOrder = () => {
  return (
    <div className="containerPrinc">
      <div><Link to={"/dashboard"}> <button type="button" className="btn btn-secondary ms-3">Go Back</button> </Link ></div>
        <AddOrders/>    
        
    </div>
  )
}

export default PageAddOrder