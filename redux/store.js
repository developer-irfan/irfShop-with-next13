import { legacy_createStore } from "redux";
import mainReducer from "./Reducers/rootReducer";

//store creation
let store;
if (typeof window !== "undefined") {
  store = legacy_createStore(
    mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = legacy_createStore(mainReducer);
}

export default store;
