import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1683606510d3499dbe1d6a69b7e45587",
  },
});
