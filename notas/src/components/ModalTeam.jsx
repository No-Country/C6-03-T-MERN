import "./styles/usersStyle.css";

export default function ModalTeam({ projectsId }) {
  return (
    <div className="container-modalTeam">
      {console.log(projectsId)}
      {projectsId.map((project, i) => (
        <div className="modal-team" key={i}>
          <p>Equipo {i + 1}</p>
          <div className="container-buttons">
            <button class="ingresar">
              <p>Ingresar</p>
            </button>
            <button class="eliminar">
              <p>Eliminar</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
