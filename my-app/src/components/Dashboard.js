import React from 'react';
import {addStrike, addBalls, addFoul, hits} from "../App"



const Dashboard = (props) => {


    return(
        <>
            <div>
                <button onClick={() => props.setStrikes(addStrike(props.strikes,props.setStrikes,props.setBalls)) }>Strike</button>
            </div>
            <div>
                <button onClick={() => props.setBalls(addBalls(props.balls,props.setStrikes,))}>Ball</button>
            </div>
            <div>
                <button onClick={() => props.setStrikes(addFoul(props.strikes))}>Foul</button>
            </div>
            <div>
                <button onClick={() => hits(props.setStrikes, props.setBalls)}>Hit</button>
            </div>
        </>
    )
}



export default Dashboard