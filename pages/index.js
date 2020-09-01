import React from "react";
import AppLayout from "../components/AppLayout";
import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

export default function index() {
  //redux에서 가져와주기
<<<<<<< HEAD
<<<<<<< HEAD
  const { logInDone } = useSelector((state) => state.user);
=======
  const { me } = useSelector((state) => state.user);
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
=======
  const { me } = useSelector((state) => state.user);
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <>
      <AppLayout>
        {logInDone && <PostForm />}
        {mainPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </AppLayout>
    </>
  );
}
