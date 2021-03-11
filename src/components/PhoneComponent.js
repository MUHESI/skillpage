import React from "react";
import { connect } from "react-redux";
import { buyPhone } from "../components/phone/actionPhone";

function PhoneComponent({ PHONES, BUYPHONE }) {
  return (
    <div>
      <h4>Phone Conponent</h4>
      <div>
        <p>
          Disponible : <strong>{PHONES} </strong>
        </p>

        <button
          onClick={() => {
            BUYPHONE();
          }}
        >
          Buy Phone
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  //   console.log(props);
  return {
    PHONES: state.phones,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    BUYPHONE: () => dispatch(buyPhone()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
