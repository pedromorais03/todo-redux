import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
   name: "todos",
   initialState: {
      list: [],
      filter: "all"
   }
})

export default todoSlice.reducer