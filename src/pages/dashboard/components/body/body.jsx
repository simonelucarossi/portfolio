import React from 'react';
import Testimonial from './components/testimonials';
import Biography from './components/biography';
import Work from './components/work';
import {Container, Stack, useColorModeValue} from '@chakra-ui/react';
import { motion } from "framer-motion";
import Services from './components/services';
import Jobs from './components/jobs';

const Body = () => {
    const MotionContainer = motion(Container);
    return (
        <MotionContainer
            animate={{ opacity: [0, 1.0] }}
            transition={{ delay: 0.3 }}
            backgroundColor={useColorModeValue('white', '#222')}
            backgroundImage={'https://i.ibb.co/ZS9mFj6/background.png'}
            as={Stack}
            minW={'100%'}
            py={4}
            padding={"30px 0 40px 0"}
            direction={{ base: 'column', md: 'column' }}
            spacing={0}
        >
            <div className="circle-container">
                <div className='circle'/>
            </div>
            <Biography/>
            <Services/>
            <Work/> 
            <Jobs/>
            <Testimonial/>
        </MotionContainer>
    );
}

export default Body;