import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([])
    // ({children}) is equal to props.children. Just that here did destructure

    //Get the data from API
    const url = "https://github.com/mishs/react-ecommerce/blob/main/images-ecommerce/project-images/images.json"
    // const noCors = {mode: "no-cors"}
    useEffect(() => {
                //save data to state
                //fetch API returns promise to pass as json
            fetch(url)
            
                .then(res => res.json(), {mode: "no-cors" })
                .then(data => setAllPhotos(data))
                
    }, [] )
    // .catch(err => console.error(err));

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