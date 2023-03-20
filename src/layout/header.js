import './header.css'
import about from "../test/about";
import 'bootstrap/dist/css/bootstrap.css'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';


const Header = () => {
    
    // 로그인,로그아웃
    const [isLogin, setIsLogin] = useState(false)
    const id = sessionStorage.id
    const name = sessionStorage.name

        // 로그인 상태 관리
        
         useEffect(() => {
           if(sessionStorage.getItem('name') === null){
             console.log('isLogin ?? :: ', isLogin)
           } else {
           // 로그인 상태 변경
             setIsLogin(true)
             console.log('isLogin ?? :: ', isLogin)
           }
         })
        
         const onLogout = () => {
            alert("로그아웃 되셨습니다.");
            // sessionStorage에 저장되어있는 아이템을 삭제한다.
            sessionStorage.removeItem('id')
            sessionStorage.removeItem('name')
            // App 으로 이동(새로고침)
            document.location.href = '/'
        }


    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light container justify-content-between" id="navbar-example2 contain_head">
                <ul class="navbar-brand">
                    <li><a href="http://localhost:9005/"><img src="img/logo.png" alt="logo" /></a></li>
                </ul>

                {/* <!-- 네비게이션 바 --> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>               

                <div class="collapse navbar-collapse navigation_bar" id="navbarSupportedContent">
                    <ul class="navbar-nav nav_right">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle main_nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link to="/AboutUs">
                                        <a class="dropdown-item">회사소개</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/location">
                                        <a class="dropdown-item">오시는 길</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Promote">
                                        <a class="dropdown-item">홍보영상</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faq">
                                        <a class="dropdown-item">FAQ</a>
                                    </Link>
                                </li>

                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle main_nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle main_nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Community</a>
                            <ul class="dropdown-menu">
                                <li>                            
                                    <Link to="/CafeRequest">
                                        <a class="dropdown-item">카페요청게시판</a>
                                    </Link>
                                </li>
                                <li>                            
                                    <a class="dropdown-item">자유게시판</a>
                                </li>
                            </ul>
                        </li>  

                    </ul>

                    
                </div>

                {/* 로그인 */}
                <div class="collapse navbar-collapse navigation_bar" id="navbarSupportedContent">
                    <ul class="navbar-nav nav_right">                    
                        <li class="nav-item dropdown login">
                            {isLogin 
                            ?   <div className='myLogout'>
                                    <label for="logOut">{name}님 환영합니다</label>
                                    <a id='logOut' class="nav-link" href="#" onClick={onLogout}>로그아웃</a>
                                </div>
                            :   <Link to="/Login">
                                    <a class="nav-link login_link" href="#" role="button">로그인</a>
                                </Link>
                            }
                        </li>                        
                    </ul>                    
                </div>

            </nav>
        </header>
    )
}

export default Header
