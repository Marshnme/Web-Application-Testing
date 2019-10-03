import React from 'react';
import {addStrike, addBalls, addFoul} from "../App"



const Dashboard = (props) => {


    return(
        <>
            <div>
                <button onClick={() => props.setStrikes(addStrike(props.strikes,props.balls)) }>Strike</button>
            </div>
            <div>
                <button onClick={() => props.setBalls(addBalls(props.balls,props.strikes,props.setBalls))}>Ball</button>
            </div>
            <div>
                <button onClick={() => {}}>Foul</button>
            </div>
            <div>
                <button onClick={() => {}}>Hit</button>
            </div>
        </>
    )
}



export default Dashboard