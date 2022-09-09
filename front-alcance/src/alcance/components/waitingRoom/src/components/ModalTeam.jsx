import "./styles/usersStyle.css";

export default function ModalTeam({ projectsMatchUser }) {
  return (
    <div className="container-modalTeam">
      {projectsMatchUser.map((project, i) => (
        <div className="modal-team" key={i}>
          <p key={i}>{project.name}</p>
          <div className="container-buttons">
            <button className="ingresar">
              <p>Ingresar</p>
            </button>
            <button className="eliminar">
              <p>Eliminar</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
