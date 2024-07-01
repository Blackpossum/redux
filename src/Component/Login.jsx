import React from 'react'
// for modifying values // for accesing values
import { useDispatch} from 'react-redux'
import {Login, Logout} from '../features/User'


function LoginButton() {
    // initiate the function
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => {dispatch(Login(
            // payload
            {
                name:"Andrea Bianchi",
                age:29,
                email:"Andrea@contoso.com",
            }
        ))}}>Log in</button>
        <button onClick={() => {dispatch(Logout())}}>
            Log Out 
        </button>
    </div>
  )
}

export default LoginButton