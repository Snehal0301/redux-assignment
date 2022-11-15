import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

const detailSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        removeUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        }
    }
})

export const { addUser, removeUser } = detailSlice.actions;
export default detailSlice.reducer;