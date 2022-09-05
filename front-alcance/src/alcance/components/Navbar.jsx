import { useAuthStore, useChatStore } from "../../hooks"


export const Navbar = () => {

  const { startLogout, user } = useAuthStore();
  const { usersList } = useChatStore();

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <div className="container-fluid">
        <span className="navbar-brand">
        <i className="fa-brands fa-asymmetrik"></i>
        &nbsp;
        Alcance App
        </span>       

      <div>
        { usersList?.length !== 0 &&
        <span className="navbar-text"> Chat(  
         { usersList?.length }) {" "}
        </span>}
        <span className="navbar-text">
          { user.name }
        </span>
        &nbsp; &nbsp;
        <button
          className="btn btn-outline-info"
          onClick={ startLogout }
        >
          <i className="fas fa-sign-out-alt"></i>
          &nbsp;
          <span>Salir</span>
        </button>
        </div>
      </div>
    </div>
  )
}
