import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AlcancePage } from '../alcance'
import { useAuthStore } from '../hooks'

export const AppRouterNoLogin = () => {
  const { status, checkAuthToken } = useAuthStore()  

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === 'checking') {
    return <h3>Cargando...</h3>
  }

  return (    
      <Routes>
        <Route path="/" element={<AlcancePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>    
  )
}
