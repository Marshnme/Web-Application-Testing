import React from 'react';
import ReactDOM from 'react-dom';
import App, {addStrike, addBalls,addFoul,hits} from './App';
import { render } from "@testing-library/react";


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


//ADDSTRIKE TESTS
test("add strikes to a limit of 2", () =>{
  let actual;
  let expected;

  actual = addStrike(1);
  expected = 2;
  expect(actual).toBe(expected);
})

test("add strikes to a limit of 2", () =>{
  let actual;
  let expected;

  actual = addStrike(3);
  expected = 0;
  expect(actual).toBe(expected);
})

//ADD BALL TESTS
test("add balls to a limit of 3", () =>{
  let actual;
  let expected;

  actual = addBalls(2);
  expected = 3;
  expect(actual).toBe(expected);
})

test("add balls to a limit of 3", () =>{
  let actual;
  let expected;

  actual = addBalls(4);
  expected = 0;
  expect(actual).toBe(expected);
})



//ADD FOUL TESTS
test("add strikes to a limit of 2 then cannot add", () =>{
  let actual;
  let expected;

  actual = addFoul(2);
  expected = 2;
  expect(actual).toBe(expected);
})

test("add strikes to a limit of 2 then cannot add", () =>{
  let actual;
  let expected;

  actual = addFoul(4);
  expected = 4;
  expect(actual).toBe(expected);
})


//HITS TEST

//CANNOT TEST STATE??

// test("set balls and strikes to 0 on button press", () =>{
//   let actual;
//   let expected;

//   actual = hits(3,2);
//   expected = (0,0);
//   expect(actual).toBe(expected);
// });



test(`Player at bat text is found`, () => {
  const { getByText } = render(<App />);

  getByText(/player at bat/i);
});