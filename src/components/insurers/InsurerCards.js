import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import InsurerCard from "./InsurerCard";
import { INSURER_ARRAY } from "./constants";
import Spinner from "../layout/Spinner";
import PrescriptionContext from "../../context/prescription/prescriptionContext";

const InsurerCards = () => {
  const prescriptionContext = useContext(PrescriptionContext);
  const { loadingSearchResults } = prescriptionContext;

  if (loadingSearchResults === null) {
    return null;
  } else if (loadingSearchResults) {
    return <Spinner />;
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
