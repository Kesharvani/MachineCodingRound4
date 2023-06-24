import { ACTION_TYPE } from "../utils";

export const initialValue = {
  posts: [],
  sortingValue: ""
};

export const reducerFunction = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        posts: action.payload.posts
      };
    case ACTION_TYPE.SORT:
      return {
        ...state,
        sortingValue: action.payload
      };
    case ACTION_TYPE.UPVOTES:
      return {
        ...state,
        posts: state.posts.map((item) => {
          if (item?.postId === action.payload?.postId) {
            return action.payload;
          } else {
            return item;
          }
        })
      };
    case ACTION_TYPE.DOWNVOTES:
      return {
        ...state,
        posts: state.posts.map((item) => {
          if (item?.postId === action.payload?.postId) {
            return action.payload;
          } else {
            return item;
          }
        })
      };
    case ACTION_TYPE.BOOKMARK:
      return {
        ...state,
        posts: state.posts.map((item) => {
          if (item?.postId === action.payload?.postId) {
            return action.payload;
          } else {
            return item;
          }
        })
      };
    default:
      console.error("Error in reducer");
  }
};
