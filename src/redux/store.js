import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export let store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);
export let persistor = persistStore(store);
