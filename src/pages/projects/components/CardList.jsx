import {React, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Image, Box, Text, li, Flex,useColorModeValue, Link } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

function Content({title, content, projectImage, stack, gitHubLink}) {

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Image src={projectImage}  w="100%" h={{ base: '280px', md: '500px' }}/>
      <Flex style={{ padding: '15px 20px 15px 20px'}}>
        <Text p="3" bg="gray">Title:</Text>
        <Text p="3" ml="4">{title}</Text>
      </Flex>
      <Flex style={{ padding: '0 20px 10px 20px'}}>
        <Text p="3" bg="#ef6f6f">Stack:</Text>
        <Text p="3" ml="4">{stack}</Text>
      </Flex>
      <Flex style={{ padding: '0 20px 10px 20px'}}>
        <Text p="3" bg="#4a80bb">Description:</Text>
        <Text p="3" ml="4">{content}</Text>
      </Flex>
      <Flex style={{ padding: '0 20px 10px 20px'}}>
        <Text p="3" bg="black" color="white">GitHub</Text>
        <Link href={gitHubLink} color="#ef6f6f" p="3" ml="4"><Flex>Go to the project <FiArrowUpRight/></Flex></Link>
      </Flex>
    </motion.div>
  );
}

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
    logoPng: "https://cdn.imgbin.com/16/23/2/imgbin-hot-air-balloon-balloon-271PDbx84Aife4SYzex3x3b5y.jpg",
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



function Item({title, content, projectImage, logoPng, stack, gitHubLink}) {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundColorItem = useColorModeValue('white','#2c2c2c');
  const borderColor = useColorModeValue('1px solid gray', '1px solid #282828');
  const boxShadowItem = useColorModeValue("0px 0px 5px #979797d1", "0px 0px 5px #00000040");

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li className="card-item" layout onClick={toggleOpen} style={{ backgroundColor: backgroundColorItem, border: borderColor, boxShadow: boxShadowItem}} initial={{ borderRadius: 10 }}>
      {!isOpen && (<Flex style={{ padding: '20px'}}>
        <motion.div className="avatar" style={{ backgroundColor: backgroundColorItem}} layout>
          <img style={{height: '100%', padding: '2px', borderRadius: '10px'}} src={logoPng}/>
        </motion.div>
        <Text fontSize="20px" ml="10px" mt="5px" fontFamily="MenloMy">{title}</Text>
      </Flex>)}
      <AnimatePresence>
        {isOpen && (
        <>
          <Content title={title} content={content} projectImage={projectImage} stack={stack} gitHubLink={gitHubLink}/>
        </>
        )}
      </AnimatePresence>
    </motion.li>
  );
}


export const CardList = ({ maxWidth }) => {
  return (
    <AnimateSharedLayout>
      <motion.ul className="card-list" style={{width: '100%', marginBottom: '50px'}} layout initial={{ borderRadius: 25 }}>
        {items.map(item => (
          <Item key={item} title={item.title} content={item.content} projectImage={item.projectImage} logoPng={item.logoPng} stack={item.stack} gitHubLink={item.gitHubLink}/>
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  )
};