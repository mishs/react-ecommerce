import React, {useState} from "react"

function Image({className, imgProp}) {
    const [isHovered, setHovered] = useState(false)
    const heartIcon = isHovered ? 
    const heartIcon = isHovered && <i className="ri-heart-line favorite"></i>
    const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>

    // This  (&&) is equal to : isHovered ? <i className="ri-heart-line favorite"></i> : null
    return (
        <div 
        className={`${className} image-container`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
            <img src={imgProp.url} alt="each for sell" className="image-grid"/>
        </div>
    )
}
export default Image