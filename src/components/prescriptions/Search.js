import React from "react";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";
import GenericOptions from "./GenericOptions";
import SearchForm from "./SearchForm";
import SearchBodyContent from "./SearchBodyContent";

/**
 *
 * Component that handles user search functionality of application
 */

const Search = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={8}>
        <Card variant="outlined" raised style={{ marginTop: "10px" }}>
          <CardHeader title="Prescription Search" />
          <CardContent>
            <SearchBodyContent />
            <SearchForm />
            <GenericOptions />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Search;
