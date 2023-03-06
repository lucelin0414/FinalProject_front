import axios from "axios";
import React,{useEffect, useState} from "react";
import { Container, Row, Col, Table, Button, FormGroup, Label, Input, Form } from "reactstrap";
import '../css/registration.css'

function Registration(props){
 
    useEffect(()=>{
        axios.get("/selectLecture.do")
        .then((res) =>{
            console.log(res.data.teacher);
            sessionStorage.setItem("teacher", res.data.teacher);
            sessionStorage.setItem("lectureType", res.data.lectureType);
            sessionStorage.setItem("lectureRoom", res.data.lectureRoom);
            sessionStorage.setItem("studentNum", res.data.studentNum);
            sessionStorage.setItem("lecturePrice", res.data.lecturePrice);
        }, [])
        .catch()
    })
    const teacher = sessionStorage.teacher;
    const lectureType = sessionStorage.lectureType;
    const lectureRoom = sessionStorage.lectureRoom;
    const studentNum = sessionStorage.studentNum;
    const lecturePrice = sessionStorage.lecturePrice;


    
    const checkSignup = () =>{
        const name = document.getElementById('LECTURE_NAME').value;
        const email = document.getElementById('LECTURE_EMAIL').value;
        const address = document.getElementById('LECTURE_ADDRESS').value;
        const tel = document.getElementById('LECTURE_TEL').value;

        if(name.length < 1){
         alert("이름을 입력하세요.");
			document.getElementById("LECTURE_NAME").focus()
			return;
		}
		
		if(email.length < 1){
         alert("이메일 주소를 입력하세요.");
			document.getElementById("LECTURE_EMAIL").focus()
			return;
		}
        if(address.length < 1){
        alert("주소를 입력하세요.");
            document.getElementById("LECTURE_ADDRESS").focus()
            return;
        }
           
        if(tel.length < 1){
        alert("전화번호를 입력하세요.");
            document.getElementById("LECTURE_TEL").focus()
            return;
        }


        const form = new FormData();
            form.append('name', name);
            form.append('email', email);
            form.append('address', address);
            form.append('tel', tel);
        axios.post('/insertMember.do',
            form
        ,{ 
          headers:{ 
           'Content-type': 'application/json', 
            } 
        }
        )
        .then((res) => {
            alert("신청되었습니다.")
            document.location.href="/registration"
        })
        .catch((error) => {
            alert(error)
        })
    }

    return(
        <>
            <Container>
                <div className="registLec">
                    <Row lg="2" xs="1">
                        <Col lg="12">
                            <p>[3/19 10:00] 
                            <br/>구로 문화센터 수강신청
                            </p>
                        </Col>
                    </Row>
                </div>
                <Row lg="2" xs="1">
                    <Col>
                        <div className="leftArea">
                            <div className="LectureLeft">
                                <div className="LectureHead">
                                    <h3>강좌 소개</h3>
                                </div>
                                <div className="LectureArea">
                                    <img src="/img/designLecture.jpg"/>
                                    <h5>감성 디자인</h5><br/  >
                                    <span>
                                        창의성과 감성이 풍부해지는 실질적인 강좌
                                        <br/>
                                        현재의 트레디한 디자인을 쉽게 이해하고 배울수 있으며,
                                        <br/>
                                        뛰어난 손재주가 없어도 강좌 후 작품의 완성도가 높습니다.
                                        <br/>
                                        작품 소재를 오감으로 느껴보며, 감성이 충만해지는 실질적인 강좌입니다.
                                    </span><br />
                                    <div className="caution">
                                        <p>
                                            <span>★ 주의사항<br /></span>
                                        
                                            
                                            &nbsp; &nbsp; &nbsp;수강신청 기간 내 수강 신청하지 않으신 회원께서는<br/> 
                                            &nbsp; &nbsp; &nbsp;수강신청이 지난 후 신청하실 수 없습니다.
                                        </p>
                                    </div>

                                </div>
                                
                                    
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="rightArea">
                            <div className="LectureRight">
                                <div className="LectureImage">
                                    <img src="/img/designLecture.jpg" />
                                </div>
                                <br/>
                                <div className="LectureTable">
                                    <Table bordered>
                                        <tbody>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    강좌구분
                                                </th>
                                                <td>
                                                    {lectureType}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    학기
                                                </th>
                                                <td>
                                                    2023년 봄학기
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    강사명
                                                </th>
                                                <td>
                                                    {teacher}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    수강 기간
                                                </th>
                                                <td>
                                                    2023.03.19 ~ 2023.03.19
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    수강 시간
                                                </th>
                                                <td>
                                                    월요일 10:00 ~ 12:00
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    강의실
                                                </th>
                                                <td>
                                                    {lectureRoom}호
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    수강인원
                                                </th>
                                                <td>
                                                    {studentNum}명
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    수강료
                                                </th>
                                                <td>
                                                    {lecturePrice}원
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <br /><br />
                <Row lg="2" xs="1">
                    <Col lg="10">
                        <h1>구로 문화센터 강의 신청서 작성</h1>
                    </Col>
                    <Col lg="2">
                        <Button size="lg" color="primary" type="submit" value="Submit" onClick={checkSignup}>신청하기</Button>
                    </Col>
                </Row>
                <br />
                <br />
                <form id="lecMember">
                    <Row>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="LECTURE_NAME">
                            이름
                            </Label>
                            <Input
                            id="LECTURE_NAME"
                            name="LECTURE_NAME"
                            placeholder="이름을 입력해 주세요"
                            type="name"
                            />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="LECTURE_EMAIL">
                            이메일
                            </Label>
                            <Input
                            id="LECTURE_EMAIL"
                            name="LECTURE_EMAIL"
                            placeholder="이메일을 입력해 주세요"
                            type="email"
                            />
                        </FormGroup>
                        </Col>
                        <FormGroup>
                            <Label for="LECTURE_ADDRESS">
                            주소
                            </Label>
                            <Input
                            id="LECTURE_ADDRESS"
                            name="LECTURE_ADDRESS"
                            placeholder="주소를 입력해 주세요"
                            
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="LECTURE_TEL">
                            전화번호
                            </Label>
                            <Input
                            id="LECTURE_TEL"
                            name="LECTURE_TEL"
                            placeholder="전화번호를 입력해 주세요"
                            />
                        </FormGroup>
                    </Row>
                </form>
            </Container>

        </>
    )
}

export default Registration;