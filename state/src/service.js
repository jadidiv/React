import axios from "axios";

const SERVER_URL = "http://localhost:9000";

export async function getPosts() {
    const url = `${SERVER_URL}/posts`;
    try{
        let response = await axios.get(url);
        return response;
    }catch(error) {
        console.error(error);
    }
}