import React from "react";
import styled from "styled-components";
import Eximg from "../img/img.png";

const Container = styled.div`
  height: 100vh;
`;

const GraphIMG = styled.img`
  height: 700px;
  width: 700px;
  margin-top: 20px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GraphDescrip = styled.div`
  margin-top: 20px;
`;

function App() {
  return (
    <>
      <Container>
        <Contents>
          <GraphIMG src={Eximg} alt="" />
          <div></div>
          <GraphDescrip>이 글은 예시용 입니다</GraphDescrip>
        </Contents>
      </Container>
    </>
  );
}

export default App;
