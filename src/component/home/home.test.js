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



test("it render a custom title", () => {
  
  act(() => {
      render(<App></App>, container);
  });
  singIn()
  testClick(document.querySelector("[data-testid='homelink']"))
  const title = document.querySelector("[data-testid='title']")
  expect(title.innerHTML).toBe("Bienvenue bru, faite de bonne course")
  
});
