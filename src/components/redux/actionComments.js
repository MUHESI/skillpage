import axios from "axios";

export const LOAD_COMMENTS = "LOAD_COMMENTS";
export const LOAD_COMMENTS_SUCCES = "LOAD_COMMENTS_SUCCES";
export const LOAD_COMMENTS_ERROR = "LOAD_COMMENTS_ERROR";

export const loadApiComments = () => {
  return {
    type: LOAD_COMMENTS,
  };
};

export const loadApiCommentsSucces = (comments) => {
  return {
    type: LOAD_COMMENTS_SUCCES,
    payload: comments,
    error: "",
  };
};
export const loadApiCommentsError = (error) => {
  return {
    type: LOAD_COMMENTS_ERROR,
    payload: error,
  };
};

export const apiCall = () => {
  return (dispatch) => {
    dispatch(loadApiComments());
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        dispatch(loadApiCommentsSucces(res.data));
      })
      .catch((error) => {
        dispatch(loadApiCommentsError(error.message));
      });
  };
};
