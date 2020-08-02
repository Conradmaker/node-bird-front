import React from "react";
import AppLayout from "../components/AppLayout";
import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

export default function index() {
  //redux에서 가져와주기
  const { isloggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  console.log(isloggedIn);

  return (
    <>
      <AppLayout>
        {isloggedIn && <PostForm />}
        {mainPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </AppLayout>
    </>
  );
}