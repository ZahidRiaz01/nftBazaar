import React from 'react'
import Card from 'react-bootstrap/Card'
import tiger1 from "../../Assets/Mask Group 5.png"
import tiger2 from "../../Assets/Mask Group 5.png"
import tiger3 from "../../Assets/Mask Group 7.png"
import "./MyCollection.css"
function MyCollection() {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center mt-4'>
                <div className='col-md-12'>
                    <h2 className='mint-h2 text-start'>My NFTs Collection</h2>
                    <div className='row d-flex justify-content-center justify-content-between'>
                        <div className='col-lg-4 mt-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger1} height="400px"/>
                                <Card.Body>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger1} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>Account Name</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>Lorem Ipsum is simply dummy
                                                text of the printing and typesetting
                                                industry.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start'>
                                            <span style={{ color: "white", fontWeight: "bold" }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold" }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>


                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4 mt-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger2} height="400px"/>
                                <Card.Body>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger2} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>Account Name</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>Lorem Ipsum is simply dummy
                                                text of the printing and typesetting
                                                industry.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start'>
                                            <span style={{ color: "white", fontWeight: "bold" }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold" }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4 mt-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger3} height="400px"/>
                                <Card.Body>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger3} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>Account Name</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>Lorem Ipsum is simply dummy
                                                text of the printing and typesetting
                                                industry.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start'>
                                            <span style={{ color: "white", fontWeight: "bold" }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold" }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4 mt-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger1} height="400px"/>
                                <Card.Body>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger1} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>Account Name</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>Lorem Ipsum is simply dummy
                                                text of the printing and typesetting
                                                industry.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start'>
                                            <span style={{ color: "white", fontWeight: "bold" }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold" }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4 mt-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger2} height="400px"/>
                                <Card.Body>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger2} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>Account Name</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>Lorem Ipsum is simply dummy
                                                text of the printing and typesetting
                                                industry.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start'>
                                            <span style={{ color: "white", fontWeight: "bold" }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold" }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4 mt-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger3} height="400px"/>
                                <Card.Body>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger3} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>Account Name</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>Lorem Ipsum is simply dummy
                                                text of the printing and typesetting
                                                industry.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start'>
                                            <span style={{ color: "white", fontWeight: "bold" }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold" }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4 mt-3 mb-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger1} height="400px"/>
                                <Card.Body>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger1} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>Account Name</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>Lorem Ipsum is simply dummy
                                                text of the printing and typesetting
                                                industry.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start'>
                                            <span style={{ color: "white", fontWeight: "bold" }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold" }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4 mt-3 mb-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger2} height="400px"/>
                                <Card.Body>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger2} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>Account Name</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>Lorem Ipsum is simply dummy
                                                text of the printing and typesetting
                                                industry.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start'>
                                            <span style={{ color: "white", fontWeight: "bold" }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold" }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4 mt-3 mb-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger3} height="400px"/>
                                <Card.Body>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger3} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>Account Name</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>Lorem Ipsum is simply dummy
                                                text of the printing and typesetting
                                                industry.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start'>
                                            <span style={{ color: "white", fontWeight: "bold" }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold" }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection' size="lg">
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
        </div>
    )
}

export default MyCollection