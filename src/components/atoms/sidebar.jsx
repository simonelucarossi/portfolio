import React from "react";
import PropTypes from 'prop-types';

import {
    Container,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    VStack,
    useColorModeValue,
    Stack,
    Text,
    useColorMode,
  } from '@chakra-ui/react';
  import { RiCodeSSlashLine } from 'react-icons/ri';

  
  const SidebarContent = () => {
    


    return (
      <VStack>

      </VStack>
    )
  };
  
  const Sidebar = ({ isOpen, onClose }) => {
    const { colorMode } = useColorMode();
    return (
      <Drawer isOpen={isOpen} placement="left">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton 
                onClick={onClose} 
                bg={useColorModeValue('white', '#2a2a2a')} 
                border={0}
                borderColor={useColorModeValue('black', 'white')}
                borderStyle={'solid'}
                color={useColorModeValue('black', 'white')}
            />
            <DrawerHeader bg={useColorModeValue('white', '#222')} color={useColorModeValue('black', 'white')}>
                <Container as={Stack} direction={{ base: 'row', md: 'row' }} spacing={1}>
                    <RiCodeSSlashLine
                        fontSize="26px"
                        color={useColorModeValue('black', 'white')
                    }
                    />
                    <Text fontSize="16px">Menu</Text>
                </Container>
                
            </DrawerHeader>
            <DrawerBody bg={useColorModeValue('white', '#222')} color={useColorModeValue('white', 'black')}>
              <SidebarContent onClick={onClose} colorMode={colorMode}/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  };

  Sidebar.propTypes = {
    isOpen: PropTypes.bool,
    variant: PropTypes.string,
    onClose: PropTypes.func,
  }
  
  SidebarContent.propTypes = {
    onClick: PropTypes.func,
    colorMode: PropTypes.object
  }

  export default Sidebar;
  