import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import phoneReducer from "./redux/reducerPhone";
import tvReducer from "./redux/reducerTv";
import commentsReducer from "./redux/reducerComments";

const rootReducer = combineReducers({
  telephones: phoneReducer,
  television: tvReducer,
  comments: commentsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
