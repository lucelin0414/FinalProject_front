import axios from 'axios';


const BOARD_API_BASE_URL = "http://localhost:9008/cafe/board"; 

class RequestService {


    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }
}

export default new RequestService();
