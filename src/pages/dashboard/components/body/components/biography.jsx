import React from 'react';
import {Container, Stack, Flex, useColorModeValue, Text, Grid, GridItem, Button, Image, IconButton} from '@chakra-ui/react';
import { motion } from "framer-motion"
import { useEffect } from 'react';
// import NavigationBar from '../../../../../components/atoms/navigationBar';
import { Link } from 'react-scroll';
import { FiGithub } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';


const Biography = () => {
    const MotionContainer = motion(Container);
    // const path = [
    //     {
    //         isCurrentPage: true,
    //         pageName: 'Home',
    //     }
    // ];

    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
            window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }


    
    const buttonHireMeBackGround = useColorModeValue('#ef6f6f', 'black');

    useEffect(() => {
        document.addEventListener('DOMContentLoaded',function(){
            const dataText = [ "Hi, I'm Simone Luca Rossi.", "A full stack Web Developer.", "I love gaming.", "I love coding.", "I love to watch anime."];
     
            function typeWriter(text, i, fnCallback) {
              if (i < (text.length)) {
               document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
          
                setTimeout(function() {
                  typeWriter(text, i + 1, fnCallback)
                }, 100);
              }
              else if (typeof fnCallback == 'function') {
                setTimeout(fnCallback, 700);
              }
            }
            
            function StartTextAnimation(i) {
                if (typeof dataText[i] === 'undefined'){
                    setTimeout(function() {
                    StartTextAnimation(0);
                   }, 20000);
                }
                else if( i < dataText[i].length) {
                    typeWriter(dataText[i], 0, function(){
                        StartTextAnimation(i + 1);
                    });
                }
            }
            
            StartTextAnimation(0);
          });


        const obj = document.getElementById("value");
        animateValue(obj, 0, 9, 1800);
        const obj2 = document.getElementById("value-2");
        animateValue(obj2, 0, 40, 3500);
        const obj3 = document.getElementById("value-3");
        animateValue(obj3, 0, 4, 1800);
    }, [])



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
                    padding={"0px 0 0 0"}
                    align="center"
                    direction={{ base: 'column', md: 'column' }}
                    spacing={0}
                >
                    {/* <Personal navigationObjects={path}/> */}
                    <Container
                        as={Flex}
                        maxW={{ base: '90%', md: '70%', lg: '60%'}}
                        py={4}
                        padding={"0px 0 30px 0"}
                        align="left"
                        direction={{ base: 'column', md: 'column' }}
                        spacing={0}
                    >
                        {/* <NavigationBar items={path}/> */}
                     
                        <Grid mb={25} templateColumns={{ lg: 'repeat(2, 1fr)', base: 'repeat: (1,1fr)'}} templateRows={"repeat(2, 1fr)"} maxHeight={{ base: 'auto', lg: '92vh'}}>
                            <GridItem minH={'87vh'} colSpan={{ base: '1' }} colRow={{ base: '1'}}>
                                <Flex direction={'column'} justifyContent={'center'} h={'100%'}>
                                    {/* PROJECTS COUNTER */}
                                    
                                    <Grid mb={'2rem'} mt={'2rem'} templateColumns={'repeat(3, 1fr)'}>
                                        <GridItem colSpan={{ base: '1' }}>
                                            <Flex direction={'column'}>
                                                <Text id={'value'} className={'counter-value'} fontSize={'3.3rem'} letterSpacing={0} fontWeight={'800'} color={'black'} textAlign={'center'}>
                                                    9
                                                </Text>
                                                <Text mt={'-2.5'} fontSize={'1.3rem'} letterSpacing={0} color={'gray'} fontWeight={'400'} textAlign={'center'}>
                                                    Projects
                                                </Text>
                                            </Flex>
                                        </GridItem>
                                        <GridItem colSpan={{ base: '1' }}>
                                            <Flex direction={'column'}>
                                                <Text id={'value-2'} className={'counter-value'} fontSize={'3.3rem'} letterSpacing={0} fontWeight={'800'} color={'black'} textAlign={'center'}>
                                                    30
                                                </Text>
                                                <Text mt={'-3.5'} fontSize={'1.3rem'} letterSpacing={0} color={'gray'} fontWeight={'400'} textAlign={'center'}>
                                                    Skills
                                                </Text>
                                            </Flex>
                                        </GridItem>
                                        <GridItem colSpan={{ base: '1' }}>
                                            <Flex direction={'column'}>
                                                <Text id={'value-3'} className={'counter-value'} fontSize={'3.3rem'} letterSpacing={0} fontWeight={'800'} color={'black'} textAlign={'center'}>
                                                    3
                                                </Text>
                                                <Text mt={'-3.5'} fontSize={'1.3rem'} letterSpacing={0} color={'gray'} fontWeight={'400'} textAlign={'center'}>
                                                    Exp.
                                                </Text>
                                            </Flex>
                                        </GridItem>
                                    </Grid>

                                    {/* ANIMATED TEXT */}
                                    <h1 className="test-title-whoami"/>
                                    <Text 
                                        fontSize="16px" 
                                        color={useColorModeValue('black', '#d9d9d9')}
                                        mb={10}
                                        width={{ lg: '80%', base: '100%'}}
                                    >
                                        Having spent most of my childhood surrounded by latest (now not quite the latest) generation gadgets that my father loved to repair, I have always loved technology. This is what prompted me to study Computer Science at university, and to embark on the path of blogging, creating hundreds of guides and tutorials for the online tech community. Currently, I am an up and coming young professional, eager to continue developing my skills, understanding that this is an ever-changing industry. I am always looking for new challenges, which I confront with intuition and dedication. Finally, despite having accumulated a lot of experience working independently, I find that the best successes are the result of the close collaboration of a close-knit team.
                                    </Text>
                                    <Button borderRadius={7} w={200} color={'white'} p={10} fontSize={18} bg={buttonHireMeBackGround}>
                                        Download my CV
                                    </Button>
                                </Flex>
                            </GridItem>
                            <GridItem minH={'85vh'} colRow={{ lg: '1' }}>
                                <Flex direction={'column'} justifyContent={'center'} h={'100%'} w={'100%'}>
                                    <Image src='https://i.ibb.co/60gDvgV/test.png' boxSize={{ lg: '50vh', base: '100vw'}} />
                                    <Flex justifyContent={'center'} direction={'row'} className='social-icons' mt={'3rem'}>
                                        <IconButton bg={'transparent'} h={'fit-content'} ml={'1rem'} mr={'1rem'} icon={<FiGithub fontSize={'4.5rem'} style={{padding: '1rem'}}/>} />
                                        <IconButton bg={'transparent'} h={'fit-content'} ml={'1rem'} mr={'1rem'} icon={<FaFacebookF fontSize={'4.5rem'} style={{padding: '1rem'}}/>}/>
                                        <IconButton bg={'transparent'} h={'fit-content'} ml={'1rem'} mr={'1rem'} icon={<BsTwitter fontSize={'4.5rem'} style={{padding: '1rem'}}/>}/>
                                    </Flex>
                                </Flex>
                            </GridItem>
                            <GridItem colSpan={{ base: '1', lg: '2' }} height="50px" colRow={{ base: '1' }}>
                                    <Link
                                        smooth={true}
                                        duration={1000}
                                        to={'firstContainerRef'}
                                    >
                                        <div className='toogle-down-container'>
                                            <div className='mouse'>
                                                <span/>
                                            </div>
                                            <div className='arrow'>
                                                <span/>
                                            </div>
                                        </div>
                                    </Link>
                            </GridItem>

                        </Grid>
                    </Container>
                </Container>
        </MotionContainer>)
}

export default Biography;