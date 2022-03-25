import React from 'react'
import "./Footer.css"
import Rectangle21 from "../../Assets/Rectangle 21.png"
import twitter from "../../Assets/twitter.png"
import instagram from "../../Assets/instagram.png"
import discord from "../../Assets/discord.png"
import facebook from "../../Assets/facebook.png"
import email from "../../Assets/Icon simple-email.png"
import call from "../../Assets/Icon zocial-call.png"
function Footer() {
    return (
        <div className='footer-color'>
            <div className='container'>
                <div className='row d-flex justify-content-center justify-content-around align-items-center mt-4 pt-4 pb-4'>
                    <div className='col-md-4 col-10'>
                        <h5 className='road-map-h'>Metaverse Marketplace</h5>
                        <p className='roadmap-p'>Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry.
                            Lorem Ipsum has been
                            the industry's standarddummy
                            text ever since the 1500s</p>
                    </div>
                    <div className='col-2 footerdispaly'>
                        <img src={Rectangle21} className='footerimage' />
                    </div>
                    <div className='col-md-4 col-10'>
                        <h5 className='road-map-h'>Join the community</h5>
                        <div className='d-flex justify-content-evenly mt-4'>
                            <img src={twitter} width="34px" />
                            <img src={instagram} width="34px" />
                            <img src={discord} width="34px" />
                            <img src={facebook} width="34px" />
                        </div>
                        <h5 className='road-map-h mt-4 '>Help & Support</h5>
                        <div className=''>
                        <span  style={{color: "white"}}><img src={email} width="17px"/> abc@gmail.com</span><br/>
                        <span style={{color: "white"}}><img src={call} width="14px"/>&nbsp;012 345 678</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer