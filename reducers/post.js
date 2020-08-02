export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "Conrad",
      },
      content: "첫번째게시글 #sssss",
      Images: [
        {
          src:
            "https://media.vlpt.us/images/wooder2050/post/d2764478-dc72-4cc9-9128-f66bfb8b3aa3/reactintroduction.png",
        },
        {
          src:
            "https://media.vlpt.us/images/wooder2050/post/d2764478-dc72-4cc9-9128-f66bfb8b3aa3/reactintroduction.png",
        },
        {
          src:
            "https://media.vlpt.us/images/wooder2050/post/d2764478-dc72-4cc9-9128-f66bfb8b3aa3/reactintroduction.png",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "와우",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "오아아아",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};
//액션생성
const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
//가짜데이터
const dummyPost = {
  id: 2,
  content: "더미입니다",
  User: {
    id: 1,
    nickname: "conrad",
  },
  Images: [],
  Comments: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts], //앞에 추가해야 게시글이 위에 나타난다.
        postAdded: true,
      };
    default:
      return state;
  }
}
