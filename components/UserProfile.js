import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch } from "react-redux";
import { logOut } from "../reducers/user";

export default function UserProfile({ setIsLoggedIn }) {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, []);
  return (
    <Card
      actions={[
        //배열이기때문에 키
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="following">
          팔로잉
          <br />0
        </div>,
        <div key="follower">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>CD</Avatar>} title="Conrad" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
}
