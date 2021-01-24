import React from "react"

function Image({className, photoProp}) {
    return (
        <div>
            <img src={photoProp.url} />
        </div>
    )
}
export default Image