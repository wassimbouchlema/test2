import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer/reducer";
import {composeWithDevTools} from "redux-devtools-extension"

//setting up store with middleware and redux dev tools viewers
const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store