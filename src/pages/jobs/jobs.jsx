import Header from '../../components/atoms/header';
import Sidebar from '../../components/atoms/sidebar';
import Footer from '../../components/atoms/footer/footer';
import { motion } from "framer-motion";
import {Container, Stack, useColorModeValue, useControllableState} from '@chakra-ui/react';
import Personal from '../dashboard/components/body/components/personal';
import JobDescription from './components/jobDescription/jobDescription';
import React from 'react';


const Jobs = () => {
    const MotionStack = motion(Stack);
    const MotionContainer = motion(Container);

    const [sideBarOpen, setSideBarOpen] = useControllableState({defaultValue: false});
    const path = [
        {
            isCurrentPage: false,
            pageName: 'Home',
            path: '/'
        },
        {
            isCurrentPage: true,
            pageName: 'Jobs',
        }
    ];

    return (
        <>
            <Sidebar isOpen={sideBarOpen} onClose={() => setSideBarOpen(!sideBarOpen)} />
            <Header onBurgerClick={() => setSideBarOpen(!sideBarOpen)}></Header>
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
                <MotionContainer animate={{ y: [1000, -30] }} padding={'50px 0 30px 0'} maxWidth={{ base: '95%', md: '70%', lg: '60%' }}>
                    <JobDescription/>
                </MotionContainer>
            </MotionStack>
            <Footer></Footer>
        </>
    )
};

export default Jobs;