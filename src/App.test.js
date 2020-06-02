import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import PrescriptionState from "./context/prescription/PrescriptionState";

test("App renders properly", () => {
  const { container } = render(
    <PrescriptionState>
      <App />
    </PrescriptionState>
  );
  expect(container.firstChild.classList.contains("App")).toBe(true);
});
