import React, { useState } from "react";
import { Card, Button, Avatar, Popover, List, Comment } from "antd";

import {
  RetweetOutlined,
  HeartTwoTone,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

import { useSelector } from "react-redux";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
<<<<<<< HEAD
=======
import { REMOVE_POST_REQUEST } from "../reducers/post";
<<<<<<< HEAD
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
=======
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
//14분 21초
export default function PostCard({ post }) {
  const id = useSelector((state) => state.user.me && state.user.me.id);
  // const id = useSelector((state) => state.user.me?.id); //옵셔널 체이닝
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [liked, setLiked] = useState(false);
  const onToggleLike = () => {
    setLiked(!liked);
  };
  const onToggleComment = () => {
    setCommentFormOpened(!commentFormOpened);
  };
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          //배열
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone twoToneColor="red" onClick={onToggleLike} />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <Popover
            key="ellipsis"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
      {/* <CommentForm />
      <Comment /> */}
    </div>
  );
}
