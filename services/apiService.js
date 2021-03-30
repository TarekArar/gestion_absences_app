import axios from "axios";
import * as SecureStore from "expo-secure-store";

// const token = await SecureStore.getItemAsync("secure_token");

let http = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer token`,
  },
});

const postLogin = (data) => http.post("/users/login");

const checkJWT = (data) => http.post("/users/checkJWT");

export { postLogin, checkJWT };
