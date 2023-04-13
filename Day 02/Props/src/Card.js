import React from 'react'

function Card(props) {
    return (

        <div className='cards-design'>
            <div className='App-card'>

                {/* passing the data without props */}
                {/* <h4>Hey Everyone</h4> 
        <p> let's learn props</p>  */}


                {/* Passing the data with Props  */}
                <h4> {props.title}</h4>
                <p> {props.description}</p>
            </div>
        </div>
    )
}

Card.defaultProps = {
    title: "hey there",
    description: "i'm default value"
}

export default Card;