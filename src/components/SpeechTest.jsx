import React, { useEffect } from "react"
import "./SpeechTest.css"

const SpeechTest = (prop) => {
    return (<div className="container">
        <div className="jar">

        </div>
        {prop.category}
        {prop.dollar}
    </div>)
}

export default SpeechTest