import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { testClick, singIn } from '../../utils/test.js';
import App from '../app/App';

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});



test("it render a fun gif when the cart got 0 item", () => {
  
  act(() => {
      render(<App></App>, container);
  });
  singIn()
  testClick(document.querySelector("[data-testid='cartlink']"))
  const gif = document.querySelector("[data-testid='gif']")
  expect(gif).toBeDefined()

});
