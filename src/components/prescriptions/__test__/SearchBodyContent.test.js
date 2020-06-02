import React from "react";
import { render } from "@testing-library/react";
import SearchBodyContent from "../SearchBodyContent";

test("Body of Search Card renders Covered CA link properly", () => {
  const { getByText } = render(<SearchBodyContent />);
  expect(getByText("Covered CA*")).toHaveAttribute(
    "href",
    "https://www.coveredca.com/"
  );
});

test("Body of Search Card renders Github link properly", () => {
  const { getByText } = render(<SearchBodyContent />);
  expect(getByText("open project")).toHaveAttribute(
    "href",
    "https://github.com/jviloria96744/covered-ca-prescription-backend"
  );
});
