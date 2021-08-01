import React from 'react';
import * as S from './styles';
import Header from '../../common/Header/index';
import Footer from '../../common/Footer/index';

function FAQPage() {
  return (
    <>
      <Header></Header>
      <S.MainContainer>
        <S.PageTitle>자주 묻는 질문</S.PageTitle>
        <S.QuestionContainer>
          <S.QuestionBox>
            <S.Question>1. 알림은 어떻게 설정하고 끌 수 있나요?</S.Question>
            <S.Answer>
              브랜드의 신규 이벤트와 이벤트의 마감 알림은 ‘MY VENTI’ 를 기준으로
              전달됩니다. 알림을 원하신다면 브랜드의 별 표시와 이벤트의 하트
              표시를 눌러주세요!
            </S.Answer>
          </S.QuestionBox>
          <S.Line></S.Line>
          <S.QuestionBox>
            <S.Question>2. MY VENTI의 기능은 무엇인가요?</S.Question>
            <S.Answer>
              브랜드의 별 표시와 이벤트의 하트 표시를 선택하시면 MY VENTI에
              저장됩니다. MY VENTI에서는 선택하신 브랜드와 이벤트를 한 곳에서
              정리하여 볼 수 있습니다.
            </S.Answer>
          </S.QuestionBox>
          <S.Line></S.Line>
          <S.QuestionBox>
            <S.Question>3. 원하는 브랜드가 입점 되어 있지 않아요</S.Question>
            <S.Answer>
              Venti는 지속적으로 입점 브랜드 수를 확장해 나갈 계획을 갖고
              있습니다. 혹시 원하시는 브랜드가 있다면 하단의 ‘문의하기’로 의견
              부탁드립니다.
            </S.Answer>
          </S.QuestionBox>
          <S.Line></S.Line>
          <S.QuestionBox>
            <S.Question>4. 회원정보는 어디에서 변경할 수 있나요?</S.Question>
            <S.Answer>
              로그인 {'>'} 좌측 상단의 3개의 줄 버튼을 클릭 {'>'} ‘이벤티님
              반갑습니다!’ 문구를 선택해주세요.
            </S.Answer>
          </S.QuestionBox>
          <S.Line></S.Line>
          <S.QuestionBox>
            <S.Question>
              5. 이벤트 참여하기를 클릭했더니 아무 창도 뜨지 않아요
            </S.Question>
            <S.Answer>
              이벤트 참여하기 버튼은 실제 브랜드의 홈페이지와 연결되어 있습니다.
              따라서 기한이 지난 이벤트가 해당 홈페이지에서 삭제되었다면 Venti
              홈페이지에서도 연결이 어렵습니다.
            </S.Answer>
          </S.QuestionBox>
          <S.Line></S.Line>
          <S.QuestionBox>
            <S.Question>6. PC로는 사용할 수 없나요?</S.Question>
            <S.Answer>
              PC에서도 동일한 링크로 Venti를 이용하실 수 있습니다. 다만 모바일
              사용을 권장드립니다.
            </S.Answer>
          </S.QuestionBox>
          <S.Line></S.Line>
          <S.QuestionBox>
            <S.Question>7. 앱을 다운로드 받을 수는 없을까요?</S.Question>
            <S.Answer>
              현재 Venti는 모바일 웹 형태로만 베타테스트 중에 있으며, 추후
              출시를 고려하고 있습니다.
            </S.Answer>
          </S.QuestionBox>
          <S.Line></S.Line>
          <S.QuestionBox>
            <S.Question>
              8. 업로드가 되지 않은 이벤트가 있는 거 같아요
            </S.Question>
            <S.Answer>
              Venti는 각 브랜드사의 공식 홈페이지를 기준으로 이벤트를 업로드하고
              있습니다. 따라서 홈페이지가 아닌 SNS 등 타 채널에서만 진행되는
              이벤트는 업로드가 어렵다는 점 양해 부탁드립니다.
            </S.Answer>
          </S.QuestionBox>
        </S.QuestionContainer>
        <S.BottomText>
          Venti를 이용해주심에 감사드립니다.<br></br>
          <br></br> 이외에도 Venti에 대한 궁금증이나 긍정적인 피드백을 남기고
          싶으시다면, 하단의 '문의하기' 버튼을 활용해주시길 부탁드립니다 :)
        </S.BottomText>
      </S.MainContainer>
      <Footer></Footer>
    </>
  );
}

export default FAQPage;
