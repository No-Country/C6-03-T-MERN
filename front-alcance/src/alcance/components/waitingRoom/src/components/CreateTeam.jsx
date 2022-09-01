import "./styles/usersStyle.css"
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";

export default function CreateTeam(){
    
    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/alcancePage')
    }


    return(
        <div className="addTeam-modal">
            <h3>CREAR EQUIPO NUEVO</h3>
            <button onClick={handleNavigate}>CREAR</button>
        </div>
    )
}