
 import { Link } from "react-router-dom"

function Navbar() {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Localstorage</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active"  to="/">Home</Link>
         <Link className="nav-link active"  to="/view">View</Link>
          <Link className="nav-link active"  to="/edit">Edit</Link>
      
      </div>
    </div>
  </div>
</nav>
  </>
  )
}

export default Navbar
