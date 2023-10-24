import React from 'react'
import Silders from './Silders'
import AddOrders from '../Components/AddOrders'

const ContainerHome = () => {
  return (
    
    <div>
        <Silders/>
        <div className="container-xxl py-5">
            <div className="container mb-3">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex bg-light py-5 px-4">
                            <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                            <div className="ps-4">
                                <h5 className="mb-3">Genuine Quality</h5>
                                <p>We understand that your vehicle deserves the best, which is why we exclusively offer genuine and OEM parts. You can trust that each product on our platform is of the highest quality for your car's exact specifications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex bg-light py-5 px-4">
                            <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                            <div className="ps-4">
                                <h5 className="mb-3">Expert Support</h5>
                                <p>Our team of automotive experts is just a message or call away. If you have questions or need assistance in finding the right part for your vehicle, we're here to help. Your satisfaction is our top priority.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex bg-light py-5 px-4">
                            <i className="fa fa-truck fa-3x text-primary flex-shrink-0"></i>
                            <div className="ps-4">
                                <h5 className="mb-3">Fast Shipping</h5>
                                <p>We understand the importance of timely delivery. Once your order is placed, we work diligently to get your parts to you as quickly as possible, so you can get back on the road with confidence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <AddOrders/>    
        </div>

    </div>
  )
}

export default ContainerHome