import axios from "axios";
import { useQuery } from "react-query";

async function fetchUser() {
  try {
    const response = axios.get("/user");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default function getUser() {
  return useQuery(["user"], fetchUser);
}
