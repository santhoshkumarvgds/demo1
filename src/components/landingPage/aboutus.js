import React from "react";
import WorkSvg from "../../assets/undraw_Work.svg";

const Aboutus = () => {
    return(
        <div class="sections sec-aboutus">
            <div className="hanger"><span /></div>
            <div className="title">About us</div>
            <div className="sec-aboutus-contentWrapper">
                <div>
                    <img className="sec-aboutus-svg" src={WorkSvg} />
                </div>
                <div className="sec-aboutus-content">
                    We are full stack product builders to solve your technical problems, and we strive hard to meet your business requirments
                </div>
            </div>
        </div>
    );
}

export default Aboutus;