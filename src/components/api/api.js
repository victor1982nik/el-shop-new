import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5000/api/";
axios.defaults.baseURL = "https://elshopback.onrender.com/api/";
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
