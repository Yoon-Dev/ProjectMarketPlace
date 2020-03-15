import { act } from "react-dom/test-utils";
import { fireEvent } from "@testing-library/react";
import { Breadcrumbs } from "@material-ui/core";



export function testClick(el) {
    act( () => {
      el.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
    });
}

export function singIn(idvalue='bru', passvalue='pass'){
  const identifiant = document.querySelector("[name='identifiant']")
  const pass = document.querySelector("[name='pass']")
  const btn = document.querySelector("[data-testid='btn-sign']")


  fireEvent.change(identifiant, {target: { value: idvalue } })
  fireEvent.change(pass, {target: { value: passvalue } })
  act( () => {
    btn.dispatchEvent(
      new MouseEvent("click", { bubbles: true })
    );
  });
}
