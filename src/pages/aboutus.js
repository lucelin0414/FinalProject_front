import React, { Component } from 'react';
import { Container } from 'reactstrap';
import '../css/aboutus.css'

class aboutus extends Component {
    render() {
        return (
            <Container fluid="sm">
                <div className='main_about'>
                    <div className='imgbox_about'>
                        <img src='img/icon_logo.png' />
                    </div>
                    <div className='content_about'>
                        <p>
                        나는 아침상에 더할 수 없는 벗을 한 번도 빠뜨린 적이 없다. <br />
                        커피를 빼놓고는 그 어떤 것도 좋을 수가 없다. <br />
                        한 잔의 커피를 만드는 원두는<br />
                        나에게 60여가지의 좋은 아이디어를 가르쳐준다. <br/><br/>
                        <img src='img/Beethoven.jpg'></img><br />
                        - 루트비히 판 베토벤 - 
                        </p>
                        <br />
                        <br />
                        <p className='content_main_about'>
                        <h3>카페 만월회는 생각합니다</h3>
                        <br />
                        커피 한잔은 여유로운 삶과 창의력을 가져다 주는 효과가 있습니다.<br />
                        카페 만성회는 밤하늘의 별과 같은 여러분들의 꿈이
                        창의적으로 이루어지길 응원합니다.
                        </p>
                    </div>
                </div>
            </Container>
        );
    }
}

export default aboutus;