/* 
	該文件專門用於暴露一個store對象，整個應用只有一個store對象
*/

//引入createStore，專門用於創建redux中最為核心的store對象
import { createStore, applyMiddleware, combineReducers } from "redux";
//引入為Count組件服務的reducer
import countReducer from "./reducers/count";
//引入為Count組件服務的reducer
import personReducer from "./reducers/person";
//引入redux-thunk，用於支持異步action
import thunk from "redux-thunk";

//匯總所有的reducer變為一個總的reducer
const allReducer = combineReducers({
  he: countReducer,
  rens: personReducer,
});

//暴露store
export default createStore(allReducer, applyMiddleware(thunk));
