import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import InsurerCard from "./InsurerCard";
import { INSURER_OBJECT } from "./constants";
import PrescriptionContext from "../../context/prescription/prescriptionContext";

const InsurerCards = () => {
  const prescriptionContext = useContext(PrescriptionContext);
  const { prescriptionSearchResults } = prescriptionContext;

  if (prescriptionSearchResults === null) {
    return null;
  }
  return (
    <Grid container justify="space-around" spacing={2}>
      {Object.keys(prescriptionSearchResults).map((insurer) => {
        const insurerObject = INSURER_OBJECT[insurer];
        return (
          <InsurerCard
            insurerName={insurerObject.label}
            formularyUrl={insurerObject.formulary_url}
            key={insurerObject.label}
            prescriptions={prescriptionSearchResults[insurer]}
          />
        );
      })}
    </Grid>
  );
};

export default InsurerCards;
