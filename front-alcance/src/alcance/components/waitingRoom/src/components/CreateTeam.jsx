import "./styles/usersStyle.css"
import { getEnvVariables } from '../../../../../helpers'

const { VITE_API_URL } = getEnvVariables()


export default function CreateTeam(){
    
    // let navigate = useNavigate();

    // const handleNavigate = () => {
    //     navigate('/alcancePage')
    // }


    return(
        <div className="addTeam-modal">
            <h3>CREAR EQUIPO NUEVO</h3>
            <button onClick={function(){
                let formCreateProject = document.querySelector('.formCreate')
                formCreateProject.style.display = 'block';
            }}>
                CREAR
            </button>
        </div>
    )
}