import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PrescriptionState from "./context/prescription/PrescriptionState";

ReactDOM.render(
  <PrescriptionState>
    <App />
  </PrescriptionState>,
  document.getElementById("root")
);
