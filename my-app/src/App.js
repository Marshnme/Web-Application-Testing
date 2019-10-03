import React, {useState} from 'react';
import './App.css';
import Display from "./components/Display"
import Dashboard from "./components/Dashboard"

export const addStrike = (strikes) => {
  if(strikes >= 2){
    return (strikes = 0);
  }else return strikes + 1;
  };

  export const addBalls = (currentBall) => {
    if(currentBall >= 3){
      return (currentBall = 0 );
    }else return currentBall + 1;
    };

    export const addFoul = (currentStrike) => {
      if(currentStrike < 2){
        return currentStrike + 1;
      }else return currentStrike;
    };



      export const hits = (strikes, balls) => {
        return (strikes(0), balls(0));
        };
      


function App()  {
const [strikes, setStrikes] = useState(0);
const [balls, setBalls] = useState(0);

  
  return (
    <div className="App">
      <div>
        <Display balls={balls} setBalls={setBalls} strikes={strikes} setStrikes={setStrikes}/>
      </div>
      <div>
        <Dashboard setBalls={setBalls} balls={balls} strikes={strikes} setStrikes={setStrikes}/>
      </div>
    </div>
  );
}

export default App;
