import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([])
    // ({children}) is equal to props.children. Just that here did destructure

  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
  }, [])

  console.log(allPhotos)
    return (
        <Context.Provider value={{allPhotos}}>
            {children}
            {/* since it's a custom component (to wrap around whole component in our app) */}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
//named exports to enable both exports