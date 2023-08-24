import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  admin: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAdmin: (state, {payload}) => {
      state.value += payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAdmin } = userSlice.actions

export default userSlice.reducer