import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <header>
      <nav className='header-nav'>
        <div className='header-logo'>
          <h3>LOGO</h3>
          </div>
        <div className='header-buttons'>
          <ul>
            Inicio
          </ul>
          <ul>
            Tutoriales
          </ul>
          <ul>
            <FontAwesomeIcon icon ={faSearch}/>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;