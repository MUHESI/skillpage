import React from "react";
import { connect } from "react-redux";
import { buyPhone } from "../components/phone/actionPhone";

function PhoneComponent({ PHONES }) {
  return (
    <div>
      <h4>Phone Conponent</h4>

      <p>
        Disponible : <strong>{PHONES} </strong>
      </p>
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
    buyPhone: () => dispatch(buyPhone()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
