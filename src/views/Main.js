import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import '../css/main.css'

const Main = () => {
  return (
    <>
    {/* 배너 */}
      <div class="con">
        <div class="banner">
          <div class="owl-carousel">
              <div class="banner_img"> <img src="img/banner1.jpg" alt="banner1"/> </div>  
            </div>
        </div>
      </div>

      {/* 본문 */}
      <div class="content">
        <div class="best_group ">
          {/* 컨텐츠 명 */}
          <div class="group_name">
            <p class="con_name">추천 강좌</p>
          </div>

          <div class="inner_group">
            {/* 컨텐츠1 */}
            <Link to="/registration">
              <div class="item1">
                <div class="img">
                    <a><img src="img/guitar.jpg" /></a>
                </div>
                <div class="item">
                  <a><p class="item_name">[11주] 서인철 통기타교실[계속]</p></a>
                  <p class="item_ann">서인철 통기타 교실</p>
                </div>
              </div>
            </Link>

            {/* 컨텐츠2 */}
            <Link to="/registration">  
              <div class="item2">
                <div class="img">
                  <a><img src="img/kids.png" /></a>
                </div>
                <div class="item">
                  <a><p class="item_name">[신규]BK 키즈 스포츠 플레이데이 [30~48개월]</p></a>
                </div>
              </div>
            </Link>

            {/* 컨텐츠3 */}
            <Link to="/registration">
              <div class="item4">
                <div class="img">
                  <a><img src="img/calligraphy.jpg" /></a>
                </div>
                <div class="item">
                  <a><p class="item_name">붓으로 쓰는 멋스런 캘리그라피(금)</p></a>
                  <p class="item_ann">아름다운 손글씨란 뜻으로 다양한 도구와 재료를 사용하여 자신이 담고자 하는 마음을 자유롭고 독창적으로 표현하는 글씨 예술입니다.</p>
                </div>
              </div>
            </Link>

            {/* 컨텐츠4 */}
            <Link to="/registration">
              <div class="item4">
                <div class="img">
                  <a><img src="img/yoga.jpg" /></a>
                </div>
                <div class="item">
                  <a><p class="item_name">다이어트 요가</p></a>
                  <p class="item_ann">내 몸을 위한 릴렉스 타임! 건강 & 뷰티 클래스</p>
                </div>
              </div>                    
            </Link>
          </div>
        </div>
      </div>

      {/* 광고 */}
      <div class="con">
        <div class="add">
          <div class="owl-carousel">
              <div class="add_img"> <img src="img/add1.jpg" alt="add1" /> </div>  
            </div>
        </div>
      </div>

    </>
  );
};

export default Main;