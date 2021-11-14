import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Tab } from '../../components/atoms/Tab';
import * as style from './dashboard.css';
import { Col, Row } from 'react-bootstrap';
import cards from './cards.json'
import CardsSlider from '../../components/components/CardsSlider';
import LoaderSpinner from '../../components/components/LoaderSpinner'
import { ProgressBar } from 'react-bootstrap';
import Header from '../../components/atoms/header';
import Sidebar from '../../components/atoms/sidebar';
import Footer from '../../components/atoms/footer/footer';
import Body from './components/body/body';
import { Stack } from '@chakra-ui/react';

const Dashboard = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
        <>
            <Sidebar isOpen={sideBarOpen} onClose={() => setSideBarOpen(!sideBarOpen)} />
            <Header onBurgerClick={() => setSideBarOpen(!sideBarOpen)}></Header>
            <Body/>
            <Footer></Footer>
        </>
    )
};

Dashboard.propTypes = {
    example: propTypes.string,
};
  
Dashboard.defaultProps = {
    example: 'this is a test',
};

export default Dashboard;

