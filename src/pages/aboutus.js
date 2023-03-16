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
                {/* 시작문구 끝 */}
                
                {/* 컨텐츠1 */}
                <div class="page_header">
                    <div class="about_header">
                        <p class="ann_head_about">
                            한 잔의 커피를 만드는 원두는<br />
                            나에게 60여가지의 좋은 아이디어를 가르쳐준다. <br /><br />
                        </p>
                        <p class="ann_head_about2">
                            -루드비히 판 베토벤-
                        </p>
                    </div>
                </div>
                {/* 컨텐츠1 끝 */}

                {/* 컨텐츠2 시작 */}
                <div className='main_about'>


                </div>

            </div>

        );
    }
}

export default aboutus;