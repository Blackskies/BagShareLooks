import axios from "axios";

export default axios.create({
  baseURL: `${process.env.REACT_APP_GOOGLE_IDENTITY_URL}`,
});
