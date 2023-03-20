import React, { Component } from 'react';
import { FormGroup, FormText, Input, Label, Table } from 'reactstrap';
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

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> 요청 상세 조회</h3>
                    <div className = "card-body">
                            <div className = "row"> 
                                <FormGroup>
                                    <Label> 제목 </Label> : {this.state.board.title}
                                </FormGroup>     
                            </div>

                            <div className = "row">
                                <FormGroup>
                                    <Label> 요청 내용 </Label> : {this.state.board.content}
                                </FormGroup>
                            </div>
                            <div className = "row">
                                <FormGroup>
                                    <Label> 작성자  </Label>: {this.state.board.writer}
                                </FormGroup>
                            </div>
                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReadCafeBoard;