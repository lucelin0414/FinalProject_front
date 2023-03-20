import React, { Component } from 'react';
import { Container } from 'reactstrap';
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
        this.props.history.push('/CreateCafeBoard/_create');
    }

    readBoard(bno){
        this.props.history.push('/ReadCafeBoard/' + bno)
    }

    render() {
        return (
            <>
                <div className='cafe_board_header'>
                    <p className="about-header-text">카페요청게시판</p>
                </div>
                <Container>
                    <div className ="cafe_board row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목 </th>
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
                                            <td> <a className='cafe_board_click' onClick = {() => this.readBoard(board.bno)}>{board.title} </a></td>
                                            <td> {board.content} </td>
                                            <td> {board.writer} </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary" onClick={this.createBoard}>글 작성</button>
                    </div>
                </Container>
            </>
        );
    }
}

export default CafeRequest;