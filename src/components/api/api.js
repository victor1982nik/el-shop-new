import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

axios.defaults.baseURL = backendUrl + "/api";
//axios.defaults.baseURL = "https://elshopback.onrender.com/api/";
export async function fetchShops() {
  try {
    const result = await axios.get("shops");

    return result.data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function addOrder(data) {
  try {
    const result = await axios.post("orders", data);
    return result.data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getOrders(query) {
  try {
    const result = await axios.get(`orders?email=${query}`);
    return result.data;
  } catch (e) {
    console.log(e.message);
  }
}
