import React from "react";
import styled from "styled-components";
import GameSettings from "./GameSettings";
import WrapSection from "../wrap-components/WrapSection";

const StyledHome = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff122;
  width: 100%;
  height: 100vh;
  background-size: 100%;
`;

const BoxShadowDiv = styled.div`
  //position: absolute;
  top: 15vh;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #000;
`;

const Title = styled.h1`
  //position: absolute;
  top: 15vh;
  padding: 30px;
`;

const Home = () => {
  return (
    <StyledHome>
      <Title>Tombola</Title>
      <WrapSection>
        <BoxShadowDiv>
          <GameSettings />
        </BoxShadowDiv>
      </WrapSection>
    </StyledHome>
  );
};

export default Home;
