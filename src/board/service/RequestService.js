import axios from 'axios';

// Springboot 서버와 연결할 주소 URL
const BOARD_API_BASE_URL = "http://localhost:9008/cafe/board"; 

class RequestService {

    // 글 조회 기능을 위한 axios 통신
    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    // 글 생성 기능을 위한 axios 통신
    createBoard(board){
        return axios.post(BOARD_API_BASE_URL, board);
    }

    // 글 상세 조회을 위한 axios 통신
    getOneBoard(bno){
        return axios.get(BOARD_API_BASE_URL + "/" + bno);
    }

    // 글 수정 기능을 위한 axios 통신
    updateBoard(bno, board){
        return axios.put(BOARD_API_BASE_URL + "/" + bno, board);
    }

    // 글 삭제 기능을 위한 axios 통신
    deleteBoard(bno){
        return axios.delete(BOARD_API_BASE_URL + "/" + bno);
    }
}

export default new RequestService();
