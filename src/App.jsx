import React from "react"

// components
import Header from "./components/header"
import Showcase from "./components/showcase"
import SwiperCard from "./components/swiper-card"
import Info from "./components/info"
import Banner from "./components/banner"
import BottomCard from "./components/bottom-card"
import BottomBanner from "./components/bottom-banner"
import Footer from "./components/footer"

const App = () => {
    return (
        <>
            <Header />
            <Showcase />
            <SwiperCard />
            <Info />
            <Banner />
            <BottomCard />
            <BottomBanner />
            <Footer />
        </>
    )
}

export default App
