import React from "react";
import styled from "styled-components";

export type CardProps = {
  title: string;
  content: string;
  grade: string;
  health: string;
};

export const Card: React.FC<CardProps> = ({
  title,
  content,
  grade,
  health,
}): JSX.Element => {
  return (
    <Wrapper>
      <Main>
        <Title>{title}</Title>
        <Body className="body">{content}</Body>
        <Footer>
          <FooterLeft>
            <div className="p118">{grade}</div>
          </FooterLeft>
          <FooterRight>
            <b className="health19">{health}</b>
          </FooterRight>
        </Footer>
      </Main>
      <Delete src="Trash.png" className="icon" />
      <Ok src="Ok.png" className="icon" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 445px;
  display: flex;
  flex-direction: row;
  padding: 26px 34px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;

  :hover {
    width: 489px;
    animation: animate 0.5s;

    @keyframes animate {
      from {
        width: 445px;
      }
      to {
        width: 489px;
      }
    }
  }

  &:hover .body {
    height: auto;
    display: block;
  }

  &:hover .icon {
    opacity: 1;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;

const Title = styled.div`
  position: relative;
  font-weight: 800;
`;

const Body = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  color: #6b7280;
  display: -webkit-inline-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 32;
  -webkit-box-orient: vertical;
  width: 377px;
  height: 40px;
  overflow-y: hidden;
  word-break:break-all;
  display:-webkit-box;　　
  -webkit-box-orient: vertical;　　
  -webkit-line-clamp:2;　　
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  font-size: 12px;
  color: #e11d48;
`;

const FooterLeft = styled.div`
  border-radius: 10px;
  background-color: #fef2f2;
  display: flex;
  flex-direction: row;
  padding: 5px 8px;
  align-items: center;
  justify-content: center;
`;

const FooterRight = styled.div`
  border-radius: 10px;
  background-color: #f0fdf4;
  display: flex;
  flex-direction: row;
  padding: 5px 8px;
  align-items: center;
  justify-content: center;
  color: #16a34a;
`;

const Delete = styled.img`
  position: absolute;
  width: 129.25px;
  height: 152.75px;
  left: -329.25px;
  top: 70px;
  opacity: 0;
`;
const Ok = styled.img`
  position: absolute;
  width: 141px;
  height: 141px;
  right: -341px;
  top: 70px;
  opacity: 0;
`;

export default Card;
