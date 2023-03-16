import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import '../css/aboutus.css'

class aboutus extends Component {
    render() {
        return (
            <div className='contain_about'>
                {/* 페이지 헤더 */}
                <div class="page_header">
                    <div class="about_header">
                        <div class="name">
                                <p class="comeText">회사소개</p>
                        </div>
                    </div>
                </div>
                {/* 페이지 헤더 끝 */}

                {/* 본문 시작 */}
                <div className='main_about'>

                </div>

            </div>

        );
    }
}

export default aboutus;