import React, { useState, useEffect } from "react";
import Users from "./src/components/Users";
import ContainerTeams from "./src/components/ContainerTeams";
import AddTeam from "./src/components/AddTeam";
import CreateTeam from "./src/components/CreateTeam";

export const WaitingRoomComponent = () =>{
  return (
    <div className="contenedor">
      <Users />
      <ContainerTeams />
      <div className="container-newTeams">
        <AddTeam />
        <CreateTeam />
      </div>
    </div>
  );
}
