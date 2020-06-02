import React, { useState, useContext } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardHeader,
  CardContent,
  Collapse,
  IconButton,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import PrescriptionContext from "../../context/prescription/prescriptionContext";
import GenericOptions from "./GenericOptions";
import SearchBodyContent from "./SearchBodyContent";
import Spinner from "../layout/Spinner";

const Search = () => {
  const [searchedRx, setSearchedRx] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const prescriptionContext = useContext(PrescriptionContext);

  const { searchPrescriptions, rxOptions } = prescriptionContext;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchedRx.length === 0) {
      setAlertOpen(true);
    } else {
      searchPrescriptions(searchedRx);
      setSearchedRx([]);
    }
  };

  if (rxOptions.length === 0) {
    return (
      <Grid container spacing={2} justify="center">
        <Spinner />
      </Grid>
    );
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6}>
        <Card variant="outlined" raised style={{ marginTop: "10px" }}>
          <CardHeader title="Prescription Search" />
          <CardContent>
            <SearchBodyContent />
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Autocomplete
                multiple
                id="tags-standard"
                options={rxOptions}
                getOptionLabel={(option) => option.Label}
                value={searchedRx}
                onChange={(event, newValue) => {
                  setSearchedRx(newValue);
                  if (newValue.length > 0) {
                    setAlertOpen(false);
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Prescriptions"
                    placeholder="Please enter any prescriptions, e.g. Aspirin"
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
            <Collapse in={alertOpen}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setAlertOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                Please enter prescription options in the search field
              </Alert>
            </Collapse>
            <GenericOptions />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Search;
