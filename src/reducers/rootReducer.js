import auctionReducer from "./auctionReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ auction: auctionReducer });

export default rootReducer;
