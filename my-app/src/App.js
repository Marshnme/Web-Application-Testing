import React, {useState} from 'react';
import './App.css';
import Display from "./components/Display"
import Dashboard from "./components/Dashboard"

export const addStrike = currentStrike => {
  if(currentStrike >= 2){
    return 0;
  }else return currentStrike + 1;
  };

  export const addBalls = (currentBall, strikes,setBalls) => {
    if(currentBall >= 3){
      return 0;
    }else if(strikes >= 2){
      return setBalls(0)
    }else return currentBall + 1;
    };

    export const addFoul = currentStrike => {
      if(currentStrike >= 2){
        return 0;
      }else return currentStrike + 1;
      };

      export const addHit = currentStrike => {
        if(currentStrike >= 2){
          return 0;
        }else return currentStrike + 1;
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
