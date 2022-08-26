// import { useEffect } from "../index.js";
import { FaUserCircle } from "react-icons/fa";
import "./styles/usersStyle.css"

export default function Users({ infoUser }) {
  return (
    <div className="userCard">
      <FaUserCircle />
      <h5>Bienvenido "Usuario"!</h5>
    </div>
  );
}
