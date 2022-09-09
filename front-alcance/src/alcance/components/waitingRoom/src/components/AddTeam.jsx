import "./styles/usersStyle.css";
import {Form, Formik} from 'formik'
const { VITE_API_URL } = getEnvVariables()
import { getEnvVariables } from '../../../../../helpers'
import { editProjects } from "../apis/notasApis"

export default function AddTeam({ infoUser }) {
  console.log(infoUser)
  return (
    <div className="addTeam-modal">
       <Formik id='as'
                initialValues={{
                  _id: "",
                  users: "",
                  // codeProject: "",
                }}
                onSubmit={async (values, actions)=>{
                    values.users = infoUser.uid
                    let idProject = values._id 
                  // console.log(values)
                    try{
                        const response = await editProjects(idProject, values)
                        console.log(response)
                        actions.resetForm()
                    } catch(error){
                        console.error(error)
                    }
                }}
            >
            {({handleChange, handleSubmit, values}) => (
                <Form className="form-create-project" onSubmit={handleSubmit}>
                    <h3>UNIRSE A UN EQUIPO</h3>
                    <div className="container-input">
                        <input 
                          type="text"
                          placeholder="Ingrese el codigo"
                          name="_id"
                          onChange={handleChange} 
                          value={values._id}  
                        />
                    </div>
                    <button type="submit">Unirse</button>
                </Form>
            )}   
            </Formik>
    </div>
  );
}
