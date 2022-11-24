import {configureStore} from '@reduxjs/toolkit'
import { user } from './slices/userSlice'
import { overlay } from './slices/overlaySlice'

export const store = configureStore({
    reducer: {
        user,
        overlay
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export type RootState = ReturnType<typeof store.getState>