import React from "react";
import {Col, Row} from "react-bootstrap";

export default function Footer(){
    return (
        <footer className="footer">
            <div>
                <Row>
                    <Col xs={12} sm={12} md={4} className="footer__logo">
                        <h3 className="footer__name">Brew & Blend</h3>
                        <p>Твоя энергия в каждой чашке 🍵</p>
                    </Col>
                    <Col xs={6} sm={6} md={4} className="footer__links">
                        <h5 className="footer__heading">Навигация</h5>
                        <ul>
                            <li><a href="/">Главная</a></li>
                            <li><a href="/products">Продукты</a></li>
                            <li><a href="/contacts">Контакты</a></li>
                            <li><a href="/about">О нас</a></li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={6} md={4} className="footer__contacts">
                        <h5 className="footer__heading">Контакты</h5>
                        <p>ул. Зелёная, 15, Москва</p>
                        <p>📞 +7 (999) 123-45-67</p>
                        <p>✉️ info@matcha-cafe.ru</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="footer__bottom">
                        <p>© {new Date().getFullYear()} Brew & Blend. Все права защищены.</p>
                    </Col>
                </Row>
            </div>
        </footer>
    );
}