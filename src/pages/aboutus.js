import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import '../css/aboutus.css'

class aboutus extends Component {
    render() {
        return (
            <Container fluid="sm">
                <div className='main_about'>
                    <div className='imgbox_about'>
                        <img src='img/icon_logo.png' alt='아이콘이미지' />
                    </div>
                    <div className='content_about'>
                        <p>
                        나는 아침상에 더할 수 없는 벗을 한 번도 빠뜨린 적이 없다. <br />
                        커피를 빼놓고는 그 어떤 것도 좋을 수가 없다. <br />
                        한 잔의 커피를 만드는 원두는<br />
                        나에게 60여가지의 좋은 아이디어를 가르쳐준다. <br/><br/>
                        <img src='img/Beethoven.jpg' alt='베토벤이미지'></img><br />
                        - 루트비히 판 베토벤 - 
                        </p>
                        <br />
                        <br />
                        <p className='content_subject_about'>
                        <h3>카페 만월회는 생각합니다</h3>
                        <br />
                        커피 한잔은 여유로운 삶과 창의력을 가져다 주는 효과가 있습니다.<br />
                        카페 만성회는 밤하늘의 별과 같은 여러분들의 꿈이
                        창의적으로 이루어지길 응원합니다.
                        </p>
                    </div>
                    <div className='contact_us_about'>
                    <Row
                        md="3"
                        xs="1"
                    >
                        <Col>
                            <Link to='/Faq'>
                                <img src='img/qna.png' />
                            </Link>
                            <p>자주하는 질문</p>
                        </Col>
                        <Col>
                            <Link to='/Promote'>
                                <img src='img/video.png' />
                            </Link>
                            <p>홍보 영상</p>
                        </Col>
                        <Col>
                            <Link to='/location'>
                                <img src='img/road_location.png' />
                            </Link>
                            <p>오시는 길</p>
                        </Col>
                    </Row>
                        
                    </div>
                </div>
            </Container>
        );
    }
}

export default aboutus;