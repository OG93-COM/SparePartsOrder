import React from 'react'
import {Link} from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="contentLoginReg">
        <h3>Opps, Page Not Found</h3>
        <hr/>
        <Link to={"/"}>Back to home page</Link>
    </div>
  )
}

export default PageNotFound