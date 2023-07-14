import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import List from "./components/List";
import { CardProps } from "./components/Card";
import Form from "./components/Form";

const itemList: CardProps[] = [
  {
    title: "Lorem ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    grade: "P1",
    health: "Health",
  },
  {
    title: "Drag left or right to delete",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    grade: "P1",
    health: "Health",
  },
  {
    title: "Lorem ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    grade: "P1",
    health: "Health",
  },
  {
    title: "Lorem ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    grade: "P1",
    health: "Health",
  },
  {
    title: "Lorem ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    grade: "P1",
    health: "Health",
  },
  {
    title: "Lorem ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    grade: "P1",
    health: "Health",
  },
  {
    title: "Lorem ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    grade: "P1",
    health: "Health",
  },
];

const App: React.FC = () => {
  const [isShowTopMask, setIsShowTopMask] = useState(false);
  const [isShowMask, setShowMask] = useState(false);

  const handleScroll = (): void => {
    const _scrollTop =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    if (_scrollTop >= 200) {
      setIsShowTopMask(true);
    } else {
      setIsShowTopMask(false);
    }
  };

  const handleAdd = () => {
    setShowMask(true);
  };

  const handleFormCancel = () => {
    setShowMask(false);
  };

  const handleFormConfirm = () => {
    setShowMask(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Main>
      <GlobalStyle />
      <Title>Daily Todo</Title>
      <List list={itemList} />
      <BottomMask>
        <Add src="Add.png" onClick={handleAdd} />
      </BottomMask>
      {isShowTopMask && <TopMask />}
      {isShowMask && (
        <Mask>
          <FormWrap>
            <Form onCancel={handleFormCancel} onConfirm={handleFormConfirm} />
          </FormWrap>
        </Mask>
      )}
    </Main>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color:#F9FAFB;
  }
`;

const Main = styled.div`
  padding-bottom: 200px;
`;

const Title = styled.div`
  margin-top: 35px;
  text-align: center;
  font-size: 72px;
  font-weight: 900;
  color: #e2e8f0;
`;

const Mask = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #f9fafb;
  background-color: rgba(249, 250, 251, 0.6);
`;

const FormWrap = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -224.5px;
`;

const TopMask = styled.div`
  position: fixed;
  top: 0;
  background: linear-gradient(180deg, rgba(249, 250, 251, 0), #f9fafb 95.69%);
  width: 100%;
  height: 89px;
  transform: rotate(-180deg);
`;
const BottomMask = styled.div`
  position: fixed;
  bottom: 0;
  background: linear-gradient(180deg, rgba(249, 250, 251, 0), #f9fafb 47.81%);
  width: 100%;
  height: 224px;
  text-align: center;
`;

const Add = styled.img`
  width: 36px;
  height: 36px;
  position: absolute;
  left: 50%;
  margin-left: -18px;
  bottom: 50px;
  user-select: none;
`;
export default App;
