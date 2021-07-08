import PropTypes from 'prop-types';
import React from 'react';
import ButtonContainer from './style.js';

export const Button = ({ name, className, onClick, width, height, borderColor, icon}) => {

    return (
        <>
            <ButtonContainer className={className} onClick={onClick} width={width} height={height} borderColor={borderColor}>
                <div className="buttonContainer">
                    { icon?
                        (icon) : ''
                    }
                    <p>{ name }</p>
                </div>
            </ButtonContainer>
        </>
    )
}


Button.defaultProps = { 
    name: "Test",
    className: "test",
    onClick: () => { console.log('') },
    width: 30,
    height: 30, 
    borderColor: 'blue',    
};

Button.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    borderColor: PropTypes.string,
};

export default Button;