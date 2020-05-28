import React, { useState, useContext, useEffect } from "react";
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
import axios from "axios";
import PrescriptionContext from "../../context/prescription/prescriptionContext";

const Search = () => {
  const [searchedRx, setSearchedRx] = useState([]);
  const [rxOptions, setRxOptions] = useState([]);
  const prescriptionContext = useContext(PrescriptionContext);

  const getOptions = async () => {
    const endpoint =
      "https://kbsw03zzoh.execute-api.us-west-2.amazonaws.com/default/get_prescription_options";
    const res = await axios.get(endpoint);
    setRxOptions(res.data["Prescription Options"]);
  };

  useEffect(() => {
    getOptions();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    prescriptionContext.searchPrescriptions(searchedRx);

    //console.log(searchedRx);
    setSearchedRx([]);
  };

  return (
    <Grid item xs={4}>
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
  );
};

export default Search;
