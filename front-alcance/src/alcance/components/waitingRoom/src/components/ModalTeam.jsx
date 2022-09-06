import "./styles/usersStyle.css";

export default function ModalTeam({ projectsId }) {
  return (
    <div className="container-modalTeam">
      {projectsId.map((project, i) => (
        <div className="modal-team" key={i}>
          <p>Equipo {i + 1}</p>
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
