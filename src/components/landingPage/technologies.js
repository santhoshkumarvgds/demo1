import React from 'react'
import AngularSvg from '../../assets/techSvg/angular-icon.svg'
import ReactSvg from '../../assets/techSvg/react-icon.svg'
import VueSvg from '../../assets/techSvg/vuejs-icon.svg'
import ExpressSvg from '../../assets/techSvg/expressjs-icon.svg'
import NodeSvg from '../../assets/techSvg/nodejs-icon.svg'
import MongoSvg from '../../assets/techSvg/mongodb-icon.svg'
import Heading from './heading'

const technologies = () => {
    return (
        <div>
            <Heading title="Technologies we are worked" />
            <div class="d-flex justify-content-around" style={{ margin: "20px 0px" }}>
                <div>
                    <img src={AngularSvg} style={{ width: 150, height: 150 }} />
                    <h4>ANGULAR</h4>
                </div>
                <div>
                    <img src={ReactSvg} style={{ width: 150, height: 150 }} />
                    <h4>REACT</h4>
                </div>
                <div>
                    <img src={VueSvg} style={{ width: 150, height: 150 }} />
                    <h4>VUE</h4>
                </div>
            </div>
            <div class="d-flex justify-content-around" style={{ margin: "20px 0px" }}>
                <div>
                    <img src={ReactSvg} style={{ width: 150, height: 150 }} />
                    <h4>REACT NATIVE</h4>
                </div>
            </div>
            <div class="d-flex justify-content-around" style={{ margin: "20px 0px" }}>
                <div>
                    <img src={ExpressSvg} style={{ width: 150, height: 150 }} />
                    <h4>EXPRESS</h4>
                </div>
                <div>
                    <img src={NodeSvg} style={{ width: 150, height: 150 }} />
                    <h4>NODE</h4>
                </div>
                <div>
                    <img src={MongoSvg} style={{ width: 150, height: 150 }} />
                    <h4>MANGODB</h4>
                </div>
            </div>
        </div>
    )
}

export default technologies
