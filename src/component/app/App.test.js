import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { testClick, singIn } from '../../utils/test.js';
import App from './App';

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});



test("it render sign component when clicked on homelink and the url is /signin", () => {
  
  act(() => {
      render(<App></App>, container);
  });
  const homelink = document.querySelector("[data-testid='homelink']")
  expect(window.location.pathname).toBe('/sign')
  testClick(homelink)
  expect(window.location.pathname).toBe('/sign')

});

test("it redirect to home when sign in", () => {
  
  act(() => {
      render(<App></App>, container);
  });
  singIn()
  expect(window.location.pathname).toBe('/')

  
});