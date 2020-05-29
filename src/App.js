import React, { useContext, useEffect, Fragment } from "react";
import { Container, Grid } from "@material-ui/core";
import Navbar from "./components/layout/Navbar";
import Search from "./components/prescriptions/Search";
import CoverageLimits from "./components/insurers/CoverageLimits";
import InsurerCards from "./components/insurers/InsurerCards";
import PrescriptionContext from "./context/prescription/prescriptionContext";
import Spinner from "./components/layout/Spinner";

const App = () => {
  const prescriptionContext = useContext(PrescriptionContext);
  const { getPrescriptionOptions, rxOptions } = prescriptionContext;

  useEffect(() => {
    getPrescriptionOptions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2} justify="space-around">
              {rxOptions.length > 0 ? (
                <Fragment>
                  <Search rxOptions={rxOptions} />
                  <CoverageLimits />
                </Fragment>
              ) : (
                <Spinner />
              )}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <InsurerCards />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
