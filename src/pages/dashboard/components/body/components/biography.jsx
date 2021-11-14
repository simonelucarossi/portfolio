import {Container, Stack, Image, Flex, useColorModeValue, Text, Heading, Box} from '@chakra-ui/react';
import { motion } from "framer-motion"
import Personal from './personal';

const Biography = () => {
    const MotionContainer = motion(Container);
    const path = [
        {
            isCurrentPage: true,
            pageName: 'Home',
        }
    ];
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
                    padding={"30px 0 0 0"}
                    align="center"
                    direction={{ base: 'column', md: 'column' }}
                    spacing={0}
                >
                    <Personal navigationObjects={path}/>
                    <Container
                        as={Flex}
                        maxW={{ base: '90%', md: '70%', lg: '60%'}}
                        py={4}
                        padding={"30px 0 30px 0"}
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
                            📃 Introduction
                        </Heading>
                        <Text 
                            fontSize="16px" 
                            fontFamily="MenloMy" 
                            color={useColorModeValue('black', '#d9d9d9')}
                        >
                            Having spent most of my childhood surrounded by latest (now not quite the latest) generation gadgets that my father loved to repair, I have always loved technology. This is what prompted me to study Computer Science at university, and to embark on the path of blogging, creating hundreds of guides and tutorials for the online tech community. Currently, I am an up and coming young professional, eager to continue developing my skills, understanding that this is an ever-changing industry. I am always looking for new challenges, which I confront with intuition and dedication. Finally, despite having accumulated a lot of experience working independently, I find that the best successes are the result of the close collaboration of a close-knit team.
                        </Text>
                    </Container>
                </Container>
        </MotionContainer>)
}

export default Biography;