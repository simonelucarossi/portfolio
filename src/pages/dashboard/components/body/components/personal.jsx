import {Container, Button, Image, Flex, useColorModeValue, Heading, Box, Grid} from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa';
import { motion } from "framer-motion"
import NavigationBar from '../../../../../components/atoms/navigationBar';

const Personal = ({navigationObjects, toVisisbleSocial = true}) => {
    const MotionImage = motion(Image);
    return (
        <>
            <Container
                as={Flex}
                maxW={{ base: '90%', md: '70%', lg: '60%'}}
                py={4}
                padding={"0px 0 30px 0"}
                align="left"
                direction={{ base: 'column', md: 'column' }}
                spacing={0}
            >
                <Box 
                    as="button"
                    textAlign="center" 
                    borderRadius="md" 
                    bg={useColorModeValue('#f9f8f8ab', '#2c2c2c')} 
                    color={useColorModeValue('gray.700', '#d9d9d9')} 
                    border={1}
                    borderColor={useColorModeValue('gray.400', '#282828')}
                    borderStyle={'solid'}
                    fontSize="18px"
                    px={6} 
                    h={"auto"}
                    p="4" 
                    w={"100%"} 
                    marginBottom="30px"
                    fontFamily="MenloMy"
                    boxShadow={useColorModeValue("0px 0px 5px #979797d1", "0px 0px 5px #00000040")}
                >
                    👋 Welcome on my site, I am a web developer working remotely from Italy. 😁
                </Box>
                <Heading fontSize="32px" fontFamily="initial" textAlign={{ base: 'center', lg: 'left'}} color={useColorModeValue('black', '#d9d9d9')} >Simone Luca Rossi</Heading>
                <Heading fontSize="19px" fontFamily="serif" textAlign={{ base: 'center', lg: 'left'}} color={useColorModeValue('#979797', '#817c7c')}>🖥️ Full-stack Web Developer</Heading>
            </Container>
            <MotionImage
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.0 }} 
                src="https://s3.amazonaws.com/keybase_processed_uploads/aa692e9bb78aa0e7c8803a0e515d3e05_360_360.jpg"
                fallbackSrc="https://via.placeholder.com/150"
                boxSize={"130px"}
                borderRadius="full"
                border={1}
                borderColor={useColorModeValue('black', '#d9d9d9')}
                borderStyle={'solid'}
                marginBottom="10px"
            />
            {
                toVisisbleSocial === true && (
                    <Box
                        maxW={{ base: '90%', md: '70%', lg: '50%'}}
                        w="100%"
                        py={4}
                        marginTop="40px !important"
                        align="center"
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4}
                    >
                            <Flex direction={{ base: 'column', md: 'row' }} >
                                <Button bg="#385898" mr="15px" mb="10px" fontSize="13px" _hover="#385898"  color="white"  height="50px" width={{ base: '100%', md: '70%', lg: '60%'}} leftIcon={<FaFacebook />}>
                                    Facebook
                                </Button>
                                <Button bg="black"  mr="15px" mb="10px" fontSize="13px" _hover="black" height="50px" width={{ base: '100%', md: '70%', lg: '60%'}}  color="white" leftIcon={<FaGithub />}>
                                    GitHub
                                </Button>
                                <Button bg="#0a66c2"  mr="15px" mb="15px" fontSize="13px" _hover="#0a66c2"  color="white"  height="50px" width={{ base: '100%', md: '70%', lg: '60%'}} leftIcon={<FaLinkedin />}>
                                    Linkedin
                                </Button>
                                <Button bg="#1da1f2"  mr="15px" mb="15px" fontSize="13px" _hover="#1da1f2"  color="white"  height="50px" width={{ base: '100%', md: '70%', lg: '60%'}} leftIcon={<FaTwitter />}>
                                    Twitter
                                </Button>
                                <Button bg="#c3c3c3"  mr="15px" mb="15px" fontSize="13px" _hover="#c3c3c3"  color="white"  height="50px" width={{ base: '100%', md: '70%', lg: '60%'}} leftIcon={<FaMailBulk />}>
                                    Email
                                </Button>
                            </Flex>
                    </Box>
                )
            }
            
            <Container
                as={Flex}
                maxW={{ base: '90%', md: '70%', lg: '60%'}}
                py={4}
                padding={"0px 0 30px 0"}
                align="left"
                direction={{ base: 'column', md: 'column' }}
                spacing={0}
            >
                <NavigationBar items={navigationObjects}/>
            </Container>
        </>
    )
};

export default Personal;