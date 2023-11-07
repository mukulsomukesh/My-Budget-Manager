import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import Login from './Login'
import Signup from './Signup'
import PrivateRoute from '../components/PrivateRoute'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <PrivateRoute> <Dashboard />  </PrivateRoute>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
