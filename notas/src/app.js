import React, { useState, useEffect } from "react";
import Users from "./components/Users";
import ContainerTeams from "./components/ContainerTeams";
import AddTeam from "./components/AddTeam";
import CreateTeam from "./components/CreateTeam";

export default function App() {
//   const [projects, setProjects] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3000/api/v1/projects/list")
//       .then((res) => res.json())
//       .then((data) => setProjects(data));
//   }, []);

  const [infoUser, setInfoUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/users/list")
      .then((res) => res.json())
      .then((data) => setInfoUser(data));
  }, []);

  if(infoUser.length){
    console.log(infoUser)
  }

  return (
    <div class="contenedor">
      <Users infoUser={infoUser} />
      <ContainerTeams infoUser={infoUser} />
      <div className="container-newTeams">
        <AddTeam />
        <CreateTeam />
      </div>
    </div>
  );
}
