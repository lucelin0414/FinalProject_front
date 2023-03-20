import React, { Component } from 'react';
import { Container, FormGroup, FormText, Input, Label, Table } from 'reactstrap';
import RequestService from '../board/service/RequestService';

class ReadCafeBoard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            bno : this.props.match.params.bno,
            board : []
        }
    }
    
    componentDidMount(){
        RequestService.getOneBoard(this.state.bno).then(res =>{
            this.setState({board: res.data});
        });
    }

    goToList(){
        this.props.history.push('/CafeRequest');
    }

    updateBoard(){
        let bno = this.state.bno;
        this.props.history.push('/CreateCafeBoard/' + bno)
    }

    deleteView = async function() {
        if (window.confirm("정말로 글을 삭제하시겠습니까?\n삭제된 글은 복구하실 수 없습니다.")) {
            RequestService.deleteBoard(this.state.bno).then(res => {
                console.log("delete result => " + JSON.stringify(res));
                this.props.history.push('/CafeRequest');
            });
        }; 
    }

    render() {
        return (
            <>
            <div className='cafe_board_header'>
                <p className="about-header-text">카페요청 조회</p>
            </div>
            <Container>
                <h3>글 번호</h3>
                <input class="form-control" type="text" value={this.state.board.bno} aria-label="readonly input example" readonly /><br /><br />
                <h3>제목</h3>
                <input class="form-control" type="text" value={this.state.board.title} aria-label="readonly input example" readonly /><br /><br />
                <h3>요청 내용</h3>
                <input class="form-control" type="text" value={this.state.board.content} aria-label="readonly input example" readonly /><br /><br />
                <h3>작성자</h3>
                <input class="form-control" type="text" value={this.state.board.writer} aria-label="readonly input example" readonly /><br /><br />
                <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                <button className="btn btn-success" onClick={this.updateBoard.bind(this)} style={{marginLeft:"10px"}}>수정</button>
                <button className="btn btn-danger" onClick={this.deleteView.bind(this)} style={{marginLeft:"10px"}}>삭제</button>
            </Container>
            </>
        );
    }
}

export default ReadCafeBoard;