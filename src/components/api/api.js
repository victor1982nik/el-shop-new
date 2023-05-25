import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

export async function fetchShops() {
  try {
    //console.log("In fetch");
    const result = await axios.get("shops");
    //console.log("result", result);
    return result.data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function addOrder(data) {
  //const body = { values: { title, text } };
  try {
    const result = await axios.post("/orders", data);
    return result.data;
  } catch (e) {
    console.log(e.message);
  }
}
