import { AnyAction } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import logger from "redux-logger";
import app from "../reducers/appReducer";

const store = configureStore({
    reducer: {
        app,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>;
