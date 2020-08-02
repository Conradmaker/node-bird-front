import { Button, Form, Input } from "antd";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";

export default function CommentForm({ post }) {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, setCommentText] = useState("");

  const onSubmitComment = () => {
    console.log(commentText);
  };

  const onChangeCommentText = (e) => {
    setCommentText(e.target.value);
  };
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          rows={4}
          value={commentText}
          onChange={onChangeCommentText}
        />
        <Button
          style={{ position: "absolute", right: 0, bottom: -40 }}
          type="primary"
          htmlType="submit"
        >
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
}
