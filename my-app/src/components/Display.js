import React from 'react';



const Display = (props) => {
    return(
        <>
        <div>
            <div>Balls: {props.balls}</div>
        </div>
        <div>
            <div>Strikes: {props.strikes}</div>
        </div>
        </>
    )
}



export default Display