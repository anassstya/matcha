import React, {useState} from "react";
import '../styles/App.scss';
import '../styles/index.scss';
import {Button, Row, Col, Modal} from "react-bootstrap";
import ItemCard from "./ItemCard.jsx";
import { matchaReady } from "../data.jsx";
import { matchaPowder } from "../data.jsx";
const addToBasket = new URL('../assets/addToBasket.png', import.meta.url).href;

export default function Products() {

    const [selectedCategory, setSelectedCategory] = useState('ready-drinks');
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const data = selectedCategory === 'ready-drinks' ? matchaReady : matchaPowder;


    const changeCategory = (category) => {
        setSelectedCategory(category);
    }

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setShow(true);
    };


    return (
        <div className="products px-4">
            <h1 className="sm-header">Продукты</h1>
            <div className="products__btns">
                <Button className='main-btn products__btn' onClick={() => changeCategory('ready-drinks')}>Готовые напитки</Button>
                <Button className='main-btn products__btn' onClick={() => changeCategory('powder-drinks')}>Домашние смеси</Button>
            </div>

            <Row className="mt-4">
                {data.map(item => (
                    <Col key={item.id} xs={12} sm={6} md={4} className="mb-4 text-center  products__items">
                        <ItemCard
                            img={item.image}
                            title={item.name_ru}
                            desc={item.description}
                            price={item.price}
                            onClick={() => handleItemClick(item)}
                        />
                    </Col>
                ))}
            </Row>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                className="modal-itm"
                centered
            >
                {selectedItem && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title className="modal-itm__title">{selectedItem.name_ru}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-center modal-itm__body">
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.name_ru}
                                className="img-fluid mb-3 modal-itm__img"
                            />
                            <p>{selectedItem.description}</p>

                            {selectedItem.ingredients && (
                                <>
                                    <p><span className="modal-itm__span">Тип:</span> {selectedItem.type}</p>
                                    <p><span className="modal-itm__span">Состав:</span> {selectedItem.ingredients.join(", ")}</p>
                                    <p><span className="modal-itm__span">Без лактозы:</span> {selectedItem.dairy_free ? 'да' : 'нет'}</p>
                                    <p><span className="modal-itm__span">Кол-во кофеина:</span> {selectedItem.caffeine_mg_est}</p>
                                    <p><span className="modal-itm__span">Доступно во всех кофейнях города</span></p>

                                </>
                            )}

                            {selectedItem.origin && (
                                <>
                                    <p><span className="modal-itm__span">Происхождение:</span> {selectedItem.origin}</p>
                                    <p><span className="modal-itm__span">Сорт:</span> {selectedItem.grade}</p>
                                    <p><span className="modal-itm__span">Вес:</span> {selectedItem.weight_g.join(", ")} г</p>
                                    <p><span className="modal-itm__span">Кофеин (на порцию):</span> {selectedItem.caffeine_mg_per_serving} мг</p>
                                    <p><span className="modal-itm__span">Упаковка:</span> {selectedItem.packaging}</p>
                                    <img src={addToBasket} alt="addToBasket" className="modal-itm__addToBasket"/>
                                </>
                            )}
                        </Modal.Body>
                    </>
                )}
            </Modal>
        </div>
    )
}
