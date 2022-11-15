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
            localStorage.setItem('users',JSON.stringify(state.value))
            
        },
        removeUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
            localStorage.setItem('users',JSON.stringify(state.value))
        }
    }
})

export const { addUser, removeUser } = detailSlice.actions;
export default detailSlice.reducer;