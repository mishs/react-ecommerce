import React from "react"

const Context = React.createContext()

function ContextProvider({children}){
    // ({children}) is equal to props.children. Just that here did destructure
    return (
        <Context.Provider>
            {children}
            {/* since it's a custom component (to wrap around whole component in our app) */}
        </Context.Provider>
    )
}