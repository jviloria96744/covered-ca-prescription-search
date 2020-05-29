import {
  SEARCH_PRESCRIPTIONS,
  SET_LOADING,
  GET_PRESCRIPTION_OPTIONS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PRESCRIPTION_OPTIONS:
      return {
        ...state,
        rxOptions: action.payload,
        loadingOptions: false,
      };
    case SEARCH_PRESCRIPTIONS:
      return {
        ...state,
        prescriptionSearchResults: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loadingOptions: true,
      };
    default:
      return state;
  }
};
