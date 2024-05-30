import axios from "axios";

import Config from "../config/config";

export async function getPosts ():Promise<{
    userId: number;
    id: number;
    title: string;
    body: string;
}[]>
 {
    const response = await  axios.get(`${Config.base_url}/posts`,);
    return response.data;
}

 