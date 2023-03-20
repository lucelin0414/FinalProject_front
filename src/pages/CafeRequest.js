import React, { Component } from 'react';
import RequestService from '../board/service/RequestService';
import '../css/caferequest.css'

class CafeRequest extends Component {
    constructor(props){
        super(props)

        this.state ={
            board: []
        }

        this.createBoard = this.createBoard.bind(this);
    }

    componentDidMount(){
        RequestService.getBoards().then((res) =>{
            this.setState({ board: res.data});
        });
    }

    createBoard(){
        this.props.history.push('/CreateCafeBoard/');
    }

    readBoard(bno){
        this.props.history.push('/ReadCafeBoard/' + bno)
    }
s
    render() {
        return (
            <div>
                <h2 className="text-center">카페 요청 게시판</h2>
                <button className="btn_cafe_request btn btn-primary" onClick={this.createBoard}>글 작성</button>
                <div className ="cafe_board row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>타이틀 </th>
                                <th>글 내용 </th>
                                <th>작성자 </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.board.map(
                                    board => 
                                    <tr key = {board.bno}>
                                        <td> {board.bno} </td>
                                        <td> <a onClick = {() => this.readBoard(board.bno)}>{board.title} </a></td>
                                        <td> {board.content} </td>
                                        <td> {board.writer} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CafeRequest;