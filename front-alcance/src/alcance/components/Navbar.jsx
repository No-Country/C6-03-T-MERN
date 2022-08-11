

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <div className="container-fluid">
        <span className="navbar-brand">
        <i className="fa-brands fa-asymmetrik"></i>
        &nbsp;
        Alcance App
        </span>

      <div>
        <span className="navbar-text">
          Usuario
        </span>
        &nbsp; &nbsp;
        <button className="btn btn-outline-info">
          <i className="fas fa-sign-out-alt"></i>
          &nbsp;
          <span>Salir</span>
        </button>
        </div>
      </div>
    </div>
  )
}
