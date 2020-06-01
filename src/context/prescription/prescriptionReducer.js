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
      };
    case SEARCH_PRESCRIPTIONS:
      return {
        ...state,
        prescriptionSearchResults: action.payload.searchResults,
        genericOptions: action.payload.genericResults,
        loadingSearchResults: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loadingSearchResults: true,
      };
    default:
      return state;
  }
};
