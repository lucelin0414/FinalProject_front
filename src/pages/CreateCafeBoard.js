import React, { Component } from 'react';
import RequestService from '../board/service/RequestService';

class CreateCafeBoard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
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
        RequestService.createBoard(board).then(res => {
            this.props.history.push('/CafeRequest');
        });
    }

    cancel(){
        this.props.history.push('/CafeRequest');
    }


    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">카페 요청 건의글</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> 제목 </label>
                                        <input type="text" placeholder="title" name="title" className="form-control" 
                                        value={this.state.title} onChange={this.changeTitle}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 요청사항  </label>
                                        <textarea placeholder="contents" name="contents" className="form-control" 
                                        value={this.state.content} onChange={this.changeContent}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 작성자  </label>
                                        <input placeholder="memberNo" name="memberNo" className="form-control" 
                                        value={this.state.writer} onChange={this.changeWriter}/>
                                    </div>
                                    <br />
                                    <button className="btn btn-success" onClick={this.createBoard}>제출</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>취소</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCafeBoard;