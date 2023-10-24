import React from 'react'
import slider1 from '../Assets/carousel-1.png'
import slider2 from '../Assets/carousel-2.png'
import bg1 from '../Assets/carousel-bg-1.jpg'
import bg2 from '../Assets/carousel-bg-2.jpg'
import { Link } from 'react-router-dom'

const Silders = () => {
  return (
    <div>
    <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={bg1} alt=""/>
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-10 col-lg-7 text-center text-lg-start">
                                    <h5 className="display-3 text-white mb-4 pb-3 animated slideInDown">Are you a proud owner of a Volkswagen, Audi, BMW, or Mercedes?</h5> 
                                </div>
                                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <img className="img-fluid" src={slider2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={bg2} alt="Image"/>
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-10 col-lg-7 text-center text-lg-start">
                                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">LAWAJLI Team dedicated to serving the needs of car enthusiasts just like you.</h1>
                                </div>
                                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                <img className="img-fluid" src={slider1} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    
        
    </div>
  )
}

export default Silders