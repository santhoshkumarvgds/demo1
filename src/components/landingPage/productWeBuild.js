import React from "react";
import websiteSvg from "../../assets/website-icon.svg";
import mobilesiteSvg from "../../assets/mobileapp-icon.svg";

const ProductsWeBuild = () => {
    return (
        <div className="sections sec-prowebuild">
            <div className="hanger"><span /></div>
            <div className="title">
                Products we build
            </div>
            <div className="sec-prowebuild-contentWrapper">
                <div>
                    <img src={websiteSvg} className="sec-prowebuild-svg" />
                </div>

                <div className="sec-prowebuild-content sec-prowebuild-content-web">
                    We build Responsive web apps for Desktop &amp; Mobile
                </div>
            </div>
            <div className="sec-prowebuild-contentWrapper">
                <div className="sec-prowebuild-content sec-prowebuild-content-mobile">
                    Mobile apps fro Android &amp; IOS through cross-platform and Native techs..!!
                </div>
                <div>
                    <img src={mobilesiteSvg} className="sec-prowebuild-svg" />
                </div>
            </div>
        </div>
    )
}

export default ProductsWeBuild;