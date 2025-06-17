import "./footer.css"
function Footer(){
    return(
      <>
        <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Cyber-Coffee</h3>
            <p>
              Премиальный кофе с лучших плантаций мира. Свежая обжарка каждую
              неделю.
            </p>
            <div className="social-links">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-telegram"></i></a>
              <a href="#"><i className="fab fa-vk"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Меню</h3>
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Каталог</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">Блог</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Информация</h3>
            <ul>
              <li><a href="#">Доставка и оплата</a></li>
              <li><a href="#">Возврат и обмен</a></li>
              <li><a href="#">Публичная оферта</a></li>
              <li><a href="#">Политика конфиденциальности</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Контакты</h3>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> Москва, ул. Кофейная, 15
              </li>
              <li><i className="fas fa-phone"></i> +7 (495) 123-45-67</li>
              <li><i className="fas fa-envelope"></i> info@beanhaven.ru</li>
              <li><i className="fas fa-clock"></i> Пн-Пт: 9:00-21:00</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Cyber-Coffee. Все права защищены.</p>
        </div>
      </div>
    </footer>
    </>
    )
}
export default Footer