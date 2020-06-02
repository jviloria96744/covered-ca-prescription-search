import axios from "axios";

// Creating base axios object used to make the api calls
export default axios.create({
  baseURL: "https://kbsw03zzoh.execute-api.us-west-2.amazonaws.com/default",
});
