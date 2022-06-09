import { configureStore } from "@reduxjs/toolkit";
import departmentsReducer from "./departmentsSlice";

export default configureStore({
    reducer: {
        departments: departmentsReducer
    }
})