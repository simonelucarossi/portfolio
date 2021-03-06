import React, { useState } from 'react';
import Header from '../../components/atoms/header';
import Sidebar from '../../components/atoms/sidebar';
import Footer from '../../components/atoms/footer/footer';
import { motion } from "framer-motion"
import {Container, Stack, useColorModeValue} from '@chakra-ui/react';
import Personal from '../dashboard/components/body/components/personal';
import ListPricingCard from './components/listPricing/ListPricingCard';

const Pricing = () => {
    const MotionStack = motion(Stack);
    const MotionContainer = motion(Container);

    const [sideBarOpen, setSideBarOpen] = useState(false);
    const path = [
        {
            isCurrentPage: false,
            pageName: 'Home',
            path: '/'
        },
        {
            isCurrentPage: true,
            pageName: 'Pricing',
        }
    ];

    return (
        <>
            <Sidebar isOpen={sideBarOpen} onClose={() => setSideBarOpen(!sideBarOpen)} />
            <Header onBurgerClick={() => setSideBarOpen(!sideBarOpen)}></Header>
            const MotionContainer = motion(Container);
            <MotionStack
                backgroundColor={useColorModeValue('white', '#222')}
                as={Stack}
                maxW={'100%'}
                py={4}
                padding={"50px 0 70px 0"}
                direction={{ base: 'column', md: 'column' }}
                spacing={0}
                alignItems="center"
            >
                <Personal navigationObjects={path} toVisisbleSocial={false}/>
                <MotionContainer animate={{ y: [1000, -30] }} padding={'50px 0 0px 0'} alignItems="center" maxWidth={{ base: '95%', md: '70%', lg: '60%' }}>
                    <ListPricingCard/>
                </MotionContainer>
                

            </MotionStack>
            <Footer></Footer>
        </>
    )
};

export default Pricing;