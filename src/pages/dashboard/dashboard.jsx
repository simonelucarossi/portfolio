import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Header from '../../components/atoms/header';
import Sidebar from '../../components/atoms/sidebar';
import Footer from '../../components/atoms/footer/footer';
import Body from './components/body/body';
import ScrollTop from "react-scrolltop-button";
import { ImArrowUp2 } from 'react-icons/im';

const Dashboard = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
        <>
            <Sidebar isOpen={sideBarOpen} onClose={() => setSideBarOpen(!sideBarOpen)} />
            <Header onBurgerClick={() => setSideBarOpen(!sideBarOpen)}></Header>
            <Body/>
            <ScrollTop
                text={<ImArrowUp2 color='black'/>}
                distance={900}
                breakpoint={1500}
                style={{ backgroundColor: "transparent", opacity: '.5'  }}
                className="scroll-your-role"
                speed={1200}
                target={0}
                icon={<ImArrowUp2 color='black'/>}
            />
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

