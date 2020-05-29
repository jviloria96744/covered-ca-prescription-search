import React, { useContext, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import Navbar from "./components/layout/Navbar";
import Search from "./components/prescriptions/Search";
import CoverageLimits from "./components/insurers/CoverageLimits";
import InsurerCard from "./components/insurers/InsurerCard";
import { INSURER_ARRAY } from "./components/insurers/constants";
import PrescriptionContext from "./context/prescription/prescriptionContext";

import axios from "axios";

const App = () => {
  const prescriptionContext = useContext(PrescriptionContext);
  const { prescriptionSearchResults } = prescriptionContext;

  const searchOptions = async () => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const endpoint =
      "https://kbsw03zzoh.execute-api.us-west-2.amazonaws.com/default/search_prescriptions";
    const res = await axios.post(
      endpoint,
      JSON.stringify({
        terms: ["montelukast", "atorvastatin"],
      }),
      config
    );
    console.log(res);
  };

  useEffect(() => {
    searchOptions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2} justify="space-around">
              <Search />
              <CoverageLimits />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {prescriptionSearchResults && (
              <Grid container justify="space-around" spacing={2}>
                {INSURER_ARRAY.map((insurer) => (
                  <InsurerCard
                    insurerName={insurer.label}
                    formularyUrl={insurer.formulary_url}
                    key={insurer.label}
                    prescriptions={prescriptionSearchResults[insurer.label]}
                  />
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
