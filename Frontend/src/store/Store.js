import { configureStore } from '@reduxjs/toolkit'
import collapseReducer from "../features/collapse/collapseSlice";

export default configureStore({
    reducer: {
        collapsed:collapseReducer
    },
})