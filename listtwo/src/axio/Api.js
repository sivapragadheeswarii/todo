import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000/api", // Backend URL
});

export default Api;
