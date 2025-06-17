import { Link } from "react-router-dom";
import "./header.css"
function Header(){
    return (
  <header>
      <div className="container header-content">
        <div className="logo">
          <i className="fas fa-coffee"></i>
          <span>CyberCoffee</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
            <li>
              <div className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">0</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
        );
    }
    export default Header;
