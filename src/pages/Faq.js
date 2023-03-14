import React, { useEffect, useState } from "react";
import CategoryFilter from "../pages/CategoryFilter";

import "../css/FAQ.css";



const categories = [
  {
    name: "전체",
    value: "all",
  },
  {
    name: "주문문의",
    value: "category1",
  },
  {
    name: "배송문의",
    value: "category2",
  },
  {
    name: "적립금/쿠폰",
    value: "category3",
  },
  {
    name: "제품",
    value: "category4",
  },
];

const qnaList = [
  {
    category: "category1",
    question: "입금했는데 왜 입금 대기중으로 나오나요?",
    answer: "입금하시고 결제 완료 확인까지 최대 1~3시간 정도 소요됩니다.",
  },
  {
    category: "category1",
    question: "신용카드로 결제하는데 결제실패라고 팝업이 떠요.",
    answer: "결제하는 도중 걸제실패라는 팝업이 뜬다면, 최종 결제금액이 신용카드로 결제할 수 있는 최소 결제 금액보다 낮기 때문입니다. 쿠폰, 적립금을 적용한 최종 결제금액이 100원 이상일 때 신용카드로 결제가 가능합니다. 이하일 경우 무통장입금으로 결제 가능합니다.",
  },
  {
    category: "category2",
    question: "배송은 언제 오나요?",
    answer: "지금 주문하시면 영업일 기준 3일 이내 발송될 예정입니다.",
  },
  {
    category: "category2",
    question: "기본 배송지 변경은 어디서 하나요?",
    answer: "MY(마이페이지)의 정보 수정에서 회원정보에 등록된 기본 주소를 변경하실 수 있습니다.",
  },
  {
    category: "category3",
    question: "적립금, 쿠폰은 어디서 확인할 수 있나요?",
    answer: "로그인 후, 오른쪽 상단의 MY(마이페이지)>포인트에서 확인하실 수 있습니다.",
  },
  {
    category: "category3",
    question: "추천인은 뭔가요?",
    answer: "추천인이란 회원가입 진행 시 기존 고객의 추천인 코드를 입력하면 회원가입을 하시는 분과 기존의 고객에게 1000포인트를 적립해드리는 혜택입니다. 적립금은 지급되는 즉시 사용이 가능합니다.",
  },
  {
    category: "category4",
    question: "우유 말고 두유나 물이랑 마셔도 되나요?",
    answer: "저희 원액은 우유에 섞었을 때 원액의 향과 맛을 제일 잘 느낄 수 있습니다. 다만 우유를 못 드시는 분들은 락토프리 우유 또는 두유와 섞어서 드셔도 무방합니다! (물은 추천드리지 않습니다. 너무 맹맹해져서 이도저도 아닌 맛이 될 수가 있어요ㅜㅜ)",
  },
  {
    category: "category4",
    question: "카페인이 없는 음료가 궁금해요!",
    answer: "카페인이 없는 음료로는 쑥, 단호박, 자몽샤워, 리얼딸기, 흑임자, 홍백향차가 있습니다.",
  }
];

const FAQ = () => {
  const [category, setCatecory] = useState("all");
  const [cardOnOff, setCardOnOff] = useState(qnaList);
  const [showList, setShowList] = useState(qnaList);

  const getQnACard = (item, index) => {
    return (
      <div className="faq-card" key={index}>
        <div
          className="faq-card-title"
          onClick={() => {
            let tempCard = cardOnOff;
            tempCard[index].show = !tempCard[index].show;
            setCardOnOff([...tempCard]);
          }}
        >
          <span className="question-mark">Q.</span>
          <span>{item.question}</span>
        </div>
        <div
          className={
            qnaList[index].show
              ? "faq-card-answer"
              : "faq-card-answer faq-card-none"
          }
        >
          <span className="answer-mark">A.</span>
          <span className="FAQ-card-answer">{item.answer}</span>
        </div>
      </div>
    );
  };

  useEffect(()=> {
    setShowList(
      qnaList.filter((item) => {
        if (category === "all") return true;
        if (category === item.category) return true;
        return false;
      })
    );
  }, [category]);

  
  return (
    <div>


  <div className="about_FAQ">
  <div className="name">
  <p className="comeText">FAQ</p>
  </div>
  </div>

      {/* <div>faq</div>  */}
      
      {/* 이부분이 현재 나오고 있는 글자  */}
      <div className="faq_all">

      <CategoryFilter
        categories={categories}
        category={category}
        setCatecory={setCatecory}
      />
      </div>
      <div className="faq-parent">
        <div className="faq-list">
          {showList.map((item, index) => getQnACard(item, index))}     
        </div>
      </div>
    </div>

  );
};

export default FAQ;