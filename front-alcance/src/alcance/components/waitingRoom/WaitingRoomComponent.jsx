import React, { useState, useEffect } from "react";
import Users from "./src/components/Users";
import ContainerTeams from "./src/components/ContainerTeams";
import AddTeam from "./src/components/AddTeam";
import CreateTeam from "./src/components/CreateTeam";
import { FormCreateTeam } from "./src/components/FormCreateTeam";
import { useAuthStore } from "../../../hooks";

export const WaitingRoomComponent = () =>{
  const {user} = useAuthStore()
  console.log(user)
  return (
    <div className="contenedor">
      <Users />
      <ContainerTeams infoUser={user} />
      <div className="container-newTeams">
        <AddTeam infoUser={user} />
        <CreateTeam />
      </div>
        <FormCreateTeam/>
    </div>
  );
}
