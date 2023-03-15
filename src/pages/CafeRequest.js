import React, { Component } from 'react';
import RequestService from '../board/service/RequestService';

class CafeRequest extends Component {
    constructor(props){
        super(props)

        this.state ={
            board: []
        }
    }

    componentDidMount(){
        RequestService.getBoards().then((res) =>{
            this.setState({ board: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Boards List</h2>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>타이틀 </th>
                                <th>글 내용 </th>
                                <th>작성자 </th>
                                <th>작성일 </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.board.map(
                                    board => 
                                    <tr key = {board.bno}>
                                        <td> {board.bno} </td>
                                        <td> {board.title} </td>
                                        <td> {board.content} </td>
                                        <td> {board.writer} </td>
                                        <td> {board.regdate} </td>
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