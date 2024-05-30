import axios from "axios";

import Config from "../config/config";

 
export async function getUsers() {
    const response = await axios.get(`${Config.base_url}/users`);
    return response.data;
}

 