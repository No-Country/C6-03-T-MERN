// import { useEffect } from "../index.js";
// import { IconName } from "react-icons/fa";

export default function Users({ infoUser }) {
  return (
    <div>
      <h1>Bienvenido {infoUser.name}!</h1>
      <h3>Projectos del usuario:</h3>
      <p>{infoUser.projectsId}</p>
      {console.log(infoUser)}
    </div>
  );
}
