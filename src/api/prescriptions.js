import axios from "axios";

export default axios.create({
  baseURL: "https://kbsw03zzoh.execute-api.us-west-2.amazonaws.com/default",
});

// export const searchOptions = async (terms) => {
//   const res = await instance.post(
//     "/search_prescriptions",
//     JSON.stringify({ terms })
//   );
//   return res.data.Data;
// };
