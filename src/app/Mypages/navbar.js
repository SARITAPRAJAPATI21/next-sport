import Image from "next/image";
import './css/navbar.module.css'


export default function Navbar() {

 
    return (
 
             
        <nav className="navbar navbar-expand-lg bg-#553D1D " id="main" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><Image src="/logo.png"  height={40} width={120}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/login">Login</a>
        <a className="nav-link" href="/register">join</a>
        <a className="nav-link" href="/favq">favq</a>

      </div>
    </div>
  </div>
</nav>
          
  
    );
  }