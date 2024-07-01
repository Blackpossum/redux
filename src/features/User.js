import { createSlice } from '@reduxjs/toolkit'


const initialStateValue = {
    value: { name: '', age: 0, email: '' },
}

export const userSlice = createSlice({
    name: 'user',
    initialState:{ value:initialStateValue},
    reducers: {
        Login(state,action){
            state.value = action.payload
        },
        Logout(state,action){
            state.value = initialStateValue
        }
    }
})

// export the actions for modify the state
export const { Login,Logout } = userSlice.actions
export default userSlice.reducer;