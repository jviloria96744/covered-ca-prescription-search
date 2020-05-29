import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import InsurerCard from "./InsurerCard";
import { INSURER_ARRAY } from "./constants";
import PrescriptionContext from "../../context/prescription/prescriptionContext";

const InsurerCards = () => {
  const prescriptionContext = useContext(PrescriptionContext);
  const { prescriptionSearchResults } = prescriptionContext;

  if (prescriptionSearchResults === null) {
    return null;
  }
  return (
    <Grid container justify="center">
      {INSURER_ARRAY.map((insurer) => {
        return (
          <InsurerCard
            insurerName={insurer.label}
            formularyUrl={insurer.formulary_url}
            websiteUrl={insurer.website_url}
            key={insurer.key}
            supported={insurer.supported}
            dataKey={insurer.key}
          />
        );
      })}
    </Grid>
  );
};

export default InsurerCards;
