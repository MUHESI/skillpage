import { BUY_PHONE } from "./actionPhone";
import { MainData } from "../../data/MainData";

const phoneReducer = (state = MainData, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
      };
      break;

    default:
      return state;
  }
};
export default phoneReducer;
