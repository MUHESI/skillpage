import {
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCES,
  LOAD_COMMENTS_ERROR,
} from "./actionComments";
import { MainData } from "../../data/MainData";

const commentsReducer = (state = MainData.comments, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        isLoding: true,
      };
      break;
    case LOAD_COMMENTS_SUCCES:
      return {
        ...state,
        isLoding: false,
        comments: action.payload,
      };
      break;
    case LOAD_COMMENTS_ERROR:
      return {
        ...state,
        isLoding: false,
        comments: [],
        error: action.payload,
      };
      break;

    default:
      return state;
  }
};
export default commentsReducer;
