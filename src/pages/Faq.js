import React, { useEffect, useState } from "react";
import CategoryFilter from "../pages/CategoryFilter";

import "../css/FAQ.css";



const categories = [
  {
    name: "자주 묻는 질문",
    value: "all",
  },
  {
    name: "회원관리",
    value: "category1",
  },
  {
    name: "수강신청관리",
    value: "category2",
  },
  {
    name: "학습관련",
    value: "category3",
  },
];

const qnaList = [
  {
    category: "category1",
    question: "기관 회원인데 로그인이 안됩니다.",
    answer: "기관회원은 학습 및 수료증 발부가 불가 하므로, 개인회원으로 가입 후 이용을 해주시기 바랍니다.",
  },
  {
    category: "category1",
    question: "개명한 이름은 어떻게 등록하나요?",
    answer: "싸이렌24 (siren24, 실명인증기관) 1577-1006 으로 전화주셔서 개명한 이름 등록 신청 → 증빙서류를 Fax 로 보냄 → 개명이름 등록 처리 완료 후 지식배움터 로그인 → 오른쪽 상단 개인정보 수정 → 개명신청 클릭하셔서 수정하시면 됩니다.",
  },
  {
    category: "category2",
    question: "수강신청 확인은 어떻게 하나요?",
    answer: "수강신청을 하신 후 나의강의실 > 학습현황 > 학습중인 과정 에서 신청내용을 확인하시고 학습을 진행하면 됩니다.",
  },
  {
    category: "category2",
    question: "현장교육 취소를 진행하고 싶은데 취소 버튼이 보이지 않습니다.",
    answer: "선정이 되시면 직접 취소를 하실 수 없습니다. 신청하신 교육기관으로 전화하셔서 신청하신 교육의 취소의사를 말씀드리고 취소요청해 주시기 바랍니다.",
  },
  {
    category: "category3",
    question: "학습페이지가 뜨지 않습니다.",
    answer: "먼저 로그인 후 나의강의실 > 학습현황 > 학습중인 과정에서 학습신청이 되었는지 확인하시고, [학습하기]를 선택하시기 바랍니다. 그래도 학습이 안 될 경우 전화주시면 자세히 안내해 드리겠습니다.",
  },
  {
    category: "category3",
    question: "온라인 교육을 받으려고 하는데 지원되지 않는 비디오 유형 또는 잘못된 파일 경로입니다.",
    answer: "안녕하세요. 보통의 경우 개인 PC의 네트워크 환경에 따라 문제가 발생하기 때문에 인터넷 옵션 초기화와 브라우저를 업데이트 하시는 것을 추천드립니다.",
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