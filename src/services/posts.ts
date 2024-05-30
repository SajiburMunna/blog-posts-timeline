import axios from "axios";

import Config from "../config/config";

export async function getPosts(): Promise<Posts[]> {
  const response = await axios.get(`${Config.base_url}/posts`);
  return response.data;
}
