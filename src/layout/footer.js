import './footer.css'
import Container from 'react-bootstrap/Container';


const Footer = () => {
    return(
        <footer>
            <Container fluid="sm">
                <div className="con_footer">
                    <div className="first_footer">
                        <p className="h1">구로 문화센터</p>
                        <p className="h4">
                        대표자 | 홍길동 <br/>
                        전화 | 02-488-4888 <br/>
                        주소 | 04202 서울특별시 구로구 구로중앙로 152 <br/> 
                        사업자등록번호 | 197-88-88888  <br/>
                        통신판매업신고 | 제2021-서울구로-1933호
                        </p>
                    </div>
                    <div className='seceond_footer'>
                        <div className='sns_logo'>
                            <a href='#'><img src='/img/044-instagram.svg'></img></a>
                            <a href='#'><img src='/img/095-twitter.svg'></img></a>
                            <a href='#'><img src='/img/023-facebook.svg'></img></a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer