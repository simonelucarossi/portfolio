import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Tab } from '../../components/atoms/Tab';
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { style } from './dashboard.css';
import { Col, Row } from 'react-bootstrap';
import cards from './cards.json'
import Button from '../../components/atoms/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faLink } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeProject, setActiveProject] = useState(0);

    return (
        (
            <div className="page-container">

               <div className="up-container">
                   Welcome on my site!
               </div>
               <div className="profile-picture-container">
                   <img 
                   alt="profile"
                   style={{
                       maxHeight: '150px',
                       maxWidth: '150px',
                       border: '2px solid rgb(240 240 240 / 97%)',
                       borderRadius: '5000px'
                   }} src="https://media-exp1.licdn.com/dms/image/C4D03AQEdPG5RQBzwVg/profile-displayphoto-shrink_800_800/0/1611221032606?e=1625097600&v=beta&t=mLnYGhlgYsknj0XH94xgPBUcDdkXzmECa_p46oaA8mg"/>
               </div>
               <div style={{
                       minWidth: '100vw',
                       height: '3px',
                       marginBottom: '70px',
                       backgroundColor: 'black',
                       marginTop: '-68px',
               }}></div>
               <div style={{
                       minWidth: '100vw',
                       height: '3px',
                       marginBottom: '70px',
                       backgroundColor: '#e9e9e9',
                       marginTop: '-64px',
               }}></div>
               <div style={{ display: 'flex', width: '100vw', marginTop: '25px'}}>
                   <div style={{ display: 'flex', margin: 'auto'}}>
                   <Tab name="Introduzione" 
                            className="Test" 
                         
                            height="20" 
                            borderColor="black" 
                            active={activeTab === 0}
                            onClick={ () => setActiveTab(0)}
                        />
                    <Tab name="Esperienze" className="Test" height="20" borderColor="black" active={activeTab === 1} onClick={() =>setActiveTab(1)}/>
                    <Tab name="Progetti" className="Test" height="20" borderColor="black" active={activeTab === 2} onClick={() =>setActiveTab(2)}/>
                    <Tab name="Competenze" className="Test" height="20" borderColor="black" active={activeTab === 3} onClick={() =>setActiveTab(3)}/>
                   </div>
                </div>
                {
                    activeTab === 0 ?
                    (
                        <div className="cardsContainer"> 
                            { activeProject === 0 ?
                                (
                                    <>
                                        <Col>
                                            <IoArrowBack className="arrow-icon" onClick={() => setActiveProject(activeProject - 1)}></IoArrowBack>
                                        </Col>
                                        <div className="cardContainer">    
                                            <Col className="img-container">
                                                {<img className="card-img" src={`${cards.cards[0].imageUrl}`}/>}
                                            </Col>
                                            <Col className="body-container">
                                                <Row className="title-container">
                                                    {cards.cards[0].title}
                                                </Row>
                                                <Row>
                                                    {cards.cards[0].description}
                                                </Row>
                                                <Row className="buttons-container">
                                                    <Button name="Vedi su GitHub" icon={
                                                    <FontAwesomeIcon icon={faCodeBranch}/>}/>
                                                    <Button name="Visita sito web" icon={
                                                    <FontAwesomeIcon icon={faLink}/>}/>
                                                </Row>
                                            </Col>
                                        </div>
                                        <Col>
                                            <IoArrowForward className="arrow-icon" onClick={() => setActiveProject(activeProject + 1)}></IoArrowForward>
                                        </Col>
                                    </>
                                ) : ''
                            }
                            { activeProject === 1 ?
                                (
                                    <>
                                        <Col>
                                            <IoArrowBack className="arrow-icon" onClick={() => setActiveProject(activeProject - 1)}></IoArrowBack>
                                        </Col>
                                        <div className="cardContainer">    
                                            <Col className="img-container">
                                                {<img className="card-img" src={`${cards.cards[0].imageUrl}`}/>}
                                            </Col>
                                            <Col className="body-container">
                                                <Row className="title-container">
                                                    {cards.cards[1].title}
                                                </Row>
                                                <Row>
                                                    {cards.cards[1].description}
                                                </Row>
                                                <Row className="buttons-container">
                                                    <Button name="Vedi su GitHub" icon={
                                                    <FontAwesomeIcon icon={faCodeBranch}/>}/>
                                                    <Button name="Visita sito web" icon={
                                                    <FontAwesomeIcon icon={faLink}/>}/>
                                                </Row>
                                            </Col>
                                        </div>
                                        <Col>
                                            <IoArrowForward className="arrow-icon" onClick={() => setActiveProject(activeProject + 1)}></IoArrowForward>
                                        </Col>
                                    </>
                                ) : ''
                            }
                        </div>
                    ) : ''
                }
            </div>
        )
    );
}

Dashboard.propTypes = {
    example: propTypes.string,
};
  
Dashboard.defaultProps = {
    example: 'this is a test',
};

export default Dashboard;

