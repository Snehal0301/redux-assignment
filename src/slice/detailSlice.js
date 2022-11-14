import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

const detailSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, {payload}) => {
            state.value.push(payload)
            // localStorage.setItem('users', JSON.stringify(state.value))
        },
        removeUser: (state, { payload }) => {
            state.value = state.value.filter((user) => user.id !== payload.id)
            // localStorage.setItem('users', JSON.stringify(state.value))
        }
    }
})

export const { addUser, removeUser } = detailSlice.actions;
export default detailSlice.reducer;