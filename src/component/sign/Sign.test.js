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



test("it render a logout btn", () => {
  
  act(() => {
      render(<App></App>, container);
  });
  singIn()
  testClick(document.querySelector("[data-testid='signlink']"))
  const logoutbtn = document.querySelector("[data-testid='logout-btn']")
  expect(logoutbtn).toBeDefined()

});

test("it redirect to signup component when click on 'Créer un compte'", () => {
  
    act(() => {
        render(<App></App>, container);
    });
    testClick(document.querySelector("[data-testid='signup']"))
    expect(window.location.pathname).toBe('/signup')
  
  });


