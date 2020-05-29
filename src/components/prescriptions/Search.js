import React, { useState, useContext } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PrescriptionContext from "../../context/prescription/prescriptionContext";
import Spinner from "../layout/Spinner";

const Search = () => {
  const [searchedRx, setSearchedRx] = useState([]);
  const prescriptionContext = useContext(PrescriptionContext);

  const { searchPrescriptions, rxOptions } = prescriptionContext;

  const handleSubmit = (e) => {
    e.preventDefault();
    searchPrescriptions(searchedRx);

    //console.log(searchedRx);
    setSearchedRx([]);
  };

  if (rxOptions.length === 0) {
    return (
      <Grid container spacing={2} justify="center">
        <Spinner />
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={6}>
        <Card variant="outlined" raised style={{ marginTop: "10px" }}>
          <CardHeader title="Prescription Search" />
          <CardContent>
            <Typography variant="body2" component="p">
              This tool searches your prescriptions across many Covered CA
              Marketplace providers to determine what Formulary Tier they fall
              under as well as any coverage restrictions that may exist
              <br />
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Autocomplete
                multiple
                id="tags-standard"
                options={rxOptions}
                getOptionLabel={(option) => option.Label}
                value={searchedRx}
                onChange={(event, newValue) => {
                  setSearchedRx(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Prescriptions"
                    placeholder="Please select any prescriptions"
                  />
                )}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{ width: "100%", marginTop: "10px" }}
              >
                Search Formularies
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Search;
