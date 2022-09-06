import "./styles/usersStyle.css"
import { getEnvVariables } from '../../../../../helpers'
const { VITE_API_URL } = getEnvVariables()
import { useEffect } from "react"
import {Form, Formik} from 'formik'
import { createProjects } from "../apis/notasApis"


export function FormCreateTeam(){
    return(
        <div className="formCreate">
            <button 
                class="x-button" 
                id="x-button-formAddUser"
                onClick={function(){
                    let formCreateProject = document.querySelector('.formCreate')
                    formCreateProject.style.display = 'none';
                }}    
            >
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
            <Formik
                initialValues={{
                    name: "",
                    users: [],
                    startTime: "",
                    endTime: ""
                }}
                onSubmit={async (values, actions)=>{
                    console.log(values)
                    try{
                        const response = await createProjects(values)
                        console.log(response)
                        actions.resetForm()
                    } catch(error){
                        console.error(error)
                    }
                }}
            >
            {({handleChange, handleSubmit, values}) => (
                <Form className="form-create-project" onSubmit={handleSubmit}>
                    <h4>Nuevo proyecto de trabajo</h4>
                    <div className="container-input">
                        <label>Nombre del proyecto</label>
                        <input 
                            type="text" 
                            name="name"
                            onChange={handleChange}
                            value={values.name} 
                        />
                    </div>
                    <div className="container-input">
                        <label>Agregar usuarios:</label>
                        <input 
                            type="email"
                            name="users"
                            onChange={handleChange} 
                            value={values.users}  
                        />
                    </div>
                    <div className="container-input">
                        <label>Inicio del proyecto</label>
                        <input 
                            type="date"
                            name="startTime" 
                            onChange={handleChange} 
                            value={values.startTime}
                        />
                    </div>
                    <div className="container-input">
                        <label>Fin del proyecto</label>
                        <input 
                            type="date"
                            name="endTime"
                            onChange={handleChange} 
                            value={values.endTime}  
                        />
                    </div>
                    <button className="add-project-button" type="submit" >Crear</button>
                </Form>
            )}   
            </Formik>
        </div>
    )
}