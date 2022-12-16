import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Reducer";
import { reducer as nasirReducer } from "../../Reducer/reducer";

const rootReducer = combineReducers({ reducer, nasirReducer });

const composeEnhancers =
  typeof window === "object" && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
