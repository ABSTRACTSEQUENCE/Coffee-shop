import "./catalog.css";
import { useState } from "react";
function Catalog(){
    return(
        <>
        <section className="catalog-hero">
        <div className="hero-content">
            <h1>Наш каталог кофе</h1>
            <p>Выберите свой идеальный вкус из более чем 50 сортов</p>
        </div>
    </section>

    <section className="container">
        <div className="filter-bar">
            <div className="filter-group">
                <label htmlFor="category">Категория</label>
                <select id="category">
                    <option value="all">Все категории</option>
                    <option value="single">Моносорта</option>
                    <option value="blend">Купажи</option>
                    <option value="decaf">Без кофеина</option>
                </select>
            </div>
            
            <div className="filter-group">
                <label htmlFor="roast">Обжарка</label>
                <select id="roast">
                    <option value="all">Любая</option>
                    <option value="light">Светлая</option>
                    <option value="medium">Средняя</option>
                    <option value="dark">Тёмная</option>
                </select>
            </div>
            
            <div className="filter-group">
                <label htmlFor="origin">Страна происхождения</label>
                <select id="origin">
                    <option value="all">Все страны</option>
                    <option value="brazil">Бразилия</option>
                    <option value="colombia">Колумбия</option>
                    <option value="ethiopia">Эфиопия</option>
                    <option value="kenya">Кения</option>
                </select>
            </div>
            
            <div className="filter-group">
                <label htmlFor="price">Цена, ₽</label>
                <input type="range" id="price" min="500" max="3000" step="100" value="3000"/>
                <span id="price-value">до 3000</span>
            </div>
        </div>
        
        <div className="product-category">
            <h2 className="category-title">Моносорта</h2>
            <div className="products">
                <div className="product-card">
                    <div className="product-image">
                        <img src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Эфиопия Сидамо"/>
                    </div>
                    <div className="product-info">
                        <h3 className="product-title">Эфиопия Сидамо</h3>
                        <div className="product-origin">Эфиопия, средняя обжарка</div>
                        <div className="product-description">Яркие ноты черники и темного шоколада с цветочным послевкусием</div>
                        <div className="product-price">1 290 ₽ / 250г</div>
                        <button className="add-to-cart">В корзину</button>
                    </div>
                </div>
                
            </div>
        </div>
        
        <div className="product-category">
            <h2 className="category-title">Купажи</h2>
            <div className="products">
            </div>
        </div>
        
        <div className="product-category">
            <h2 className="category-title">Кофе без кофеина</h2>
            <div className="products">
            </div>
        </div>
    </section>
        
        </>
    )
}
export default Catalog