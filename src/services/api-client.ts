import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0edefcd8aec54ab2b8ba5e1fb1c7102f",
  },
});
