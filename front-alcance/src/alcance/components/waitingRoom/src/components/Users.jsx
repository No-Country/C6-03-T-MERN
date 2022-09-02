// import { useEffect } from "../index.js";
import { FaUserCircle } from "react-icons/fa";
import "./styles/usersStyle.css";

import { useSelector} from "react-redux"

export default function Users({ infoUser }) {

  const { status, user : username, errorMessage } = useSelector( state => state.auth );
  console.log("user: " + username.name)

  return (
    <div className="userCard">
      <FaUserCircle />
      <h5>Bienvenido {username.name}!</h5>
    </div>
  );
}
