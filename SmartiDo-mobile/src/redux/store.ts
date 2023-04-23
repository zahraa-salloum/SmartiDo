import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'


const reducer = {
   auth: authReducer,
}

export const store = configureStore({
   reducer
})