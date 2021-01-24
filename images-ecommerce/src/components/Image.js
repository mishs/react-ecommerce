import React from "react"

function Image({className, photoProp}) {
    return (
        <div className={`${className}`}>
            <img src={photoProp.url} className="image-grid"/>
        </div>
    )
}
export default Image