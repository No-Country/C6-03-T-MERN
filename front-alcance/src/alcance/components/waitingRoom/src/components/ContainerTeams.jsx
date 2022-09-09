import ModalTeam from "./ModalTeam";
import React from "react";
import {useEffect, useState} from "react"
import {getProjects} from "../apis/notasApis"
import "./styles/usersStyle.css";
import { getEnvVariables } from '../../../../../helpers'
const { VITE_API_URL } = getEnvVariables()

export default function ContainerTeams({ infoUser }) {

  const [isLoading, setIsLoading] = useState(true)
  const [projectList, setProjectList] = useState([])
  // const [userProjects, setUserProjects] = useState([])

  useEffect(() => {
    async function callApi(){
      const response = await getProjects()      
      setProjectList(response.data.data)
      setIsLoading(false)
    }
    callApi()
  }, [])
  
  let projectsMatchUser = []
  projectList.forEach((project)=>{
    for(let i = 0; i < project.users.length; i++){
      if(project.users[i] == infoUser.uid){
        projectsMatchUser.push(project)
      }
    }
  })
  
  return (
    <div className="container-teams">
      <h5>Tus equipos de trabajo</h5>
      {!isLoading && Array.isArray(projectsMatchUser) && projectsMatchUser.length > 0 &&
      <ModalTeam projectsMatchUser={projectsMatchUser} />}
      {!isLoading && (!Array.isArray(projectList) || projectsMatchUser.length === 0) && 
      <div style={{textAlign:"center", border:"2px solid", borderTop: "none", paddingBottom: "0.5em"}}> No tienes equipos asignados </div>}    
    </div>
  );
}
