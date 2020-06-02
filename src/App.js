import React from "react";
import { Container, Grid } from "@material-ui/core";
import Navbar from "./components/layout/Navbar";
import Search from "./components/prescriptions/Search";
import InsurerCards from "./components/insurers/InsurerCards";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Search />
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
