import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Tab } from '../../components/atoms/Tab';
import * as style from './dashboard.css';
import { Col, Row } from 'react-bootstrap';
import cards from './cards.json'
import CardsSlider from '../../components/components/CardsSlider';
import LoaderSpinner from '../../components/components/LoaderSpinner'
import { ProgressBar } from 'react-bootstrap';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeIntroduction, setActiveIntroduction] = useState(0);
    const [activeExperiences, setActiveExperiences] = useState(0);
    const [activeProjects, setActiveProjects] = useState(0);
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
                                            cards={cards.experiences} activeCard={activeExperiences} 
                                            backFunction={() => setActiveExperiences(activeExperiences - 1)}
                                            forwardFunction={() => setActiveExperiences(activeExperiences + 1)}
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
                                            cards={cards.projects} activeCard={activeProjects} 
                                            backFunction={() => setActiveProjects(activeProjects - 1)}
                                            forwardFunction={() => setActiveProjects(activeProjects + 1)}
                                        />
                                    </>
                        </div>
                    ) : ''
                }
                {
                    activeTab === 3 ? (
                        <div className="progressBarsContainer">
                            <p className="capabilities-title">Conoscenza del settore</p>
                            <ProgressBar now={70} label="Search Engine Optimization (SEO)"/>
                            <ProgressBar now={60} label="Progettazione database"/>
                            <ProgressBar now={65} label="Sviluppo per Android"/>
                            <ProgressBar now={90} label="Videogioco per dispositivo mobile"/>
                            <ProgressBar now={96} label="Sviluppo di videogiochi"/>
                            <ProgressBar now={90} label="Progettazione software"/>
                            <ProgressBar now={100} label="Copywriting"/>
                            <ProgressBar now={92} label="Giornalismo online"/>

                            <p className="capabilities-title">Strumenti e tecnologie</p>
                            <ProgressBar now={100} label="WordPress"/>
                            <ProgressBar now={90} label="CSS"/>
                            <ProgressBar now={82} label="JavaScript"/>
                            <ProgressBar now={90} label="C++"/>
                            <ProgressBar now={96} label="HTML5"/>
                            <ProgressBar now={70} label="jQuery"/>
                            <ProgressBar now={80} label="AJAX"/>
                            <ProgressBar now={92} label="Java"/>
                            <ProgressBar now={100} label="Eclipse"/>
                            <ProgressBar now={60} label="SQL"/>
                            <ProgressBar now={65} label="MySQL"/>
                            <ProgressBar now={90} label="GitHub"/>
                            <ProgressBar now={75} label="PostgreSQL"/>
                            <ProgressBar now={90} label="Git"/>
                            <ProgressBar now={50} label="Tomcat"/>
                            <ProgressBar now={70} label="NodeJS"/>
                            <ProgressBar now={94} label="Nativescript"/>
                            <ProgressBar now={60} label="MongoDB"/>

                            <p className="capabilities-title">Competenze Interpersonali</p>
                            <ProgressBar now={90} label="Problem Solving"/>
                            <ProgressBar now={80} label="Presentazioni"/>
                            <ProgressBar now={85} label="Gestione Team"/>
                            <ProgressBar now={85} label="Team leadership"/>

                            <p className="capabilities-title">Altre Competenze</p>
                            <ProgressBar now={90} label="Progettazione di siti WordPress"/>
                            <ProgressBar now={60} label="jQuery Mobile"/>
                            <ProgressBar now={95} label="libGDX"/>
                            <ProgressBar now={60} label="Atom"/>
                            <ProgressBar now={85} label="Allegro (C++ library)"/>
                            <ProgressBar now={60} label="Express"/>

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

