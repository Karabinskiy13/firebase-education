import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slice';

const rootReducer = combineReducers({ userReducer });

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
