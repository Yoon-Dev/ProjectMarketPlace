import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { testClick, singIn } from '../../utils/test.js';
import { fireEvent } from "@testing-library/react";
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



test("redirect to '/sign' when an account is created and it create an account with which you can connect (email and username)", () => {
  
  act(() => {
      render(<App></App>, container);
  });
  testClick(document.querySelector("[data-testid='signup']"))
  const email = document.querySelector("[name='email']")
  const username = document.querySelector("[name='username']")
  const pass = document.querySelector("[name='pass']")

  fireEvent.change(email, {target: { value: "toto@gmail.com" } })
  fireEvent.change(username, {target: { value: "toto" } })
  fireEvent.change(pass, {target: { value: "pass" } })

  //redirection when account created
  testClick(document.querySelector("[data-testid='signup-btn']"))
  expect(window.location.pathname).toBe('/sign')
  //connetion with email   
  singIn('toto@gmail.com', 'pass')
  expect(window.location.pathname).toBe('/')
  //connetion with username  
  testClick(document.querySelector("[data-testid='signlink']"))
  testClick(document.querySelector("[data-testid='logout-btn']"))
  singIn('toto', 'pass')
  expect(window.location.pathname).toBe('/')

});



