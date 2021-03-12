import { createStore, combineReducers } from "redux";

import tvReducer from "./redux/reducerTv";

import phoneReducer from "./redux/reducerPhone";

const rootReducer = combineReducers({
  telephones: phoneReducer,
  television: tvReducer,
});

const store = createStore(rootReducer);
export default store;
