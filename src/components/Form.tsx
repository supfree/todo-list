import React from "react";
import styled from "styled-components";

export type FormProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

const Form: React.FC<FormProps> = ({ onCancel, onConfirm }): JSX.Element => {
  return (
    <Wrapper>
      <FormBody>
        <Input placeholder="Take dog out on walk" />
        <Textarea placeholder="He needs vaccine shot too" />
        <Input placeholder="Tags" />
        <TagList>
          <Tag>1</Tag>
          <Tag>2</Tag>
          <Tag>3</Tag>
          <Tag>4</Tag>
        </TagList>
      </FormBody>
      <Operate>
        <Cancel src="cancel.png" onClick={onCancel} />
        <Confirm src="Confirm.png" onClick={onConfirm} />
      </Operate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 367px;
`;

const FormBody = styled.div`
  width: 367px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  padding: 43px 41px;
  opacity: 1;
`;
const Input = styled.input`
  margin-bottom: 14px;
  width: 340px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #f3f4f6;
  font-weight: 500;
  line-height: 44px;
  padding-left: 14px;
  padding-right: 14px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #e2e8f0;
  }
  :-ms-input-placeholder {
    color: #e2e8f0;
  }
`;
const Textarea = styled.textarea`
  margin-bottom: 14px;
  width: 340px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #f3f4f6;
  padding: 14px;
  font-weight: 500;
  ont-color: E2E8F0;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #e2e8f0;
  }
  :-ms-input-placeholder {
    color: #e2e8f0;
  }
`;
const TagList = styled.div`
  margin-top: 15px;
`;

const Tag = styled.div`
  width: 34px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  border: 1px solid #f3f4f6;
  display: inline-block;
  margin-right: 18px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  color: #9ca3af;
`;
const Operate = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 34px;
  width: 449px;
`;
const Cancel = styled.img`
  width: 46px;
  heigth: 46px;
  user-select: none;
`;
const Confirm = styled.img`
  width: 36px;
  heigth: 36px;
  margin-left: 10px;
  margin-top: -1px;
  user-select: none;
`;
export default Form;
