import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { singIn } from '../../utils/test.js';
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



test("it has 2 icon when their is no connection", () => {
  
  act(() => {
      render(<App></App>, container);
  });

  const icons = document.querySelectorAll("[data-testclass='icon-navbar']")
  expect(icons.length).toBe(2)

});

test("it has 3 icon when connected", () => {
  
    act(() => {
        render(<App></App>, container);
    });

    singIn()
    const icons = document.querySelectorAll("[data-testclass='icon-navbar']")
    expect(icons.length).toBe(3) 

});
