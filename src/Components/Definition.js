import React from "react"

export default function Definition(props) {

    const definitionsArray = props.definitions.map((def) => {
        return <li className="definition" key={def.definition}>{def.definition}</li>
    })


    return (
        <div>
            <h3 className="part-of-speech">{props.partOfSpeech}</h3>
            <ol>
                {definitionsArray}
            </ol>
        </div>
    )
}