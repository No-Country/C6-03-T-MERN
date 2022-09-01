import ModalTeam from "./ModalTeam";
import React from "react";
import {useEffect} from "react"
import {getUsers} from "../apis/notasApis"
import "./styles/usersStyle.css";

export default function ContainerTeams({ infoUser }) {
  
  useEffect(() => {
    async function projectsUser(){
      const response = await getUsers()
      console.log(response.data)
    }
    projectsUser()
  }, [])
  
  return (
    <div className="container-teams">
      <h5>Tus equipos de trabajo</h5>
      <ModalTeam projectsId={["12335321", "12335321", "12335321"]} />
    </div>
  );
}
