import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import PrescriptionState from "./context/prescription/PrescriptionState";

const renderApp = () =>
  render(
    <PrescriptionState>
      <App />
    </PrescriptionState>
  );

test("App renders properly and navbar is visibile", () => {
  const { getByText } = renderApp();
  expect(
    getByText("Covered California Prescription Search")
  ).toBeInTheDocument();
});
