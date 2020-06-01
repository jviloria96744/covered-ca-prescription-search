import React, { useReducer } from "react";
import PrescriptionContext from "./prescriptionContext";
import PrescriptionReducer from "./prescriptionReducer";
import {
  SEARCH_PRESCRIPTIONS,
  GET_PRESCRIPTION_OPTIONS,
  SET_LOADING,
} from "../types";
import prescriptionApi from "../../api/prescriptions";

const PrescriptionState = (props) => {
  const initialState = {
    prescriptionSearchResults: null,
    rxOptions: [],
    loadingSearchResults: null,
    genericOptions: null,
  };

  const [state, dispatch] = useReducer(PrescriptionReducer, initialState);

  const getPrescriptionOptions = async () => {
    const res = await prescriptionApi.get("/get_prescription_options");
    dispatch({
      type: GET_PRESCRIPTION_OPTIONS,
      payload: res.data["Prescription Options"],
    });
  };

  // Search Prescriptions, results should come from back-end API
  const searchPrescriptions = async (prescriptions) => {
    setLoading();
    const terms = prescriptions.map((prescription) => prescription.Value);

    const res = await prescriptionApi.post(
      "/search_prescriptions",
      JSON.stringify({ terms })
    );

    const brandNamePrescriptions = terms.filter(
      (term) => term === term.toUpperCase()
    );
    let genericResults = null;
    if (brandNamePrescriptions.length > 0) {
      genericResults = brandNamePrescriptions.map((term) => {
        return {
          prescription: term,
          genericOptions: res.data.generics[term],
        };
      });
    }

    dispatch({
      type: SEARCH_PRESCRIPTIONS,
      payload: { searchResults: res.data.Data, genericResults: genericResults },
    });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <PrescriptionContext.Provider
      value={{
        prescriptionSearchResults: state.prescriptionSearchResults,
        searchPrescriptions: searchPrescriptions,
        loadingSearchResults: state.loadingSearchResults,
        genericOptions: state.genericOptions,
        rxOptions: state.rxOptions,
        getPrescriptionOptions: getPrescriptionOptions,
      }}
    >
      {props.children}
    </PrescriptionContext.Provider>
  );
};

export default PrescriptionState;
