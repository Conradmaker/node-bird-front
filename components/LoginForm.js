import React, { useState, useCallback } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import Link from "next/link";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { logInRequestAction } from "../reducers/user";

const FormWrapper = styled(Form)`
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

export default function LoginForm({ setIsLoggedIn }) {
  const { isloggingIn } = useSelector((state) => state.user);
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(logInRequestAction(id, password));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={isloggingIn}>
          로그인
        </Button>

        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
}
