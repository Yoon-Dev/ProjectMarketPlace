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



test("it render item on api calls pretty fast", () => {
  
  act(() => {
      render(<App></App>, container);
  });
  singIn()
  testClick(document.querySelector("[data-testid='homelink']"))
  setTimeout(() => {
      const btnitems = document.querySelectorAll("[data-testclass='btn-items']")
      console.log(btnitems.length, 'BRU')
      expect(2+2).toBe(5)

  }, 2000);

});
