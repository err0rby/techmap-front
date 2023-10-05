import { configureStore } from "@reduxjs/toolkit";
import course from "../features/courseSlice";

export const store = configureStore({
    reducer: {
        course,
    }
})