import axios from "axios";

const TRANSACTIONS_BASE_URL = "http://localhost:8080/api/v1";

const API = {
  session: axios.create({
    baseURL: TRANSACTIONS_BASE_URL,
  }),
  image: axios.create({
    baseURL: TRANSACTIONS_BASE_URL,
  }),
  pdf: axios.create({
    baseURL: TRANSACTIONS_BASE_URL,
  }),
};

export default API;