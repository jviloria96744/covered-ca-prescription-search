import { SEARCH_PRESCRIPTIONS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PRESCRIPTIONS:
      return {
        ...state,
        prescriptionSearchResults: action.payload,
      };
    default:
      return state;
  }
};
