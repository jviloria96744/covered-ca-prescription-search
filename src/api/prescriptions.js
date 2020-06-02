import axios from "axios";

// Creating base axios object used to make the api calls
export default axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});
