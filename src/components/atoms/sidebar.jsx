import {
    Box,
    Container,
    Button,
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
  import { FiHome, FiTool, FiTrello, FiSlack, FiDollarSign } from "react-icons/fi";
import { useHistory } from 'react-router';

  
  const SidebarContent = ({ onClick, colorMode }) => {
    const history = useHistory();

    const pages = [
      {
          title: 'Home',
          icon: <FiHome />,
          function: () => { history.push('/')},
          color: () => 'white',
      },
      {
          title: 'Projects',
          icon: <FiTrello />,
          function: () => { history.push('/projects')},
          color: () => 'white',
      },
      {
          title: 'Jobs',
          icon: <FiTool />,
          function: () => { history.push('/jobs')},
          color: () => 'white',
      },
      {
          title: 'Pricing',
          icon: <FiDollarSign />,
          function: () => {},
          color: () => 'white',
      },
      {
          title: 'Contact Me',
          icon: <FiSlack />,
          function: () => {},
          color: () => 'white',
      }
    ];


    return (
      <VStack>
          { 
              pages.map((page) => {
                  return (
                      <Button onClick={page.function} leftIcon={page.icon} bg={colorMode === 'dark' ? '#2a2a2a' : 'black'} color={page.color} variant="solid" isFullWidth h="40px" fontSize="15px" >
                          {page.title}
                      </Button>
                  )
              })
          }
      </VStack>
    )
  };
  
  const Sidebar = ({ isOpen, variant, onClose }) => {
    const { colorMode, toggleColorMode } = useColorMode();
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
  
  export default Sidebar;
  