import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    // ({children}) is equal to props.children. Just that here did destructure

  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
  }, [])

  const toggleIsFavorite = id => {
      const updateImages = allPhotos.map(photo => {
          if(photo.id === id ) {
            // console.log(id)
            // console.log(!photo.isFavorite)
              return {...photo,
                isFavorite : !photo.isFavorite
            }
          }
          return photo
      })
      setAllPhotos(updateImages)
  }

  const addToCart = newItem => {
    setCartItems(prevItems => [...prevItems, newItem])
  }
  console.log(cartItems)

    return (
        <Context.Provider value={{allPhotos, toggleIsFavorite, addToCart}}>
            {children}
            {/* since it's a custom component (to wrap around whole component in our app) */}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
//named exports to enable both exports