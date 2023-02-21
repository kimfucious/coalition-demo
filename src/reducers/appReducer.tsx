import { createAction, createReducer } from "@reduxjs/toolkit";
import { ActionType, NavPage, NavTab } from "../types";

const initialState = {
    pageName: NavPage.HERO,
    tabName: NavTab.MOUNTAIN_1,
};

const updatePage = createAction<NavPage>(ActionType.UPDATE_PAGE);
const updateTab = createAction<NavTab>(ActionType.UPDATE_TAB);
const reducer = createReducer({ ...initialState }, (builder) => {
    builder.addCase(updatePage, (state, action) => {
        return {
            ...state,
            pageName: action.payload,
        };
    });
    builder.addCase(updateTab, (state, action) => {
        return {
            ...state,
            tabName: action.payload,
        };
    });
});

export default reducer;
