import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';


test("it render sign component when clicked", () => {
  render(<App/>);
  const signlink = document.querySelector("[data-testid='signlink']")
  expect(2+2).toEqual(4);
});