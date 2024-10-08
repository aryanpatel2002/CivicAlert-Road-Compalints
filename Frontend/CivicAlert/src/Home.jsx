import React from "react";
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import Complaints from "./Components/Complaints"
import Footer from "./Components/Footer"

function Home() {
    return(
        <>
        <Navbar/>
        <Banner/>
        <Complaints/>
        <Footer/>
        </>
    )
}

export default Home