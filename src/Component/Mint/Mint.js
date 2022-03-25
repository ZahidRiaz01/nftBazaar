import React from 'react'
import Form from 'react-bootstrap/Form'
import "./Mint.css"
import Carousel from 'react-bootstrap/Carousel'
import tiger1 from "../../Assets/Mask Group 5.png"
import tiger2 from "../../Assets/Mask Group 5.png"
import tiger3 from "../../Assets/Mask Group 7.png";
import { nftContractAdress, nftContractAbi } from "../Utils/nftContract"
import { loadWeb3 } from '../Api/api'
import { toast } from 'react-toastify'
function Mint() {
    let mint = async () => {
        let acc = await loadWeb3();
        if (acc == "No Wallet") {
            console.log("No Wallet Connected");
        } else if (acc == "Wrong Network") {

            console.log("Wrong Network");
        }
        else {
            try {

                const web3 = window.web3;
                 let acc = await loadWeb3();

                let nftMintContractOf = new web3.eth.Contract(nftContractAbi, nftContractAdress);
                let ownerAddress = await nftMintContractOf.methods.owner1().call();
                console.log("myMax",ownerAddress);
                if (acc==ownerAddress){
                    await nftMintContractOf.methods.mintToken().send({
                        from:acc
                    })
                    toast.success("Transaction Confirmed")
                }else{
                    toast.error("Minting Can Only Be Performed by the Owner")
                    
                }

            } catch (e) {
                console.log("Error while minting", e);
                toast.error("Transaction Failed")

            }
        }
    }
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center mt-5'>
                <div className='col-lg-8 col-11 text-start '>
                    <h2 className='mint-h2'>Mint Your New NFT</h2>
                    <div className='row '>
                        <div className='col-md-10 '>
                            {/* <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='form-mint-text'>NFT Title</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='form-mint-text'>NFT Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='form-mint-text'>NFT Price</Form.Label>
                                    <Form.Control type="Number" placeholder="0" />
                                </Form.Group>
                            </Form>
                            <form >
                                <label for="myfile" className='form-mint-text'>Uplaod NFT </label>&nbsp;
                                <input type="file" id="myfile" name="myfile" />
                            </form> */}
                            <div className='row mt-3'>
                                <div className='col-md-5 '>
                                    <div className="d-grid gap-2">
                                        <button onClick={() => mint()} className='btn btn-primary' size="lg">
                                            Mint NFT
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-10 mint-box mt-3 mb-3 p-4 d-flex align-items-center justify-content-center '>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={tiger1}
                                alt="First slide"

                            />

                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={tiger2}
                                alt="Second slide"

                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={tiger3}
                                alt="Third slide"

                            />

                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Mint