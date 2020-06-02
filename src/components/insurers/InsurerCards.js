import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import InsurerCard from "./InsurerCard";
import NotSupportedCard from "./NotSupportedCard";
import { INSURER_ARRAY } from "./constants";
import Spinner from "../layout/Spinner";
import PrescriptionContext from "../../context/prescription/prescriptionContext";

/**
 *
 * Component for displaying all cards, both tool-supported insurers and the card that lists all non-supported insurers
 */

const InsurerCards = () => {
  const prescriptionContext = useContext(PrescriptionContext);
  const { loadingSearchResults } = prescriptionContext;

  if (loadingSearchResults === null) {
    return null;
  } else if (loadingSearchResults) {
    return <Spinner />;
  }

  const supportedInsurers = INSURER_ARRAY.filter(
    (insurer) => insurer.supported
  );
  const notSupportedInsurers = INSURER_ARRAY.filter(
    (insurer) => !insurer.supported
  );
  return (
    <Grid container justify="center">
      {supportedInsurers.map((insurer) => {
        return (
          <InsurerCard
            insurerName={insurer.label}
            formularyUrl={insurer.formulary_url}
            websiteUrl={insurer.website_url}
            key={insurer.key}
            dataKey={insurer.key}
          />
        );
      })}
      <NotSupportedCard notSupportedInsurers={notSupportedInsurers} />
    </Grid>
  );
};

export default InsurerCards;
