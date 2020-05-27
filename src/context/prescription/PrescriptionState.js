import React, { useReducer } from "react";
import PrescriptionContext from "./prescriptionContext";
import PrescriptionReducer from "./prescriptionReducer";
import { SEARCH_PRESCRIPTIONS } from "../types";

const PrescriptionState = (props) => {
  const initialState = {
    prescriptionSearchResults: null,
  };

  const [state, dispatch] = useReducer(PrescriptionReducer, initialState);

  // Search Prescriptions, results should come from back-end API
  const searchPrescriptions = (prescriptions) => {
    dispatch({
      type: SEARCH_PRESCRIPTIONS,
      payload: {
        "Anthem Blue Cross of California": prescriptions,
        "Blue Shield of California": prescriptions,
      },
    });
  };

  return (
    <PrescriptionContext.Provider
      value={{
        prescriptionSearchResults: state.prescriptionSearchResults,
        searchPrescriptions: searchPrescriptions,
      }}
    >
      {props.children}
    </PrescriptionContext.Provider>
  );
};

export default PrescriptionState;
