import React from "react";
import { Container, Nav } from "react-bootstrap";
import '../styles/App.scss';
import '../styles/index.scss';

import basket  from "../assets/basket.png";

export default function Header() {

    return (
        <div className="header px-4">
            <Nav defaultActiveKey="/home" className="d-flex flex-column gap-4 py-5">
                <Nav.Link eventKey="link-1" className="main-btn header__item">Продукты</Nav.Link>
                <Nav.Link eventKey="link-2" className="main-btn header__item" >О нас</Nav.Link>
                <Nav.Link eventKey="link-3" className="main-btn header__item">Контакты</Nav.Link>
            </Nav>
            <div className="d-flex  flex-column align-items-center py-5">

                <p className="header__text text-center">
                    Откройте для себя идеальное сочетание утонченной матчи. <br/> Каждый глоток — это путешествие в мир вкуса и аромата.
                </p>

                <img className="header__basket" src={basket} alt=""/>
            </div>
        </div>
    )
}
