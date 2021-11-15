import {Container, Stack, Button, Flex, useColorModeValue, Text, Heading, Box} from '@chakra-ui/react';
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion"
import { useHistory } from 'react-router';

const Work = () => {
    const history = useHistory();
    const workText = "After working for several years as a freelancer, I worked for LineApp for 3 months and now I have been working for Redev Italia for 1 year as a full-stack developer. \n"
    + "I love my company and it allows me to learn new things every day, making me understand that the time available is never enough and that if we don't learn new skills we will not be able to keep up with the times. \n"
    + " During my free time I like to work on some personal projects, if you are interested, click the link below!";

    const colorText = useColorModeValue('black', '#d9d9d9');
    const MotionContainer = motion(Container);
    const MotionButton = motion(Button);
    return (
        <MotionContainer
            as={Stack}
            maxW={'100%'}
            py={4}
            padding={"30px 0 40px 0"}
            direction={{ base: 'column', md: 'column' }}
            spacing={5}
            >
                <Container
                    as={Flex}
                    maxW={'100%'}
                    py={4}
                    padding={"10px 0 0 0"}
                    align="center"
                    direction={{ base: 'column', md: 'column' }}
                    spacing={0}
                >
                    <Container
                        as={Flex}
                        maxW={{ base: '90%', md: '70%', lg: '60%'}}
                        py={4}
                        padding={"0px 0 30px 0"}
                        align="left"
                        direction={{ base: 'column', md: 'column' }}
                        spacing={0}
                    >
                        <Heading 
                            fontSize="22px" 
                            fontFamily="initial" 
                            color={useColorModeValue('black', '#d9d9d9')} 
                            paddingBottom="7px"
                            borderBottom={2}
                            borderColor={useColorModeValue('black', '#444444')}
                            borderStyle={"solid"}
                            marginBottom="14px"
                        >
                            💼 Work
                        </Heading>
                        
                        {
                            workText.split('\n').map(line => {
                                return <Text 
                                as="text"
                                fontSize="16px" 
                                fontFamily="MenloMy" 
                                color={colorText}
                            >{line}</Text>
                            })
                        }
                        <MotionButton 
                            whileHover={{ scale: 1.2, background: "#ef6f6f" }}
                            whileTap={{ scale: 1.0 }}
                            onClick={()=> {
                                history.push('/projects');
                                window.scrollTo(0, 0);
                            }} 
                            rightIcon={<FiChevronRight />} 
                            bg="#ef6f6f" 
                            color={useColorModeValue('white', 'white')} 
                            variant="solid" 
                            fontSize="14px" 
                            w={{ base: '100%', lg: '400px'}} 
                            h={39} 
                            mt={10}
                            mb={30}
                        >
                            Visit my projects
                        </MotionButton>
                        
                    </Container>
                </Container>
        </MotionContainer>)
}

export default Work;