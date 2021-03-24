import React, {useState, useContext} from "react"
import PropTypes from "prop-types"

import {Context} from "../Context"

function Image({className, imgProp}) {
    const [isHovered, setHovered] = useState(false)
    const {toggleIsFavorite, addToCart, cartItems} = useContext(Context)

    const heartIcon = () =>{
        if(imgProp.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => toggleIsFavorite(imgProp.id)}></i>
        }
        if(isHovered){
            return <i className="ri-heart-line favorite" onClick={() => toggleIsFavorite(imgProp.id)}></i>
        }
    }      
    // console.log('What is cartIcon',cartIcon)

    // const cartIcon = isHovered && <i className="ri-add-circle-line cart" onClick={() => addToCart(imgProp)}></i>
// console.log('test',cartIcon)
//         cartItems.map(photo => {
//             if(cartIcon){
//                 return <i className="ri-shopping-cart-fill cart"></i>
//             }else{
//                 return cartIcon
//             }
//         })
        
function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === imgProp.id)

    if(alreadyInCart) {
        return <i className="ri-shopping-cart-fill cart"></i>
    } else if(isHovered) {
        return <i className="ri-add-circle-line cart" onClick={() => addToCart(imgProp)}></i>
    }else if(alreadyInCart && isHovered) {
        cartItems.filter(item => item === alreadyInCart)
        console.log('New items in cart',cartItems.filter(item => item === alreadyInCart))
        return <i className="ri-shopping-cart-fill cart" onClick={() => <i className="ri-add-circle-line cart"></i>
        }></i>
  }
}


    return (
        <div 
        className={`${className} image-container`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
            <img src={imgProp.url} alt="each for sell" className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}
export default Image