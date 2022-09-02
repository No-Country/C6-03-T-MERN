import ModalTeam from "./ModalTeam";
import React from "react";
import {useEffect, useState} from "react"
import {getUsers, getProjects} from "../apis/notasApis"
import "./styles/usersStyle.css";
import { getEnvVariables } from '../../../../../helpers'
const { VITE_API_URL } = getEnvVariables()

export default function ContainerTeams({ infoUser }) {

  const [isLoading, setIsLoading] = useState(true)
  const [projectList, setProjectList] = useState([])
  
  useEffect(() => {
    async function callApi(){
      const response = await getProjects()      
      setProjectList(response.data.data)
      setIsLoading(false)
    }
    callApi()
  }, [])
  
  return (
    <div className="container-teams">
      <h5>Tus equipos de trabajo</h5>
      {!isLoading && Array.isArray(projectList) && projectList > 0 &&
      <ModalTeam projectsId={["12335321", "12335321", "12335321"]} />}
      {!isLoading && (!Array.isArray(projectList) || projectList.length === 0) && 
      <div style={{textAlign: "center", margin: "1rem"}}> No tienes equipos asignados </div>}    
    </div>
  );
}
