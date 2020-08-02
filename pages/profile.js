import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

export default function profile() {
  const followerList = [
    { nickname: "conrad" },
    { nickname: "Roo" },
    { nickname: "boo" },
  ];
  const followingList = [
    { nickname: "conrad" },
    { nickname: "Roo" },
    { nickname: "boo" },
  ];
  return (
    <div>
      <Head>
        <title>프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </div>
  );
}
