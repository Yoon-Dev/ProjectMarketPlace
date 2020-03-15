import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { testClick, singIn } from '../../utils/test.js';
import pretty from "pretty";
import renderer from 'react-test-renderer';
import Item from './Item';
import { Autorization } from '../../utils/Autorization.js';

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
})


afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});



test("it display data correctly", () => {
  act(() => {
    render(      
    <Autorization>
      <Item key={1} id={1} nom="item test" url="https://jestjs.io/docs/en/tutorial-react" />
    </Autorization>, container);
  });
    const name = document.querySelector("[data-testid='item-name']")
    const id = document.querySelector("[data-testid='item-id']")
    const img = document.querySelector("[data-testid='item-img']")
    // get the correct name
    expect(name.textContent).toBe("item test")
    // correct id
    expect(id.getAttribute('id')).toBe("1")
    //  correct url
    expect(img.getAttribute('src')).toBe("https://jestjs.io/docs/en/tutorial-react")

  });

test("it match snapshot", () => {

    const component = renderer.create(
      <Autorization>
        <Item key={1} id={1} nom="item test" url="https://jestjs.io/docs/en/tutorial-react" />
      </Autorization>
    );
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
