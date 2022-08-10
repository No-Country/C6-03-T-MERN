import { Navigate, Route, Routes } from "react-router-dom";
import { AlcancePage } from "../alcance";
import { MainPageAuth } from "../auth";


export const AppRouter = () => {

  // Temporal ToDo: Token
  const authStatus = 'not-authenticated'; //'authenticated'

  return (
    <Routes>
      {
        ( authStatus === "not-authenticated" )
          ? (
            <>
              <Route path="/auth/*" element={<MainPageAuth />} />
              <Route path="/*" element={<Navigate to="/auth/login" />} />
            </>
          )
          : (
            <>
              <Route path="/" element={<AlcancePage />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )
      }
    </Routes>
  )
}
