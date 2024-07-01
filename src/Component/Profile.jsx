import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    // initialize variable to contain useSelector function
    const user = useSelector((state) => state.user.value)
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Username:{user.name}</p>
        <p>Age:{user.age}</p>
        <p>Email:{user.email}</p>
    </div>
  )
}

export default Profile