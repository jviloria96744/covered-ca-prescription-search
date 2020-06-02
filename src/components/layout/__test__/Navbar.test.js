import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../Navbar";

test("Navbar renders correct text", () => {
  const { getByText } = render(<Navbar />);
  expect(
    getByText("Covered California Prescription Search")
  ).toBeInTheDocument();
});
