import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AlcancePage } from '../alcance'
import { MainPageAuth } from '../auth'
import { useAuthStore } from '../hooks'

export const AppRouterNoLogin = () => {
  const { status, checkAuthToken } = useAuthStore()
  //const authStatus = 'not-authenticated'; //'authenticated'

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
