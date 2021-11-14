import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useColorModeValue,
    Flex,
    Text,
    Icon,
    keyframes,
    Container,
  usePrefersReducedMotion,
  } from "@chakra-ui/react";

  import {motion} from 'framer-motion';

  import {FiChevronRight, FiLink2, FiTerminal} from 'react-icons/fi';

  const NavigationBar = ({items = []}) => {
    const backgroundColorDivider = useColorModeValue('#4a80bb', '#4a80bb');
    const colorDivider = useColorModeValue('black', 'white');
    const MotionLinkNavigatior = motion(BreadcrumbLink);
    const prefersReducedMotion = usePrefersReducedMotion();
    const spin = keyframes`from { opacity: 1; } 50% { opacity: 0} to { opacity: 1; } `;

    const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 2s linear`;

    return (
        <Flex>
            <FiLink2 color={colorDivider} fontSize={20} style={{ marginTop: "4px", marginRight: '15px'}}/>
            <Breadcrumb spacing="8px" separator={<FiChevronRight color={colorDivider} />}>
                {
                    items.map((item) => {
                        return (
                            <BreadcrumbItem color="black" bg={backgroundColorDivider} borderRadius={0} isCurrentPage={item.isCurrentPage}>
                                <MotionLinkNavigatior 
                                    href={item.path} 
                                    opacity={item.isCurrentPage ? 1.0 : 1.0}
                                    whileHover={{ opacity: 1.0 }} 
                                    whileTap={{ scale: 0.8 }}
                                    bg={item.isCurrentPage ? "#ef6f6f" : "black"} 
                                    fontFamiy={'MenloMy'} 
                                    color={'white'}
                                    p={2}
                                >
                                    {item.pageName}
                                </MotionLinkNavigatior>
                            </BreadcrumbItem>
                        )
                    })
                }
            </Breadcrumb>
            <Text fontSize="15px" h="31px" textAlign="center" pt="3px" bg="#4a80bb" w="22px">~</Text>
            <Container animation={animation} w="0px" ml="-1px">
                <FiTerminal className="dev-cursor" fontSize="25px" style={{ marginTop: '3px'}}/>
            </Container>
            
        </Flex>
      )
  }

  export default NavigationBar;