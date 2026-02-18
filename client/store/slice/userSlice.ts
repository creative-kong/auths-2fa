import { type UserType } from '@/types/index'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState : UserType = {
    user_id : 0,
    first_name : '',
    last_name : '',
    email : '',
    is_email_verified : false
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        login : (state : UserType, action : PayloadAction<UserType>) => {
            return { ...action.payload }
        },
        logout : () => initialState
    }
})

export default userSlice.reducer