import React from "react";
import styled, { css } from "styled-components";
import "./style.scss";

// const StyledCard = styled.tag(h1,h2,div,span,strong,a,p,section,article,...)
// css in js
const StyledCard = styled.div`
  position: relative;
`;
const StyledImg = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: #fff;
  z-index: 10px;
  border-radius: 20px;
  padding: 20px;
  bottom: 0;
  width: calc(100% - 36px);
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const CardUser = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 12px;
  object-fit: cover;
  border-radius: 100rem;
  flex-shrink: 0;
`;

const NameTag = styled.span`
  color: #333333;
  font-family: Poppins;
  font-size: 16px;
`;
const TopLeftCardContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const CountHeart = styled.img``;
const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardColor = styled.h3`
  color: #000;
`;
const PSL = styled.span`
  font-size: 18px;
  font-weight: bold;

  ${(props) =>
    props.second &&
    css`
      background: linear-gradient(86.88deg, #20e3b2 1.38%, #2cccff, #fc2872);
    `};
  ${(props) =>
    !props.second &&
    css`
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
    `};
  color: transparent;
  -webkit-background-clip: text;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <StyledImg>
        <CardImg
          src="https://cdn.dribbble.com/users/1044993/screenshots/17199064/media/d5f35471c451284130e2b7f9880271a6.png?compress=1&resize=1000x750&vertical=top"
          alt="img-main"
        />
        <CardContent>
          <CardTop>
            <CardUser>
              <Avatar
                src="https://cdn.dribbble.com/users/594316/screenshots/16557702/media/d77aa195b67473edb6c386b355126078.jpg?compress=1&resize=400x300&vertical=top"
                alt="avatar"
              />
              <NameTag>@zndrson</NameTag>
            </CardUser>
            <TopLeftCardContent>
              <CountHeart src="/coolicon.svg" alt="heart" />
              <div>256</div>
            </TopLeftCardContent>
          </CardTop>
          <CardBottom>
            <CardColor>Cosmic Perspective</CardColor>
            <PSL second={props.second}>12,000 PSL</PSL>
          </CardBottom>
        </CardContent>
      </StyledImg>
    </StyledCard>
  );
};

export default Card;
