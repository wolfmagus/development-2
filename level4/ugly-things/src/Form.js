import React from "react"
import {UglyThingsContextConsumer} from "./UglyContext"

function Form() {
    return(
        
        <div>
            <h1>Ugly Things Form</h1>
            <UglyThingsContextConsumer>
                               
                {(context) => {
                    return(
                        <form onSubmit={context.handleSubmit}>
                            <input
                                name = "title"
                                value = {context.title}
                                onChange = {context.handleChange}
                                placeholder = "title"
                            />
                            <input
                                name = "description"
                                value = {context.description}
                                onChange = {context.handleChange}
                                placeholder = "description"
                            />
                            <input
                                name = "imgUrl"
                                value = {context.imgUrl}
                                onChange = {context.handleChange}
                                placeholder = "imgUrl"
                            />

                            <button> Submit </button>
                    </form>)
                }
        }
            
            </UglyThingsContextConsumer>
        </div>
    )
}

export default Form