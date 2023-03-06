import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Container, Table, Button} from 'react-bootstrap'
import axios from 'axios'

import "../css/list.css"

class BoardList extends Component {
    
	constructor(props) {
		super(props)
  
		this.state = {
		   page: 0,
		   count: 0,
		   perPage: 0,
		   search: null,
		   data: [], 
		}
		this.getDetail();
	 }

	 getDetail() {
		axios.get("/view.do").then((res) => {
		   const data = res.data;
		   this.setState({
			 bno: data.bno,
			 title: data.title,
			 writer: data.writer,
		   });
		  });   
	 }

    render() {
		
		const { bno, title, writer} = this.state
		
        return (
			<>
			<div className="board_header">
                <div className="name">
                    <p className="about-header-text">자유게시판</p>
                </div>
            </div>
			<Container>
                <Link to='/Insert'>
                    <Button className='write btn-secondary btn-dark text-white'>새 글쓰기</Button>
                </Link>
                <Table table-striped table-bordered table-hover>
					<thead>
						<tr>
							<th>번호</th>
							<th>제목</th>
							<th>작성자</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Link to={`/View`}>{bno}</Link>
							</td>
							<td>
								<Link to={`/View`}>{title}</Link>
							</td>
							<td>{writer}</td>
							<td>
								<Link to="/Update">
								<button className="update btn2 btn-danger" type="button">수정</button>
								</Link>
								<Link to="/Delete">
								<button className="delete btn2 btn-danger" type="button">삭제</button>
								</Link>
							</td>
						</tr>			
					</tbody>
				</Table>
			</Container>
			</>  
		);
    }
}

export default BoardList;



