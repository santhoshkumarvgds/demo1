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
        <div className="sections sec-techechnologies">
            <div className="hanger"><span /></div>
            <div className="title">
                Primary Technologies we work on
            </div>
            <div class="d-flex justify-content-around" style={{ margin: "20px 0px" }}>
                <div>
                    <img src={AngularSvg} style={{ width: 120, height: 120 }} />
                    <h5>ANGULAR</h5>
                </div>
                <div>
                    <img src={ReactSvg} style={{ width: 120, height: 120 }} />
                    <h5>REACT</h5>
                </div>
                <div>
                    <img src={VueSvg} style={{ width: 120, height: 120 }} />
                    <h5>VUE</h5>
                </div>
            </div>
            <div class="d-flex justify-content-around" style={{ margin: "20px 0px" }}>
                <div>
                    <img src={ReactSvg} style={{ width: 120, height: 120 }} />
                    <h5>REACT NATIVE</h5>
                </div>
            </div>
            <div class="d-flex justify-content-around" style={{ margin: "20px 0px" }}>
                <div>
                    <img src={ExpressSvg} style={{ width: 120, height: 120 }} />
                    <h5>EXPRESS</h5>
                </div>
                <div>
                    <img src={NodeSvg} style={{ width: 120, height: 120 }} />
                    <h5>NODE</h5>
                </div>
                <div>
                    <img src={MongoSvg} style={{ width: 120, height: 120 }} />
                    <h5>MANGODB</h5>
                </div>
            </div>
        </div>
    )
}

export default technologies
