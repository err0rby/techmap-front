import { configureStore } from "@reduxjs/toolkit";
import course from "../features/courseSlice";
import application from "../features/applicationSlice";

export const store = configureStore({
    reducer: {
        course,
        application,
    }
})