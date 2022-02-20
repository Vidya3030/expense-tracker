import React, { useEffect } from "react"
import "./SpeechTest.css"

const SpeechTest = (prop) => {
    return (<div className="container">
        <div className="jar">

        </div>
        <div className="label">
            <div>{prop.category}</div>
            <div>{prop.dollar}</div>
        </div>
    </div>)
}

export default SpeechTest