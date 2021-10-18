import React from 'react'
import Nav from './nav';
import Technologies from './technologies'
import AboutUs from "./aboutus";
import ProductWeBuild from  "./productWeBuild";
import Map from './map'

const landingIndex = () => {
    return (
        <div>
            <Nav />
            <AboutUs />
            <Technologies />
            <ProductWeBuild />
            <Map />
        </div>
    )
}
export default landingIndex