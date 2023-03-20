import React, { Component } from 'react';
import { Container } from 'reactstrap';
import RequestService from '../board/service/RequestService';
import '../css/createcafe.css'

class CreateCafeBoard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            bno: this.props.match.params.bno,
            writer : '',
            title: '',
            content: '',
        }

        this.changeWriter = this.changeWriter.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeContent = this.changeContent.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }
    
    changeWriter = (event) =>{
        this.setState({
            writer : event.target.value
        });
    }

    changeTitle = (event) => {
        this.setState({
            title : event.target.value
        });
    }

    changeContent = (event) =>{
        this.setState({
            content : event.target.value
        });
    }

    createBoard() {
        let board = {
            writer : this.state.writer,
            title : this.state.title,
            content : this.state.content,
        }
        console.log("board => "+ JSON.stringify(board));
        if(this.state.bno === '_create'){
            RequestService.createBoard(board)
        }else{
            RequestService.updateBoard(this.state.bno, board)
        }
        this.props.history.push('/CafeRequest');
    }

    cancel(){
        this.props.history.push('/CafeRequest');
    }

    getTitle(){
        if(this.state.bno === '_create'){
            return <div className='cafe_board_header'><p className="about-header-text">카페 요청사항 작성</p></div>
        }else{
            return <h3 className='text-center' style={{marginTop:"100px", marginBottom:"100px"}}>{this.state.bno}번째 요청사항 수정</h3>
        }
    }

    componentDidMount(){
        if (this.state.bno === '_create') {
            return
        } else {
            RequestService.getOneBoard(this.state.bno).then((res) =>{
                let board = res.data;
                console.log("board => " + JSON.stringify(board));

                this.setState({
                    title: board.title,
                    content: board.content,
                    writer: board.writer
                })
            })
        }
    }


    render() {
        return (
            <div>
                {this.getTitle()}
                <Container>
                    <div className = "row">
                        <div className = "col-md-12">
                            <form>
                                <div className = "form_create_cafe form-group">
                                    <label> 제목 </label>
                                    <input type="text" placeholder="제목을 입력해주세요" name="title" className="form-control" 
                                    value={this.state.title} onChange={this.changeTitle}/>
                                </div>
                                <div className = "form_create_cafe form-group">
                                    <label> 요청사항  </label>
                                    <textarea placeholder="요청사항을 입력해주세요" name="contents" className="form-control" 
                                    value={this.state.content} onChange={this.changeContent}/>
                                </div>
                                <div className = "form_create_cafe form-group">
                                    <label> 작성자  </label>
                                    <input placeholder="작성자를 입력해주세요" name="memberNo" className="form-control" 
                                    value={this.state.writer} onChange={this.changeWriter}/>
                                </div>
                                <br />
                                <button className="btn btn-success" onClick={this.createBoard}>제출</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>취소</button>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default CreateCafeBoard;