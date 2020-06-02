import React, { Fragment, useContext } from "react";
import { Typography } from "@material-ui/core";
import PrescriptionContext from "../../context/prescription/prescriptionContext";

/**
 *
 * Component to render generic prescription alternatives when a brand name prescription is searched
 */

const GenericOptions = () => {
  const prescriptionContext = useContext(PrescriptionContext);
  const { genericOptions, loadingSearchResults } = prescriptionContext;

  const getOptionLength = (options) => {
    console.log(options);
    if (!options) {
      return 0;
    }
    let optionLength = 0;
    options.map((prescription) => {
      optionLength = optionLength + prescription.genericOptions.length;
      return null;
    });
    return optionLength;
  };

  if (
    !genericOptions ||
    loadingSearchResults ||
    getOptionLength(genericOptions) === 0
  ) {
    return null;
  }

  return (
    <Fragment>
      <Typography variant="body1" component="p">
        Below are alternative generic prescriptions that you may also wish to
        search for
      </Typography>
      <ul>
        {genericOptions.map((generic) => {
          if (generic.genericOptions.length === 0) {
            return null;
          }
          return (
            <li key={generic.prescription}>
              <Typography variant="body2">
                <strong>{generic.prescription}: </strong>{" "}
                {generic.genericOptions}
              </Typography>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default GenericOptions;
