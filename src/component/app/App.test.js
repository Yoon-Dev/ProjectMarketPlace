import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { testClick, singIn } from '../../utils/test.js';
import App from './App';
import Sign from '../sign/Sign.js';

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});



test("it has a router who change component basing on the url", () => {
  
  act(() => {
      render(<App></App>, container);
  });
  const homelink = document.querySelector("[data-testid='homelink']")
  expect(window.location.pathname).toBe('/sign')
  testClick(homelink)
  expect(window.location.pathname).toBe('/sign')
  singIn()
  //test sign component
  testClick(document.querySelector("[data-testid='signlink']"))
  expect(document.querySelector("[data-testid='signcomponent']")).toBeDefined()
  // test home component
  testClick(document.querySelector("[data-testid='homelink']"))
  expect(document.querySelector("[data-testid='homecomponent']")).toBeDefined()
  // test cart component
  testClick(document.querySelector("[data-testid='cartlink']"))
  expect(document.querySelector("[data-testid='cartcomponent']")).toBeDefined()
});

test("it redirect to home when sign in", () => {
  
  act(() => {
      render(<App></App>, container);
  });
  singIn()
  expect(window.location.pathname).toBe('/')

  
});