import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { apiCall } from "./redux/actionComments";

function Comments({ apiData, apiComment }) {
  // const comments = useSelector((state) => state.comments.comments);
  // const dispatch = useDispatch();
  useEffect(() => {
    apiComment();
  }, [apiComment]);

  const displayApiData = apiData.isLoding ? (
    <p>Wait for...</p>
  ) : apiData.error ? (
    <p>{apiData.error}</p>
  ) : (
    apiData.comments.map((comment, index) => {
      return (
        <div key={index}>
          <p> {index} </p>
          <small> {comment.body} </small>
        </div>
      );
    })
  );

  return (
    <div>
      <h2>HELLO</h2>
      {displayApiData}
    </div>
  );
}

// export default Comments;
const mapStateToProps = (state) => {
  return {
    apiData: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    apiComment: () => dispatch(apiCall()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
