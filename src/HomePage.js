import React from 'react'
import ExploreNFT from './Component/ExploreNFT/ExploreNFT'
import Home from './Component/Home/Home'
import Roadmap from './Component/Roadmap/Roadmap'
import Footer from "./Component/Footer/Footer"
function HomePage() {
  return (
    <div>
      <Home />
      <ExploreNFT />
      <Roadmap/>
      <Footer/>
    </div>
  )
}

export default HomePage