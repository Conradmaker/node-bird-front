import produce from "immer";

export const initialState = {
  mainPosts: [
    {
      id: 1,
<<<<<<< HEAD
<<<<<<< HEAD
      User: {
        id: 1,
        nickname: "Conrad",
=======
=======
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
      User: {
        id: 1,
        nickname: "Conrad",
      },
      content: "첫번째게시글 #sssss",
      Images: [
        {
          id: shortId.generate(),
          src:
            "https://media.vlpt.us/images/wooder2050/post/d2764478-dc72-4cc9-9128-f66bfb8b3aa3/reactintroduction.png",
        },
        {
          id: shortId.generate(),
          src:
            "https://media.vlpt.us/images/wooder2050/post/d2764478-dc72-4cc9-9128-f66bfb8b3aa3/reactintroduction.png",
        },
        {
          id: shortId.generate(),
          src:
            "https://media.vlpt.us/images/wooder2050/post/d2764478-dc72-4cc9-9128-f66bfb8b3aa3/reactintroduction.png",
        },
      ],
      Comments: [
        {
          id: shortId.generate(),
          User: { id: shortId.generate(), nickname: "nero" },
          content: "와우",
        },
        {
          id: shortId.generate(),
          User: { id: shortId.generate(), nickname: "hero" },
          content: "오아아아",
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  removePostLoading: false,
  removePostDone: false,
  removePostError: null,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

initialState.mainPosts = initialState.mainPosts.concat(
  //concat에는 항상대입을!
  Array(20)
    .fill()
    .map(() => ({
      id: shortId.generate(), //shortid 사용
      User: {
        id: shortId.generate(), //shortid 사용
        nickname: faker.name.findName(), //faker사용
<<<<<<< HEAD
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
=======
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
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
<<<<<<< HEAD
<<<<<<< HEAD
            nickname: "nero",
          },
          content: "와우",
        },
        {
          User: {
            nickname: "hero",
=======
=======
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
            id: shortid.generate(),
            nickname: faker.name.findName(),
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
          },
          content: "오아아아",
        },
      ],
<<<<<<< HEAD
<<<<<<< HEAD
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};
=======
    }))
);
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
=======
    }))
);
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
//액션생성
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});
export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});
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
<<<<<<< HEAD
};
=======
});
const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "conrad",
  },
});
export default function reducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.addPostError = null;
        draft.mainPosts.unshift(dummyPost(action.data)); //앞에 추가해야 게시글이 위에 나타난다.
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.removePostError = null;
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentDone = false;
        draft.addCommentError = action.error;
        break;
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: true,
        addPostError: null,
        mainPosts: [dummyPost, ...state.mainPosts], //앞에 추가해야 게시글이 위에 나타난다.
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
        addCommentError: null,
        //mainComments: [dummyComment, ...state.mainComments], //앞에 추가해야 게시글이 위에 나타난다.
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
}
