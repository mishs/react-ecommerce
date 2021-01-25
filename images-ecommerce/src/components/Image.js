import React, {useState, useContext} from "react"
import {Context} from "../Context"

function Image({className, imgProp}) {
    const [isHovered, setHovered] = useState(false)
    const {toggleIsFavorite} = useContext(Context)

    const heartIcon = () =>{
        if(imgProp.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => toggleIsFavorite(imgProp.id)}></i>
        }
        if(isHovered){
            return <i className="ri-heart-line favorite" onClick={() => toggleIsFavorite(imgProp.id)}></i>
        }
    }      
    const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>

    // This  (&&) is equal to : isHovered ? <i className="ri-heart-line favorite"></i> : null
    return (
        <div 
        className={`${className} image-container`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
            <img src={imgProp.url} alt="each for sell" className="image-grid"/>
            {heartIcon}
            {cartIcon}
        </div>
    )
}
export default Image