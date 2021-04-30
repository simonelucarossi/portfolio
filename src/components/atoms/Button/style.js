import styled from 'styled-components';

export const ButtonContainer = styled.div`
    min-width: ${(props) => (props.width === true ? props.width  : '200px')};
    width: ${(props) => (props.width === true ? props.width  : '200px')};
    height: 50px;
    background-color: black;
    transition: color 0.8s ease;
    transition: background-color 0.8s ease;
    margin-top: 5px;
    margin-right: 15px;
    border-radius: 4px;

    p {
        text-align: left;
        font-size: 17px;
        padding-bottom: 0;
        height: 100%;
        vertical-align: middle;
        padding: 10px;
        width: 100%;
    }

    

    :hover {
        background-color: white;
        border: 1px solid black;
        cursor: pointer;
    }

    button-icon {
        width: 30px;
        height: 30px;
    }

    .buttonContainer {
        display: flex;
        color: white;
        transition: color 0.8s ease;
        width: 100%;
        text-align: center;
    }

    .buttonContainer:hover {
        color: black;
    }

    .buttonContainer svg {
        font-size: 18px;
        margin-left: 10%;
        margin-top: 7%;
        height: 100%;
    }
`;

export default ButtonContainer;