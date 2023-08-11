import { configureStore } from "@reduxjs/toolkit";
import {BlogsReducer} from './Reduce'

export const store = configureStore({
    reducer: {
        BlogsReducer,
      },
});