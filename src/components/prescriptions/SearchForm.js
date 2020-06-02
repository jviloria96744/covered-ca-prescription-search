import React, { useState, useContext, useEffect, Fragment } from "react";
import { TextField, Button, Collapse, IconButton } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PrescriptionContext from "../../context/prescription/prescriptionContext";
import Skeleton from "@material-ui/lab/Skeleton";

/**
 *
 * Component that handles the app search functionality.  It contains the form and submit handler as well as an alert in the case of an empty submission
 */

const SearchForm = () => {
  const [searchedRx, setSearchedRx] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const prescriptionContext = useContext(PrescriptionContext);

  const {
    searchPrescriptions,
    rxOptions,
    getPrescriptionOptions,
  } = prescriptionContext;

  useEffect(() => {
    getPrescriptionOptions();
    // eslint-disable-next-line
  }, []);

  if (rxOptions.length === 0) {
    return (
      <Fragment>
        <br />
        <br />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Fragment>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchedRx.length === 0) {
      setAlertOpen(true);
    } else {
      searchPrescriptions(searchedRx);
      setSearchedRx([]);
    }
  };

  return (
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
    </form>
  );
};

export default SearchForm;
