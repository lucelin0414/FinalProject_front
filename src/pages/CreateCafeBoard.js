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
                            <h3 className="text-center">새글을 작성해주세요</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Title </label>
                                        <input type="text" placeholder="title" name="title" className="form-control" 
                                        value={this.state.title} onChange={this.changeTitle}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Contents  </label>
                                        <textarea placeholder="contents" name="contents" className="form-control" 
                                        value={this.state.content} onChange={this.changeContent}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> writer  </label>
                                        <input placeholder="memberNo" name="memberNo" className="form-control" 
                                        value={this.state.writer} onChange={this.changeWriter}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.createBoard}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
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