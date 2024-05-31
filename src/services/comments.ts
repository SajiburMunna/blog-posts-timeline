import axios from "axios";

import Config from "../config/config";

export async function getComments(): Promise<Comments[]> {
  const response = await axios.get(`${Config.base_url}/comments`);
  return response.data;
}
