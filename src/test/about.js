import React from 'react';
import './about.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'


const about = () => {
    return(
        <>
            <div className='about'>
            <div className="about-header">
                  <div className="name">
                        <p className="about-header-text">회사 소개</p>
                    </div>
              </div>
                <div className='main-information text-center'>
                    <img src='/img/home.png' className="history_img"></img>
                    <h2>구로 문화센터</h2>
                    <p>구로 문화센터는 우리 가족 행복 플러스, 우리지역 평생학습 배움터를 만들어 나가겠습니다.</p>
                    <img src='/about.jpg' alt='about 이미지' className='img-fluid' />
                </div>
                <div  className='history'>
                <div className='container_about'>
                <Row>
                    <Col>
                    <Card className='history-card'>
                        <ListGroup className="list-group-flush history-list list-group">
                            <ListGroup.Item className='history-card-list'>
                                <Card.Body>
                                <img src='/img/connection.png' className="history_img"></img>
                                <Card.Title>지역주민의 소통과 문화체험의 장으로 우리동네 커뮤니티 중심입니다.</Card.Title>
                                <Card.Text>
                                    구로 문화센터는 공간 쉐어서비스와 맞춤 프로그램, 문화데이, 어린이플리마켓 등을 통해 지역사회 만남의 장으로서 커뮤니티 중심이 됩니다.
                                </Card.Text>
                                </Card.Body>
                            </ListGroup.Item>
                            <ListGroup.Item className='history-card-list'>
                                <Card.Body>
                                <img src='/img/heart.png' className="history_img"></img>
                                <Card.Title>지자체와 다양한 기관과의 협업으로 사회적 책임을 다하고 있습니다.</Card.Title>
                                <Card.Text>
                                구로 문화센터는 평생교육 확대를 위해 축적된 노하우를 기반으로 지역교육청 및 시군구 기관과 협업하여 부모교육, 바른 먹거리교육, 다문화교육 청소년 진로교육 등을 지원하고 있습니다. 또한 지역에 특화된 프로그램 개발을 통해 지역문화발전에 기여하고 있습니다.

                                </Card.Text>
                                </Card.Body>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </Col>
                    <Col>
                    <Card className='d-flex align-self-center'>
                    <img src='/historyimg.jpg' alt='history 이미지' className="history-img"/>
                    </Card>
                    </Col>
                    </Row>
                </div>
                    </div>
                </div>
                
        </>
    );
}

export default about;