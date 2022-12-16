import { legacy_createStore } from "redux";
import { reducer as nasirReducer } from "./reducer";

const store = legacy_createStore(nasirReducer);

export { store };
