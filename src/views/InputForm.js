import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import "../css/board.css"
class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bno: "",
      title: "",
      content: "",
      writer: "",
      crud: props.match.params.crud,
    };
    if (this.state.crud !== "Insert") {
      this.getData();
    }
  }

  createHeaderName() {
    const crud = this.state.crud;
    if (crud === "View") {
      return "조회";
    } else if (crud === "Update") {
      return "수정";
    } else if (crud === "Delete") {
      return "삭제";
    } else if (crud === "Insert") {
      return "새 글쓰기";
    }
  }

  createCrudBtn() {
    const crud = this.state.crud;
    console.log(crud);
    if (crud === "View") {
      return null;
    } else {
      const crudName =
      crud === "Update" ? "수정" : crud === "Insert" ? "등록" : "삭제";
      return (
        <button className="btn2 btn-secondary" onClick={() => this.crud()}> {crudName}</button>
      );
    }
  }

  crud() {
    const { bno, title, content, writer, crud } = this.state;

    let crudType = "";

    if (crud === "Update") {
      crudType = "/updateProcess.do";
    } else if (crud === "Delete") {
      crudType = "/deleteProcess.do";
    } else if (crud === "Insert") {
      crudType = " /insertProcess.do";
    } else if (crud === "View") {
      return null;
    }

    let form = new FormData();
    form.append("content", content);
    form.append("title", title);
    form.append("writer", writer);
    if (crud !== "Insert") {
      form.append("bno", bno);
    }

    axios
      .post(crudType, form)
      .then((res) => {
        alert("요청이 처리되었습니다");
        this.props.history.push("/BoardList");
      })
      .catch((err) => alert("error: " + err.response.data.msg));
  }

  getData() {
    axios.get("/view.do").then((res) => {
      const data = res.data;
      this.setState({
        bno: data.bno,
        title: data.title,
        writer: data.writer,
        content: data.content,
      });
    });
  }

  createBnoTag() {
    const bno = this.state.bno;
    const crud = this.state.crud;
    if (crud !== "Insert") {
      return <input type="hidden" value={bno} readOnly />;
    } else {
      return null;
    }
  }

  render() {
    const title = this.state.title;
    const content = this.state.content;
    const writer = this.state.writer;

    return (
      <>
        <div className="board_header">
          <div className="name">
            <p className="about-header-text">{this.createHeaderName()}</p>
          </div>
        </div>      
        <Container>
          {/* <h1 className="header"> {this.createHeaderName()}</h1> */}
          {this.createBnoTag()}
          <h3 className="header1">
          <font color="red">*&nbsp;</font>
          제목
          </h3>
          <div className="com-md-11">
          <input className="form-control"
            type="text" name="title" id="title" required="required" maxLength={50}
            value={title}
            onChange={(event) =>
              this.setState({ title: event.target.value })
            }
          />
          </div>
          <br />

          <h3 className="header1">
          <font color="red">*&nbsp;</font>
          작성자
          </h3>
          <div className="com-md-11">
          <input className="form-control"
            type="text" name="writer" id="writer" required="required" maxLength={50}
            value={writer}
            onChange={(event) =>
              this.setState({ writer: event.target.value })
            }
          />
          </div>
          <br />

          <h3 className="header1">
          <font color="red">*&nbsp;</font>
          내용
          </h3>
          <textarea className="form-control" name="content"
          id="content" cols={10} rows={15} required="required"
          placeholder="본문을 입력해 주세요"
            value={content}
            onChange={(event) =>
              this.setState({ content: event.target.value })
            }
          ></textarea>
          <br /> <br />
          {this.createCrudBtn()}
          <Link to="/BoardList">
            <button className="btn2 btn-danger" type="button">목록</button>
          </Link>
        </Container>  
      </>
    );
  }
}

export default InputForm;