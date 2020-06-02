import React from "react";
import { render } from "@testing-library/react";
import PrescriptionState from "../../../context/prescription/PrescriptionState";
import PrescriptionContext from "../../../context/prescription/prescriptionContext";
import App from "../../../App";
import Search from "../Search";

//TODO Need to complete tests
test("Search renders properly", () => {
  render(
    <PrescriptionState>
      <App>
        <PrescriptionContext>
          <Search />
        </PrescriptionContext>
      </App>
    </PrescriptionState>
  );
});
