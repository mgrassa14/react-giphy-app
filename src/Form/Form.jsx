import React, { useState } from "react"

export default function Form({liftGiphName}){
    const [giphName, setGiphName] = useState('')
    // const [giphRating, setGiphRating] = useState('')

    function handleChange(e){
        setGiphName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        // lifting the state up to the app component
        // liftGiphName is the funciton that was passed down from the app component
        liftGiphName(giphName)
        // clear the input!!
        setGiphName("");

    }
    return (
        // <div>This is our Form Component</div>
        <form onSubmit={handleSubmit}>
			<input id="giphName" type="text" name='giphName' value={giphName} onChange={handleChange} placeholder="type of giphy"/>
            {/* <select id="standard-select">
                <option value="g">g</option>
                <option value="pg">pg</option>
                <option value="pg-13">pg-13</option>
                <option value="r">r</option>
            </select> */}
            {/* <span class="focus"></span> */}
            <button type='Submit'>Submit</button>
        </form>
    )
}