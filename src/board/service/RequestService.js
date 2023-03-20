import axios from 'axios';


const BOARD_API_BASE_URL = "http://localhost:9008/cafe/board"; 

class RequestService {


    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    createBoard(board){
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getOneBoard(bno){
        return axios.get(BOARD_API_BASE_URL + "/" + bno);
    }

    updateBoard(bno, board){
        return axios.put(BOARD_API_BASE_URL + "/" + bno, board);
    }

    deleteBoard(bno){
        return axios.delete(BOARD_API_BASE_URL + "/" + bno);
    }
}

export default new RequestService();
