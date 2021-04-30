import PropTypes from 'prop-types';
import TabContainer from './style';
import React from 'react';

export const Tab = ({ name, className, onClick, width, height, borderColor, active = false}) => {

    return (
        <>
            <TabContainer className={className} onClick={onClick} width={width} height={height} borderColor={borderColor}
                active={active}>
                <p>{ name }</p>
            </TabContainer>
        </>
    )
}


Tab.defaultProps = { 
    name: "Test",
    className: "test",
    active: 'false',
    onClick: () => { console.log('') },
    width: 30,
    height: 30, 
    borderColor: 'blue',    
};

Tab.propTypes = {
    name: PropTypes.string,
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    borderColor: PropTypes.string,
};

export default Tab;