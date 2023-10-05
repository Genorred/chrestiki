import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Game from "./pages/game/Game";
import History from "./pages/history/History";
import { Navigate } from "react-router-dom";


const AppRouter = () => {
  return (
    <Routes>
     <Route path="/*" element={<Navigate to='/login' replace/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/game" element={<Game/>}></Route>
     <Route path="/history" element={<History/>}></Route>

    </Routes>
  )
}

export default AppRouter

