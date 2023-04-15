import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "fe3f340a9f94498a99b6bd796714dcef"
    }
})