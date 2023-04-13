import React from 'react'

function Card2(props) {
    return (

        <div className='cards-design'>
            <div className='App-card'>


                <h4> {props.title}</h4>
                <p> {props.description}</p>
                <button onClick={props.changeTitle}>  Change title</button>
            </div>
        </div>
    )
}

Card2.defaultProps = {
    title: "hey there",
    description: "i'm default value",
    changeTitle: () => { }
}

export default Card2;