import PropTypes from 'prop-types';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useColorMode,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react';

  
import { FiHome, FiTool, FiTrello, FiSlack, FiDollarSign } from "react-icons/fi";
import { HamburgerIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaMoon, FaSun } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { useHistory } from 'react-router';

const Header = ({onBurgerClick}) => {
    return (
        <WithSubnavigation onBurgerClick={onBurgerClick}/>
    );
}

export const WithSubnavigation = ({onBurgerClick}) => {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    const backGroundObject = useColorModeValue("#314ecb", "#385898");
    const colorObject = useColorModeValue("white", "#d9d9d9");

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
      <Box position="fixed" width="100%" zIndex="1200">
        <Flex
          bg={useColorModeValue('white', '#222')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.400', 'gray.900')}
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
              fontSize={"20px"}
              color={colorObject}
              backgroundColor={backGroundObject}
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
                  fontSize={"25px"}
                  color={colorObject}
                  backgroundColor={useColorModeValue('#393939', '#30302e')}
                  w={"37px"}
                  h={"38px"}
                  icon={<HamburgerIcon/>}
                  aria-label={'Toggle Navigation'}
              />
              <MenuList bg={useColorModeValue("white","#222222")} borderRadius="10px">
                  { 
                    pages.map((page) => {
                        return (
                          <MenuItem>
                            <Button minWidth='270px' minHeight='50px' onClick={page.function} leftIcon={page.icon} bg={colorMode === 'dark' ? '#2a2a2a' : 'black'} color={page.color} variant="solid" isFullWidth h="40px" fontSize="15px" >
                                {page.title}
                            </Button>
                          </MenuItem>
                        )
                    })
                  }
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
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
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
          href={href ?? '#'}
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
  Header.PropTypes = {
    onBurgerClick: PropTypes.func,
  }

  export default Header;