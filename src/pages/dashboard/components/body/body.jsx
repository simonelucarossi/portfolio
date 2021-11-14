import Testimonial from './components/testimonials';
import Biography from './components/biography';
import Work from './components/work';
import {Container, Stack, useColorModeValue, Box} from '@chakra-ui/react';
import { motion } from "framer-motion";

const Body = () => {
    const MotionContainer = motion(Container);
    return (
        <MotionContainer
            animate={{ opacity: [0, 1.0] }}
            transition={{ delay: 0.3 }}
            backgroundColor={useColorModeValue('white', '#222')}
            as={Stack}
            maxW={'100%'}
            py={4}
            padding={"30px 0 40px 0"}
            direction={{ base: 'column', md: 'column' }}
            spacing={0}
        >
            <Biography/>
            <Testimonial/>
            <Work/>
        </MotionContainer>
    );
}

export default Body;