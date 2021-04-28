import { BiSearchAlt } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import Login from './Button/Login';
import Logout from '../Login/Logout';
import './NavbarLogin.css';
 
 
function NavbarLogin() {
 
    const history = useHistory();
 
    function clcHomeButton (){
        history.push('/');
   }
    function clcRegisterButton (){
        history.push('/register');
   }
 
    return (
        <div>
              <div className="navbarContainer">
                <div className="Logo-container">
                <a href="/" className ="navbarLogo">
                    <img className="logo-image" src="image/Logo.jpg" alt="logo"></img></a>
                </div>
                <div className="category-conteiner">
                <a className="category" href="/category">Kategorie</a>
                <div className="dropdown-content">
                            <a className="dropdown-item" href="/">Programowanie PLC</a>
                            <a className="dropdown-item" href="/">Elektryka</a>
                            <a className="dropdown-item" href="/">Napędy elektryczne</a>
                            <a className="dropdown-item" href="/">Przemienniki częstotliwości</a>
                            <a className="dropdown-item" href="/">Pneumatyka i hydraulika</a>
                            <a className="dropdown-item" href="/">Robotyka</a>
                            <a className="dropdown-item" href="/">E-materiały</a>
                </div>
                </div>
                <div className="search-bar-conteiner">
                    <a href="/" className="button-search"><BiSearchAlt/></a>
                    <form className="search-form-input">
                        <input className="input-text-search" type="text" placeholder="Szukaj..." />
                    </form>
                </div>
                <div>
                    
                </div>
                <div className="wspolpraca-conteiner">
                </div>
                <Logout/>
              </div>
        </div>
    )
}
export default NavbarLogin;
 
 
 
 

