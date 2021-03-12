import { BUY_TV } from "./actionTv";
import { MainData } from "../../data/MainData";

const tvReducer = (state = MainData, action) => {
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        tv: state.tv - 2,
      };
      break;

    default:
      return state;
  }
};
export default tvReducer;
