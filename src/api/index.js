import axios from "../utils/request";
import path from "./path"

const api = {
    getData() {
        return axios.get(path.baseUrl+ path.admin)
    }
}

export default api;