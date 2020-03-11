import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
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

function testClick(el) {
    act( () => {
      el.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
    });
  
  const sign = document.querySelector("[data-testid='sign']")
  expect(sign).toBeDefined()
}


test("it render sign component when clicked", () => {
  act(() => {
      render(<App></App>, container);
  });
  const signlink = document.querySelector("[data-testid='signlink']")
  testClick(signlink)

  
});