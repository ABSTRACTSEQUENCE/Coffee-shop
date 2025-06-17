import "./home.css"
function Home(){
    return(
        <div id="main-container">
        <section className="hero">
      <div className="hero-content">
        <h1>Премиальный кофе с лучших плантаций мира</h1>
        <p>
          Откройте для себя уникальные вкусы и ароматы нашего тщательно
          отобранного кофе
        </p>
        <a href="#" className="bt">В каталог</a>
      </div>
    </section>

    <section className="container">
      <h2 className="section-title">Наши хиты</h2>
      <div className="products">
        <div className="product-card">
          <div className="product-image">
            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Эфиопия Сидамо"
            />
          </div>
          <div className="product-info">
            <h3 className="product-title">Эфиопия Сидамо</h3>
            <div className="product-origin">Эфиопия, средняя обжарка</div>
            <div className="product-description">
              Яркие ноты черники и темного шоколада с цветочным послевкусием
            </div>
            <div className="product-price">1 290 ₽ / 250г</div>
            <button className="add-to-cart">В корзину</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img
              src="https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Колумбия Супремо"
            />
          </div>
          <div className="product-info">
            <h3 className="product-title">Колумбия Супремо</h3>
            <div className="product-origin">Колумбия, средняя обжарка</div>
            <div className="product-description">
              Сбалансированный вкус с нотами карамели, орехов и легкой
              цитрусовой кислинкой
            </div>
            <div className="product-price">1 150 ₽ / 250г</div>
            <button className="add-to-cart">В корзину</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Кения AA"
            />
          </div>
          <div className="product-info">
            <h3 className="product-title">Кения AA</h3>
            <div className="product-origin">Кения, светлая обжарка</div>
            <div className="product-description">
              Яркая кислинка с нотами черной смородины и томатной лианы
            </div>
            <div className="product-price">1 450 ₽ / 250г</div>
            <button className="add-to-cart">В корзину</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img
              src="https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Бразилия Сантос"
            />
          </div>
          <div className="product-info">
            <h3 className="product-title">Бразилия Сантос</h3>
            <div className="product-origin">Бразилия, темная обжарка</div>
            <div className="product-description">
              Классический насыщенный вкус с нотами горького шоколада и жареных
              орехов
            </div>
            <div className="product-price">990 ₽ / 250г</div>
            <button className="add-to-cart">В корзину</button>
          </div>
        </div>
      </div>
    </section>

    <section className="about">
      <div className="container about-content">
        <div className="about-text">
          <h2>Наша история</h2>
          <p>
            Cyber-Coffee начал свой путь в 2010 году с маленькой обжарочной в
            центре Москвы. Сегодня мы работаем напрямую с фермерами из 15 стран
            мира, чтобы предложить вам лучшие сорта кофе.
          </p>
          <p>
            Мы тщательно контролируем каждый этап: от сбора урожая до обжарки,
            чтобы в вашей чашке оказался кофе с идеально раскрытым вкусом и
            ароматом.
          </p>
          <a href="#" className="bt">Узнать больше</a>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Наша обжарочная"
          />
        </div>
      </div>
    </section>

    <section className="container testimonials">
      <h2 className="section-title">Отзывы наших клиентов</h2>
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Кофе из Cyber-Coffee - это настоящее искусство! Каждый сорт имеет
            свой уникальный характер. Особенно люблю Эфиопию Сидамо за ее
            цветочные ноты."
          </p>
          <p className="testimonial-author">— Анна К., Москва</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Заказываю здесь кофе уже больше года. Всегда свежая обжарка и
            быстрая доставка. Отличное соотношение цены и качества."
          </p>
          <p className="testimonial-author">— Михаил П., Санкт-Петербург</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Как бариста с 5-летним стажем могу сказать - это один из лучших
            поставщиков кофе в России. Рекомендую!"
          </p>
          <p className="testimonial-author">— Дарья Л., Екатеринбург</p>
        </div>
      </div>
    </section>
</div>
    )
}
export default Home