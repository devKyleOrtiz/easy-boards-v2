import axios from "axios";
import { useQuery } from "react-query";

async function fetchUser() {
  try {
    const response = await axios.get("/api/user");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default function getUser() {
  return useQuery(["user"], fetchUser, {
    retry: 1,
  });
}
