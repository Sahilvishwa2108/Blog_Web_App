import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='px-4 py-2 text-gray-200 bg-red-600/80 hover:bg-red-600 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm border border-red-600/30 hover:border-red-600'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn