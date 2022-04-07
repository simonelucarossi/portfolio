import React from 'react';
import {Container, Stack, Flex, useColorModeValue, Text, Grid, GridItem, Box} from '@chakra-ui/react';
import { motion } from "framer-motion"

const Work = () => {

    // const colorText = useColorModeValue('black', '#d9d9d9');
    const MotionContainer = motion(Container);
    // const MotionButton = motion(Button);
    const imageNotFound = 'https://adriaticaindustriale.it/wp-content/uploads/2020/02/not-found.png';
    const titleColors = useColorModeValue('black', 'white');
    const titleContainerBackgroundColors = useColorModeValue('#ef6f6f', 'black');

    const items = [
        {
          id: "i",
          content: "Il mio portfolio, quello che stai visualizzando ora, l'idea è nata per testare la libreria Chakra UI e la libreria framer-motion, entrambe utilizzate insieme a React.",
          title: "Portfolio",
          logoPng: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Circle-icons-dev.svg/1024px-Circle-icons-dev.svg.png",
          projectImage: 'https://i.ibb.co/ryPDdNm/screen1.png',
          stack: "React, Chakra UI, Framer-Motion, EsLint",
          gitHubLink: 'https://github.com/simonelucarossi/portfolio'
        },
        {
          id: "c",
          content: "Mini webApp sviluppata come progetto personale, è stato utilizzato JavaScript, il framework Express, un database MySQL ed è eseguita su runtime NodeJS.",
          title: "Dark/Light",
          logoPng: 'https://i1.wp.com/mac-torrent-download.net/wp-content/uploads/2020/03/Dark-Mode-for-Safari-icon.png?resize=175%2C175&ssl=1',
          projectImage: "https://repository-images.githubusercontent.com/194995309/38db8f80-9db7-11e9-998f-43f2a26d9e0b",
          stack: "JS, Express, NodeJS",
          gitHubLink: 'https://github.com/simonelucarossi/dark-light'
        },
        {
          id: "f",
          content: "Gioco di carte sviluppato per il progetto di Intelligenza Artificiale del dipartimento di Matematica e Informatica. Il gioco è sviluppato con Java (SDK 13), libGDX e DLV.",
          title: "FreeCell",
          logoPng: "https://torako.wakarimasen.moe/file/torako/g/image/1600/95/1600956075673.png",
          projectImage: "https://store-images.s-microsoft.com/image/apps.2999.9007199266467036.15a415a1-dbd4-4eb9-afcd-2520d5646edc.50a72768-4d75-4e88-93c5-bb3d389c8cc7?mode=scale&q=90&h=1080&w=1920",
          stack: "DLV, Java (SDK13), libGDX",
          gitHubLink: 'https://github.com/simonelucarossi/Freecell'
        },
        {
          id: "a",
          content: "Una bacheca per avvisi di lavoro sviluppata in coppia con un collega per un progetto universitario. Le tecnologie utilizzate includono HTML5, Javascript, AJAX, CSS3, Bootstrap, Java, PostgreSQL, Tomcat.",
          title: "Job Advisor",
          logoPng: "https://www.freeiconspng.com/uploads/work-icon-0.png",
          projectImage: "https://www.lettoquotidiano.it/wp-content/uploads/2019/10/Google-Job-Search.jpg",
          stack: "Java, JavaScript, postgreSQL, TomCat, AJAX, CSS3, BootStrap, HTML5",
          gitHubLink: 'https://github.com/simonelucarossi/Job-Advisor-New'
        },
        {
          id: "g",
          content: "Progetto personale sviluppato in un giorno per semplice divertimento ed allenamento nel linguaggio di programmazione Java ed utilizzo del framework libGDX. Il gioco è disponibile sul Google Play Store.",
          title: "Hot Air Balloon Rush",
          projectImage: "https://image.winudf.com/v2/image/Y29tLnNpbW9uZXJvc3NpLmdhbWVfc2NyZWVuXzFfMTUxNDEyNjY5Nl8wNTk/screen-1.jpg?fakeurl=1&type=.jpg",
          stack: "Java, libGDX, Android Studio",
          gitHubLink: ''
        },
        {
          id: "d",
          content: "Gioco sviluppato in team con altri due colleghi per un progetto universitario con il linguaggio di programmazione Java. Tra le varie librerie, è stato utilizzato  il framework libGDX, che ci ha permesso di sviluppare il gioco sia per piattaforma PC che per Android.",
          title: "Tower Defense",
          logoPng: "https://e7.pngegg.com/pngimages/827/290/png-clipart-castle-defense-2-ourworld-tower-defense-android-game-logo.png",
          projectImage: "https://o.gombis.com/image/310789dae3d4d56005052edcb3e26aba.png?w=400&h=225&crop-to-fit&sa=jpg&q=75",
          stack: "Java, libGDX, Android Studio",
          gitHubLink: 'https://github.com/simonelucarossi/IGPE_Project'
        },
        {
          id: "h",
          content: "Progetto universitario per lo sviluppo del videogioco PacMan  per PC tramite il linguaggio C++ e l’ausilio della libreria allegro.",
          title: "PacMan",
          logoPng: "https://www.pngitem.com/pimgs/m/157-1571473_pac-man-png-pacman-png-illustration-transparent-png.png",
          projectImage: "https://github.com/simonelucarossi/PacMan_Game/raw/master/screen2.png",
          stack: "C++, allegro",
          gitHubLink: 'https://github.com/simonelucarossi/PacMan_Game'
        },
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
                <Box
                    pl={{
                        base: '2rem',
                        lg: '20vw'
                    }}
                    pr={{
                        base: '2rem',
                        lg: '20vw'
                    }}
                >
                        <Flex
                            direction={'column'}
                            alignItems={'center'}
                        >
                            <Text
                                fontSize={17}
                                fontWeight={500}
                                mb={-2}
                                color={'lightgray'}
                            >
                                MY EXPERIENCE    
                            </Text>
                            <Text
                                fontSize={26}
                                fontWeight={600}
                                mb={1}
                            >
                                PROJECTS    
                            </Text>
                            <div 
                                className="section-title-divider"
                                style={{
                                    width: '6vw',
                                    height: '4px',
                                    borderRadius: '5px',
                                    backgroundColor: '#ef6f6f',
                                    marginBottom: '25px'
                                }}
                            />
                        </Flex>
                    <Grid gap={1} templateColumns={"repeat(3, 1fr)"}>
                        {
                            items?.map((item, index) => {
                                return(
                                    <GridItem key={index} backgroundImage={item?.projectImage || imageNotFound} className='test-card-projects' colSpan={{ base: '3', lg: '1' }}>
                                        <Flex  className='test__card-project-title' w={'100%'} h={'100%'} justifyContent="center" alignItems={"center"}>
                                            <div style={{ color: titleColors, background: titleContainerBackgroundColors }} className='test__card-project-title-container'>
                                                {item?.title}
                                            </div>
                                        </Flex>
                                    </GridItem>

                                )
                            })
                        }
                    </Grid>
                </Box>
        </MotionContainer>)
}

export default Work;