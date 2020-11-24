import axios from "axios";

export default {
    getRepos: function() {
        return axios.get("/api/repos");
    }
}