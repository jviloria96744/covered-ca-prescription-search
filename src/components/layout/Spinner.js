import React, { Fragment } from "react";
import spinner from "./spinner.gif";

/**
 * Basic Spinner component for API call wait times
 */
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
      >
    </Fragment>
  );
};

export default Spinner;
