import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";




export default function Contacts(){
    return(
        <div className="contacts">
            <h1 className="sm-header">Контакты</h1>
            <div className="contacts__content">
                <p className="text-center">Готовы открыть для себя мир премиального кофе и матчи? Мы всегда рады помочь!</p>
                <Row className="contacts__row">
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label className="contacts__label">Имя</Form.Label>
                                <Form.Control className="contacts__control" type="text" placeholder="Введите ваше имя" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="contacts__label">Email</Form.Label>
                                <Form.Control className="contacts__control" type="email" placeholder="Введите ваш email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label className="contacts__label">Сообщение</Form.Label>
                                <Form.Control className="contacts__control" as="textarea" rows={4} placeholder="Ваше сообщение" />
                            </Form.Group>

                            <Button variant="success" type="submit" className="main-btn contacts__btn">
                                Отправить
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <h3 className="contacts__heading">Наши контакты</h3>
                        <p className="contacts__text"><strong>Адрес:</strong> ул. Зелёная, 15, Москва</p>
                        <p className="contacts__text"><strong>Телефон:</strong> +7 (999) 123-45-67</p>
                        <p className="contacts__text"><strong>Email:</strong> info@matcha-cafe.ru</p>
                        <p className="contacts__text"><strong>Время работы:</strong> 09:00 – 21:00 (ежедневно)</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}