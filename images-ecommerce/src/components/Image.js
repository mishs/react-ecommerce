import React from "react"

function Image({className, photoProp}) {
    return (
        <div className={`${className} image-container`}>
            <img src={photoProp.url} className="image-grid"/>
        </div>
    )
}
export default Image