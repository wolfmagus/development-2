import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {UglyThingsContextProvider} from "./UglyContext"

ReactDOM.render(
    <React.StrictMode>
        <UglyThingsContextProvider>
            <App />
        </UglyThingsContextProvider>
    </React.StrictMode>
    ,
    document.getElementById("root")
    ); 