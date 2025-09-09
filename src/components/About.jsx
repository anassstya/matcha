import React from "react";
const cafe = new URL('../assets/cafe.png', import.meta.url).href;
import '../styles/index.scss';
import {Col, Row} from "react-bootstrap";

export default function About(){
    return(
        <div className="about">
            <h1 className="sm-header">О нас</h1>
            <Row className="about__content">
                <Col>
                    <img className="about__img" src={cafe} alt=""/>
                </Col>
               <Col>
                   <h2 className="about__title">Наша философия</h2>
                   <p>Мы верим, что каждая чашка должна рассказывать историю. Наш кофе путешествует от далеких плантаций до вашего стола, сохраняя всю полноту вкуса и аромата.</p>
                   <p>Матча для нас — это искусство замедления, момент осознанности в быстром ритме современной жизни.</p>

                   <h2 className="about__title">Качество превыше всего</h2>
                   <p>Мы работаем напрямую с фермерами, обеспечивая справедливую торговлю и высочайшее качество продукции.</p>
                   <p>Каждая партия проходит тщательный отбор и тестирование нашими экспертами.</p>

                   <ul className="about__stats">
                       <li><span className="about__num">6</span> <br/> видов матчи</li>
                       <li><span className="about__num">1000+</span> <br/> Довольных клиентов</li>
                       <li><span className="about__num">3</span> <br/> Года опыта</li>
                   </ul>
               </Col>
            </Row>

        </div>
    )
}