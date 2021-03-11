import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyPhone } from "../components/phone/actionPhone";

function PhoneComponent() {
  const PHONES = useSelector((state) => state.phones);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Phone Conponent</h4>
      <div>
        <p>
          Disponible : <strong> {PHONES} </strong>
        </p>

        <button className="btn btn-primary" onClick={dispatch(buyPhone)}>
          Buy Phone
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

export default PhoneComponent;
