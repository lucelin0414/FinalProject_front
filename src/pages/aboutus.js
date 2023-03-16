import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import '../css/aboutus.css'

class aboutus extends Component {
    render() {
        return (
            <div className='contain_about'>
                
                {/* 시작문구 */}
                <div className='main_about'>
                    <div className='logoImg_main'>
                        <img src="img/icon_logo.png" alt="logo" className='icon_logo_main' />
                    </div>
                    <p class="ann_name_about">별의 강을 담아낸 카페,</p>
                    <div className='logoImg_main'>
                        <img src="img/logo_word.png" alt="logo" className='icon_word_main' />
                    </div>
                </div>
                
                {/* 페이지 헤더 */}
                <div class="page_header">
                    <div class="about_header">
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