import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyTV } from "./redux/actionTv";

function TvContenair() {
  //   const television = useSelector((state) => state.tv.phones);
  const television = useSelector((state) => state.television.tv);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>TV Conponent TV</h4>
      <div>
        <p>
          Disponible : <strong> {television} </strong>
        </p>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(buyTV());
          }}
        >
          Buy televison
        </button>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     PHONES: state.phones,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     BUYPHONE: () => dispatch(buyPhone()),
//   };
// };

//  export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);

export default TvContenair;
