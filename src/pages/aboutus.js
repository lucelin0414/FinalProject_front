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
                <div className='content2_about'>
                    <p class="con3_head_about"> 카페 천성은 약속합니다. </p>
                    <div className='con1_img_about'>
                        <img src="img/about_img1.png" alt="logo" className='about_img' />
                    </div>
                    <div className='con1_img_about'>
                        <img src="img/about_img2.png" alt="logo" className='about_img' />
                    </div>
                    <div className='con1_img_about'>
                        <img src="img/about_img3.png" alt="logo" className='about_img' />
                    </div>                   
                </div>
                {/* 컨텐츠2 끝 */}


                {/* 컨텐츠3 시작 */}
                <div className='content3_about'>
                    <div className='con3_box_about'>

                        <p class="con3_head_about"> 카페 천성, </p>
                        
                        <div className='con3_1st_box'> 
                            <div className='con3_1st_about'> </div>
                            <div className='logoImg_con3'>
                                <img src="img/icon_logo.png" alt="logo" className='icon_logo_con3' />
                            </div>
                            <div className='con3_ann_box'>
                                <p class="con3_ann1">
                                    '트렌드를 선도하는 맛'
                                </p>
                                <p class="con3_ann2">
                                    <br/>
                                    카페 천성은 새로운 트렌드를 만들어냅니다. <br/>
                                    별처럼 반짝이는 취향을 담아내기 위해 끊임없이 연구합니다. <br/><br/>
                                    천성에서 당신만의 별을 찾아내 유행을 선도하세요.
                                </p>
                            </div>
                        </div>                        

                        <div className='con3_2nd_about'>
                            <div className='con3_1st_about'> </div>
                            <div className='logoImg_con3'>
                                <img src="img/icon_logo.png" alt="logo" className='icon_logo_con3' />
                            </div>
                            <div className='con3_ann_box'>
                                <p class="con3_ann1">
                                    '트렌드를 선도하는 맛'
                                </p>
                                <p class="con3_ann2">
                                    <br/>
                                    카페 천성은 새로운 트렌드를 만들어냅니다. <br/>
                                    별처럼 반짝이는 취향을 담아내기 위해 끊임없이 연구합니다. <br/><br/>
                                    천성에서 당신만의 별을 찾아내 유행을 선도하세요.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 컨텐츠3 끝 */}
            </div>

        );
    }
}

export default aboutus;