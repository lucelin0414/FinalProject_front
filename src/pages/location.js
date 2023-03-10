import React, { useEffect } from 'react';
import { Container, Table } from 'reactstrap';
import '../css/location.css'

const {kakao} = window;

const Kakaomap = () => {
    
    useEffect(()=> {
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
      const mapOption = { 
               center: new kakao.maps.LatLng(37.503174, 126.879052), // 지도의 중심좌표
               level: 3 // 지도의 확대 레벨
      };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      const map = new kakao.maps.Map(mapContainer, mapOption);

      var markerPosition = new kakao.maps.LatLng(
        37.503174,
        126.879052
      );
      var marker = new kakao.maps.Marker({
         position: markerPosition,
      });

      marker.setMap(map);

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      var mapTypeControl = new kakao.maps.MapTypeControl();

      // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
      // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    }, []);
    
    return (
        <div className='box_loc'>
          <div className="page_header_loc">
            <div className="header_loc">
                <div className="name_loc">
                  <p className="comeText_loc">오시는 길</p>
                </div>
            </div>
          </div>
          
          <div className='text1_loc'>
            <span className='name2_loc'>&nbsp;카페 천성&nbsp;</span>
            <p className="announce_loc">
               <strong> ▷ 서울특별시 구로구 구로2동 4, 202호</strong><br />
                  방문 시에는 반드시 마스크를 착용해 주시고, 코로나19 방역수칙을 지켜주시기
                  바랍니다.
               </p>
          </div>
          
          <div id="map"></div>

          <br />

          <Container fluid="lg">
            <Table bordered>
              <tbody>
                <tr>
                  <th className='table-light' scope="row">
                    주소
                  </th>
                  <td>
                  서울특별시 구로구 구로2동 4, 202호
                  </td>
                </tr>
                <tr>
                  <th className='table-light' scope="row">
                    전화
                  </th>
                  <td>
                   02-2615-9321
                  </td>
                </tr>
                <tr>
                  <th className='table-light' scope="row">
                    팩스
                  </th>
                  <td>
                    02-3705-0030
                  </td>
                </tr>
                <tr>
                  <th className='table-light' scope="row">
                    지하철
                  </th>
                  <td>
                  - 지하철 1호선 구로역 2번 출구 방향 <br />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>

          <br />

          <div className='text2_loc'>
            <span class="name2_loc"><br /> <br />&nbsp;카페 천성 주차장 안내&nbsp;</span>
              <p class="announce2_loc">
                  ▷ 주차공간이 많이 부족하오니 되도록 대중교통을 이용해 주시기 바랍니다.<br />
                  ▷ 주차정보안내시스템(<a href="http://parking.seoul.go.kr/"
                     >http://parking.seoul.go.kr/</a>)에서 주변 공영주차장을 확인하실 수 있습니다. <br />
                  ▷ 시설물을 보호하기 위해 높이 2.3m 이상 차량은 주차장으로 진입할 수 없습니다.<br /><br />
              </p>
            <span class="name2_loc">&nbsp;개방시간&nbsp;</span>
              <p class="announce2_loc">
                <strong> 평일</strong> : 08:30~21:00 <br />
                <strong> 주말 및 공휴일</strong> : 09:00 ~21:00 <br />
                <thin>
                    매월 넷째 주 수요일 '대중교통 이용의 날'은 서울시 및 산하기관, 자치구 부설
                    주차장이 폐쇄됩니다.(장애인 차량, 긴급차량 등 제외)<br />
                    주차수요 과포화 및 교통 혼잡이 예상될 경우 주차장 이용이 제한될 수 있습니다.</thin><br />
                <br />
              </p>
            <span class="name2_loc">&nbsp;주차요금&nbsp;</span>
              <p class="announce2_loc">
                ▷ 경차 : 10분당 1,000원 (평일 09:00~18:00만 부과)<br />
                ▷ 중형차 : 10분당 1,200원 (평일 09:00~18:00만 부과)
              </p>
          </div>

          <br />
          <br />
          <br />
          
        </div>
    );

    
}

export default Kakaomap;