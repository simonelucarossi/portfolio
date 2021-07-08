import styled from 'styled-components';

export const TabContainer = styled.span`
    min-width: ${(props) => (props.width ? props.width  : '300px')};
    min-height: ${(props) => (props.height ? props.height : '100px')};
    border-bottom: ${(props) => (props.active === true ? '1px solid' : '')};
    border-color: ${(props) => (props.borderColor ? props.borderColor : 'black')};
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '5px')};
    margin-right: ${(props) => (props.marginRight ? props.marginRight : '5px')};
    color: ${(props) => (props.active ? 'black' : '#c3c3c3')};
    transition: color 0.8s ease;
    cursor: pointer;
    padding-right: 5px;
    padding-left: 5px;

    :hover {
        color: black;
    }

    p {
        text-align: center;
        padding: 2px;
        font-size: 17px;
        padding-bottom: 0;
    }
`;

export default TabContainer;

