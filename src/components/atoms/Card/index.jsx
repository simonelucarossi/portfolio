import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from '../Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faLink } from "@fortawesome/free-solid-svg-icons";

export const Card = ({ image, title, subtitle, dates, description, place, gitHub, site }) => {

    return (    
        <>
            <Col className="img-container">
                <img className="card-img" src={`${image}`} alt="card-cover"/>
            </Col>
            <Col className="body-container">
                <Row className="title-container">
                    {title}
                </Row>
                {
                    subtitle && dates ? (
                        <Row className="subtitle-container">
                            <p className="subtitle">{subtitle}</p> <b>/</b> <p className="subtitle-dates">{dates}</p>
                        </Row>
                    ) : ''
                }
                {
                    place ? (
                        <Row className="place-container">
                            <p className="place">{place}</p>
                        </Row>
                    ) : ''
                }
                <Row>
                    {description}
                </Row>
                <Row className="buttons-container">
                    {
                        gitHub ? (
                            <Button onClick={() => window.open(gitHub)} name="Vedi su GitHub" icon={<FontAwesomeIcon icon={faCodeBranch}/>}/>
                        ) : ''
                    }
                    {
                        site ? (
                            <Button onClick={() => window.open(site)} name="Visita sito web" icon={<FontAwesomeIcon icon={faLink}/>}/>
                        ) : ''
                    }                    
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
    subtitle: PropTypes.string,
    dates: PropTypes.string,
    place: PropTypes.string,
    gitHub: PropTypes.string, 
    site: PropTypes.string
};

export default Card;