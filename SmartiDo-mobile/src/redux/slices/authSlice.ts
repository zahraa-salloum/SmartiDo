import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isloggedin: false
}

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      login: (state) => {
         state.isloggedin = true
      },
      logout: (state) => {
         state.isloggedin = false
      }
   }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer