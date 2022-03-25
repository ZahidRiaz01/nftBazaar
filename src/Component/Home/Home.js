import React from 'react'
import "./Home.css"
import Card from 'react-bootstrap/Card'
import tiger1 from "../../Assets/Mask Group 5.png"
function Home() {
    return (
        <div className='Home-image'>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-lg-6'>
                        <h2 className='text-start home-h2 mt-lg-1 mt-5 mb-4'>Collection of extraordinary NFTs at a place</h2>
                        <p className='home-p text-start pt-4 mb-4'>Lorem Ipsum is simply dummy
                            text of the printing and typesetting
                            industry.</p>
                        <div className='row pt-4 mb-4' sty3e={{border: "2px solid red"}}>
                            <div className='col-md-4 mt-4'>
                                <div className="d-grid gap-2">
                                    <button className='btn home-btn' size="lg">
                                        Explore
                                    </button>

                                </div>
                            </div>
                            <div className='col-md-4 mt-4'>
                                <div className="d-grid gap-2">
                                    <button className='btn home-btn1' size="lg">
                                        Create
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-5 m-4'>
                        <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                            <Card.Img variant="top" className="home-img" src={tiger1} />
                            <Card.Body>
                                <div className='row d-flex justify-content-center align-items-center'>
                                    <div className='col-2'>
                                        <img src={tiger1} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                    </div>
                                    <div className='col-6 text-start'>
                                        <h6 style={{ color: "#00bdfe" }}>Name</h6>
                                        <p style={{ color: "white", fontSize: "12px" }}>Lorem Ipsum is simply dummy
                                            text of the printing and typesetting
                                            industry.</p>
                                    </div>
                                    <div className='col-3 '>
                                        <div className="d-grid gap-2">
                                            <button className='btn btn-collection1' size="lg">
                                                Sell
                                            </button>

                                        </div>
                                    </div>
                                </div>


                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home