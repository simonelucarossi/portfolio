import {React, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Image, Text, Flex,useColorModeValue, Link } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import PropTypes from 'prop-types';

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

const items = [];



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

function TestCard() {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundColorItem = useColorModeValue('white','#2c2c2c');
  const borderColor = useColorModeValue('1px solid gray', '1px solid #282828');
  const boxShadowItem = useColorModeValue("0px 0px 5px #979797d1", "0px 0px 5px #00000040");

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li className="card-item" layout onClick={toggleOpen} style={{ backgroundColor: backgroundColorItem, border: borderColor, boxShadow: boxShadowItem}} initial={{ borderRadius: 10 }}>
      Test
    </motion.li>
  );
}


export const CardList = () => {
  return (
    <AnimateSharedLayout>
      <motion.ul className="card-list" style={{width: '100%', marginBottom: '50px'}} layout initial={{ borderRadius: 25 }}>
        {/* {items.map(item => (
          <Item key={item} title={item.title} content={item.content} projectImage={item.projectImage} logoPng={item.logoPng} stack={item.stack} gitHubLink={item.gitHubLink}/>
        ))} */}
        <TestCard key={items[0]} title={items[0].title} content={items[0].content} projectImage={items[0].projectImage} logoPng={items[0].logoPng} stack={items[0].stack} gitHubLink={items[0].gitHubLink}/>
      </motion.ul>
    </AnimateSharedLayout>
  )
};

CardList.propTypes = {
  maxWidth: PropTypes.string,
}


Content.propTypes = {
  title: PropTypes.string, 
  content: PropTypes.string, 
  projectImage: PropTypes.string, 
  logoPng: PropTypes.string, 
  stack: PropTypes.string, 
  gitHubLink: PropTypes.string
}


Item.propTypes = {
  title: PropTypes.string, 
  content: PropTypes.string, 
  projectImage: PropTypes.string, 
  logoPng: PropTypes.string, 
  stack: PropTypes.string, 
  gitHubLink: PropTypes.string
}