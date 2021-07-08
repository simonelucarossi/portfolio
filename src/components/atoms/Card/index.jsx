import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from '../Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faLink } from "@fortawesome/free-solid-svg-icons";

export const Card = ({ image, title, description }) => {

    return (    
        <>
            <Col className="img-container">
                <img className="card-img" src={`${image}`} alt="card-cover"/>
            </Col>
            <Col className="body-container">
                <Row className="title-container">
                    {title}
                </Row>
                <Row>
                    {description}
                </Row>
                <Row className="buttons-container">
                    <Button name="Vedi su GitHub" icon={<FontAwesomeIcon icon={faCodeBranch}/>}/>
                    <Button name="Visita sito web" icon={<FontAwesomeIcon icon={faLink}/>}/>
                </Row>
            </Col>      
        </>
                          
    )
}


Card.defaultProps = { 
    image: '#',
    title: 'Test image',
    description: 'Test description',
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Card;