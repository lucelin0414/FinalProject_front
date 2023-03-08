import React, { Component, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/login.css";
import axios from 'axios';
import { Input } from 'reactstrap';
import { useCookies } from 'react-cookie';

const Login = () =>  {


  const fn_signIn = () => {
    var submitYN = false;

    const id = document.getElementById('id').value;
    const pw = document.getElementById('pw').value;

    
    
    if(document.getElementById("id").value.length < 1){
      alert("아이디를 입력하세요.");
			document.getElementById("pw").focus()
			return;
		}
		
		if(document.getElementById("id").value.length < 1){
      alert("비밀번호를 입력하세요.");
			document.getElementById("pw").focus()
			return;
		}
    
		if(!submitYN){
      var submitYN = true;
      
      const form = new FormData()
        form.append('id', id)
        form.append('pw', pw)
      
        console.log("click login");

			axios.post('http://localhost:9008/loginAction.do', 
          form
        ,{ 
          headers:{ 
           'Content-type': 'application/json', 
             } 
        }
        )
      .then((res) => {
          console.log(res);

          if(res.data != "N"){
            alert(res.data + "님 환영합니다!");
            sessionStorage.setItem("id", id); // sessionStorage에 id 저장
            sessionStorage.setItem("name", res.data); // sessionStorage에 name 저장
            document.location.href="/"
          }else {
            alert("아이디, 비밀번호가 맞지 않습니다.");
            document.location.href = "/login";
          }
        })
          .catch()

    }
		
	}

    return (
        <>
        <div class="page_header">
            <div class="login_header">
              <div class="name">
                    <p class="comeText">로그인</p>
               </div>
             </div>
          </div>
            <Container fluid="sm">
                <Row className='login_row'>
                    <Col md={{ span: 4, offset: 4 }} id='login_div'>
                        <Form id='loginForm'>
                            <Form.Group className="form-group mb-4">
                                <Input type="id" id="id" placeholder="아이디를 입력하세요" />
                            </Form.Group>

                            <Form.Group className="form-group mb-4">
                                <Input type="password" id="pw" placeholder="비밀번호를 입력하세요" />
                            </Form.Group>
                            
                            <div className="form-group d-grid gap-2 mt-4">
                                <Button id="id_btn" variant="primary" size='lg' onClick={fn_signIn}>로그인</Button>
                            </div>
                              <Link to="/SignUp" id="pw_btn" className="form-group d-grid ">
                                <Button variant="secondary" size='lg' >회원가입</Button>
                              </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;