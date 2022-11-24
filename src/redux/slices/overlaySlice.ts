import { createSlice } from "@reduxjs/toolkit";


interface initialState {
    blocked : boolean
}

const initialState: initialState = {
    blocked : false
}

const overlaySlice = createSlice({
    name: 'overlay',
    initialState: initialState,
    reducers:{
        setBlocked: (state, action) => {
            state.blocked = action.payload
        }
    }
})

export const {setBlocked} = overlaySlice.actions
export const overlay = overlaySlice.reducer