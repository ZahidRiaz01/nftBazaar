import React from 'react'
import "./Roadmap.css"
import wallet from "../../Assets/Icon awesome-wallet.png"
import Group18 from "../../Assets/Group 18.png"
import Group17 from "../../Assets/Group 17.png"
import Group15 from "../../Assets/Group 15.png"
import clipboardlist from "../../Assets/Icon awesome-clipboard-list.png"
import metroimage from "../../Assets/Icon metro-image.png"
function Roadmap() {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center mt-4'>
                <div className='col-md-12'>
                    <h2 className='mint-h2 text-center mt-3'>Road Map</h2>
                    <div className='row d-flex justify-content-center justify-content-md-between align-items-center'>
                        <div className='road-box d-flex flex-md-row'>
                            <div className='col-md-4 col-11'>
                                <h5 className='road-map-h'>Set your MetaMask Wallet</h5>
                                <p className='roadmap-p'>Once you have set up your walletof choice, connect in to NFT bazar by clicking
                                    the wallet icon in the top right corner. Learn about the wallets we support.</p>
                            </div>
                            <div className='col-md-4 dipaly' >
                                <img src={Group18} className="map-image" />
                            </div>
                            <div className='col-md-4 col-11'>
                                <img src={wallet} className="roadmap-img" />
                            </div>
                        </div>
                        <div className='d-flex flex-md-row flex-column'>
                            <div className='col-md-4 col-11 '>
                                <img src={Group17} className="roadmap-img" />
                            </div>
                            <div className='col-4 dipaly'>
                                <img src={Group15} className="map-image" />
                            </div>
                            <div className='col-md-4 col-11 '>
                                <h5 className='road-map-h'>Create your collection</h5>
                                <p className='roadmap-p'>Click My Collections and set up your collection.
                                    Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
                            </div>
                        </div>
                        <div className='road-box d-flex  flex-md-row'>
                            <div className='col-md-4 col-11'>
                                <h5 className='road-map-h'>Add your NFTs</h5>
                                <p className='roadmap-p'>Upload your work (image, video, audio, or 3D art), add a title and description,
                                    and customize your NFTs with properties, stats, and unlockable content.</p>
                            </div>
                            <div className='col-4 dipaly'>
                                <img src={Group18} className="map-image" />
                            </div>
                            <div className='col-md-4 col-11'>
                                <img src={metroimage} className="roadmap-img" />
                            </div>
                        </div>
                        <div className='d-flex flex-md-row flex-column justify-content-center justify-content-md-between align-items-center'>
                            <div className='col-md-4 col-11'>
                                <img src={clipboardlist} className="roadmap-img" />
                            </div>

                            <div className='col-md-4 col-11 '>
                                <h5 className='road-map-h'>List them for sale</h5>
                                <p className='roadmap-p'>Choose between auctions, fixed-price listings,
                                    and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap