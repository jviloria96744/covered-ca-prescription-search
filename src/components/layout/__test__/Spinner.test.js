import React from "react";
import { render } from "@testing-library/react";
import Spinner from "../Spinner";

test("Unit test on Spinner layout component rendering proper image", () => {
  const { getByAltText } = render(<Spinner />);
  expect(getByAltText("Loading...")).toHaveAttribute("src", "spinner.gif");
});
