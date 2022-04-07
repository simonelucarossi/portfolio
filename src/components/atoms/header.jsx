import PropTypes from 'prop-types';
import React from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    useColorModeValue,
    useColorMode,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react';

  
import { FiHome, FiTool, FiTrello, FiSlack, FiDollarSign, FiCoffee } from "react-icons/fi";
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { FaMoon, FaSun } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { SiFiverr } from 'react-icons/si';
import { useHistory } from 'react-router';

const Header = ({onBurgerClick}) => {
    return (
        <WithSubnavigation onBurgerClick={onBurgerClick}/>
    );
}

export const WithSubnavigation = () => {
    const { isOpen } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    const backGroundObject = useColorModeValue("transparent", "#30302e");
    const colorObject = useColorModeValue("black", "#d9d9d9");

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
          function: () => { history.push('/pricing') },
          color: () => 'white',
      },
      {
          title: 'Contact Me',
          icon: <FiSlack />,
          function: () => {history.push('/contacts')},
          color: () => 'white',
      }
    ];

    return (
      <Box position="fixed" width="100%" zIndex="1200">
        <Flex
          bg={useColorModeValue('transparent', '#222')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            display={{ base: 'flex', md: 'start' }}
          >
            <VscCode
              fontSize="30px"
              color='#ef6f6f'
            />  
            <Text ml="6px" fontWeight="800" fontFamily="fangsong" mt="4.2px" fontSize="15px" color={useColorModeValue('#2c2c2c', '#bbbbbb')}>DEV. ROSSI</Text>
          </Flex>
          <Flex 
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 2, md:'',  }}
          >
          
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={3}>
            <IconButton
              icon={colorMode === 'dark' ? <FaSun/> : <FaMoon/>}
              fontSize={"15px"}
              color={colorObject}
              backgroundColor={backGroundObject}
              border={'2px solid'}
              borderColor={useColorModeValue("transparent", "white")}
              onClick={toggleColorMode}
              w={"37px"}
              h={"37px"}

            />
            <Menu>
              <MenuButton
                as={IconButton}
                borderRadius="5px"
                cursor={'pointer'}
                minW={0}
                  fontSize={"18px"}
                  color={colorObject}
                  backgroundColor={useColorModeValue('transparent', '#30302e')}
                  border={'2px solid'}
                  borderColor={useColorModeValue("transparent", "white")}
                  w={"37px"}
                  h={"38px"}
                  icon={<HamburgerIcon/>}
                  aria-label={'Toggle Navigation'}
              />
              <MenuList bg={useColorModeValue("white","#222222")} borderRadius="10px">
                  { 
                    pages.map((page, index) => {
                        return (
                          
                          <MenuItem key={index}>
                            <Button  minWidth='270px' minHeight='50px' onClick={page.function} leftIcon={page.icon} bg={colorMode === 'dark' ? '#2a2a2a' : '#ddddddb3'} color={colorMode === 'dark' ? page.color : 'black'} variant="solid" isFullWidth h="40px" fontSize="15px" >
                                {page.title}
                            </Button>
                          </MenuItem>
                        )
                    })
                  }
                  <MenuItem>
                      <Button minWidth='270px' minHeight='50px' onClick={() => {}} leftIcon={<FiCoffee/>} bg={'#4a80bb'} _hover={{ bg: '#4a80bb'}} color={'white'} variant="solid" isFullWidth h="40px" fontSize="15px" >
                        {"Donate a coffee"}
                      </Button>
                  </MenuItem>
                  <MenuItem>
                      <Button minWidth='270px' minHeight='50px' onClick={() => {}} leftIcon={<SiFiverr/>} bg={'#00875a'} _hover={{ bg: '#00875a'}} color={'white'} variant="solid" isFullWidth h="40px" fontSize="15px" >
                        {"Fiverr Profile"}
                      </Button>
                  </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ? href : '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              // eslint-disable-next-line react/prop-types
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };

  const NAV_ITEMS = [
    {
      label: 'Work',
      children: [
        {
          label: 'Explore Design Work',
          subLabel: 'Trending Design to inspire you',
          href: '#',
        },
        {
          label: 'New & Noteworthy',
          subLabel: 'Up-and-coming Designers',
          href: '#',
        },
      ],
    },
    {
      label: 'Projects',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'Contact Me',
      href: '#',
    },
    {
      label: 'Skills',
      href: '#',
    },
  ];

  // eslint-disable-next-line react/no-typos
  Header.propTypes = {
    onBurgerClick: PropTypes.func,
    label: PropTypes.string, 
    children: PropTypes.array, 
    href: PropTypes.string, 
  }

  MobileNavItem.propTypes = {
    onBurgerClick: PropTypes.func,
    label: PropTypes.string, 
    children: PropTypes.array, 
    href: PropTypes.string, 
  }

  WithSubnavigation.propTypes ={
    onBurgerClick: PropTypes.object,
    label: PropTypes.string, 
    children: PropTypes.array, 
    href: PropTypes.string, 
  }

  export default Header;