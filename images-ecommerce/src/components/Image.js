import React, {useState} from "react"

function Image({className, imgProp}) {
    return (
        <div className={`${className} image-container`}>
            <img src={imgProp.url} alt="each for sell" className="image-grid"/>
        </div>
    )
}
export default Image