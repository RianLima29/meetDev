import { createSlice } from "@reduxjs/toolkit";
import {User} from 'firebase/auth'
import {useSelector} from 'react-redux'
import { RootState } from "../store";


interface initialState {
    user: User | null
}

const initialState: initialState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const useGetUser = ()=>{
    const user = useSelector((state:RootState) => state.user)
    return user
}
export const {setUser} = userSlice.actions
export const user = userSlice.reducer