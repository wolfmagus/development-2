import React, {useState, useEffect} from "react"

export default function AddBountyForm(props){
    const initInputs =
     { 
        firstName: props.firstName || "", 
        lastName: props.lastName || "", 
        price: props.price || 0, 
        type: props.type || "", 
        living: props.living || false
    }
    const [inputs, setInputs] = useState(initInputs)

    // useEffect(()=> {
    //     getBounties()
    // }, [])//fires once when there is no data that changes placed in the square brackets

    function handleChange(e){
        const { name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))//return new objects with previous input values
                                                                //and update the appropriate one with the appropriate value
                                                                //Spread in title once genre is being entered 
                                                                // update the input with the [name] that matches with the
                                                                //value entered
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"/>
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"/>

            <input
                type="number"
                name="price"
                value={inputs.price}
                onChange={handleChange}
                placeholder="Bounty Price"
                step="1000"
                min="0"/>

            <select name="type" value={inputs.type} onChange={handleChange}>
                <option value="reset">- Jedi or Sith -</option>
                <option value="jedi">Jedi</option>
                <option value="sith">Sith</option>
            </select>

            <select name="living" value={inputs.living} onChange={handleChange}>
                <option value="reset">- Life Status -</option>
                <option value="true">Alive</option>
                <option value="false">Dead</option>
            </select>

            <button>{props.btnText}</button>
        </form>
    )
}