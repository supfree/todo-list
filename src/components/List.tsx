import React from "react";
import styled from "styled-components";
import Card, { CardProps } from "./Card";

export type ListPorps = { list: CardProps[] };

const List: React.FC<ListPorps> = ({ list }): JSX.Element => {
  return (
    <>
      <Wrapper>
        <Main>
          {list.map((item: CardProps, index: number) => (
            <Card {...item} key={index} />
          ))}
        </Main>

        <div className="todo-list-item" />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 39px auto 0 auto;
  width: 100%;
  overflow: hidden;
  text-align: left;
  font-size: 24px;
  color: #374151;
  font-family: Inter;
`;

const Main = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 34px;
`;

export default List;
