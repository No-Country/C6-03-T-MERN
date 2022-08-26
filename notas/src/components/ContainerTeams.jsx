import ModalTeam from "./ModalTeam"
import React from "react"
import "./styles/usersStyle.css"

export default function ContainerTeams({infoUser}){
    
    return(
        <div className="container-teams">
            <h5>Tus equipos de trabajo</h5>
            <ModalTeam projectsId={["12335321", '09324730','455634123', '95201223']}/>
        </div>
    )
}