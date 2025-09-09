import React from "react";
import {Card, ListGroup} from "react-bootstrap";

export default function ItemCard({ img, title, desc, price, onClick }) {
    return(
        <Card style={{ width: '18rem' }} className="shadow-sm products__item"  onClick={onClick}>
            <Card.Img
                variant="top"
                src={img}
                alt={title}
                className="products__img"
            />
            <Card.Body className="products__body">
                <Card.Title className="products__title">{title}</Card.Title>
                <Card.Text className="products__text">{desc}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {Object.entries(price).map(([size, value]) => (
                    <ListGroup.Item key={size} className="products__price">
                        {size} — <span className="products__prc" >{value} ₽</span>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    )
}
