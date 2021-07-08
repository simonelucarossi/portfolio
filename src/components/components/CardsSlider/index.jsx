import PropTypes from 'prop-types';
import React from 'react';
import { Col } from 'react-bootstrap';
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Card from '../../atoms/Card';

export const CardsSlider = ({ cards, backFunction, forwardFunction, activeCard}) => {

    return (    
        <>
            <div className="cardContainer">
                
                {
                    activeCard !== 0 ? (
                        <Col style={{ marginRight: '45px', marginLeft: '-45px'}}>
                            <IoArrowBack className="arrow-icon" onClick={backFunction}/>
                        </Col>
                    ) : (
                        <Col style={{ marginRight: '45px', marginLeft: '-45px'}}>
                            <IoArrowBack className="arrow-icon" onClick={() => console.log('')} style={{cursor: 'default', opacity:'0'}}/>
                        </Col>
                    )
                } 
                 
                <Card title={cards[activeCard].title} image={cards[activeCard].imageUrl} description={cards[activeCard].description}
                    subtitle={cards[activeCard].subtitle} dates={cards[activeCard].dates}/>
                
                
                {
                    activeCard !== (cards.length - 1) ? (
                        <Col style={{ marginRight: '-45px', marginLeft: '20px'}}>
                            <IoArrowForward className="arrow-icon" onClick={forwardFunction}/>
                        </Col>  
                    ) : (
                        <Col style={{ marginRight: '-45px', marginLeft: '20px'}}>
                            <IoArrowForward className="arrow-icon" onClick={() => console.log('')} style={{cursor: 'default', opacity:'0'}}/>
                        </Col>
                    )
                }
                
            </div>
        </>
                          
    )
}


CardsSlider.defaultProps = { 
    cards: [],
    backFunction: () => { console.log('') },
    forwardFunction: () => { console.log('') },
    activeCard: 0,
};

CardsSlider.propTypes = {
    cards: PropTypes.array,
    backFunction: PropTypes.func,
    forwardFunction: PropTypes.func,
    activeCard: PropTypes.number,
};

export default CardsSlider;