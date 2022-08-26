import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AlcancePage } from "../alcance";
import { MainPageAuth } from "../auth";
import { useAuthStore } from "../hooks";


export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();
  //const authStatus = 'not-authenticated'; //'authenticated'

  useEffect(() => {
    checkAuthToken();
  }, []);

  if ( status === 'checking' ) {
    return (
      <h3>Cargando...</h3>
    )
  }

  return (
    <Routes>
      {
        ( status === "not-authenticated" )
          ? (
            <>
              <Route path="/auth/*" element={<MainPageAuth />} />
              <Route path="/*" element={<Navigate to="/auth/login" />} />
            </>
          )
          : (
            <>
              <Route path="/" element={<AlcancePage />} >
              </Route>
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )
      }
    </Routes>
  )
}
