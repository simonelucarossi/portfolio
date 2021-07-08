import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Tab } from '../../components/atoms/Tab';
import * as style from './dashboard.css';
import { Col, Row } from 'react-bootstrap';
import cards from './cards.json'
import CardsSlider from '../../components/components/CardsSlider';
import LoaderSpinner from '../../components/components/LoaderSpinner'

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeIntroduction, setActiveIntroduction] = useState(0);
    return (
        (
            <div className="page-container">
                <LoaderSpinner></LoaderSpinner>
               <div className="up-container">
                   <div className="top-bar-menu"> 
                        Facebook Twitter LinkedIn Blog
                   </div>
               </div>
               <div style={{ display: 'flex', width: '99vw', marginTop: '15px', marginBottom: '-30px'}}>
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
                    <Tab name="Contattami" className="Test" height="20" borderColor="black" active={activeTab === 4} onClick={() =>setActiveTab(4)}/>
                   </div>
                </div>
                {
                    activeTab === 0 ?
                    (
                        <div className="cardsContainer"> 
                                    <>
                                        <CardsSlider 
                                            cards={cards.introductions} activeCard={activeIntroduction} 
                                            backFunction={() => setActiveIntroduction(activeIntroduction - 1)}
                                            forwardFunction={() => setActiveIntroduction(activeIntroduction + 1)}
                                        />
                                    </>
                        </div>
                    ) : ''
                }
                {
                    activeTab === 1 ?
                    (
                        <div className="cardsContainer"> 
                                    <>
                                        <CardsSlider 
                                            cards={cards.experiences} activeCard={activeIntroduction} 
                                            backFunction={() => setActiveIntroduction(activeIntroduction - 1)}
                                            forwardFunction={() => setActiveIntroduction(activeIntroduction + 1)}
                                        />
                                    </>
                        </div>
                    ) : ''
                }
                {
                    activeTab === 2 ?
                    (
                        <div className="cardsContainer"> 
                                    <>
                                        <CardsSlider 
                                            cards={cards.projects} activeCard={activeIntroduction} 
                                            backFunction={() => setActiveIntroduction(activeIntroduction - 1)}
                                            forwardFunction={() => setActiveIntroduction(activeIntroduction + 1)}
                                        />
                                    </>
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

