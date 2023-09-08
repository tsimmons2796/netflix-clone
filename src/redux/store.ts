import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

const rootReducers = combineReducers({
  movie: movieReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
