import auctionReducer from "./auctionReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auction: auctionReducer,
  user: userReducer
});

export default rootReducer;
