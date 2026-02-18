import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '@/store/slice/userSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

const store =  configureStore({
    reducer : {
        user : UserReducer
    },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store