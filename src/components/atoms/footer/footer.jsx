import { Box,
  chakra,
  Image,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden } from '@chakra-ui/react';
  import { RiCodeSSlashLine } from 'react-icons/ri';
import { SocialMediaLinks } from './components/SocialMediaLinks';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('white', '#222')}
      color={useColorModeValue('gray.700', 'gray.200')}
      position="fixed"
      bottom="0"
      width="100%"
      borderTop={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.400', 'gray.900')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
          <RiCodeSSlashLine
            fontSize="26px"
            color={useColorModeValue('black', 'white')}
          />
          <Text>© 2021 Site by Simone Rossi. All rights reserved</Text>
          <SocialMediaLinks/>
      </Container>
    </Box>
  );
}

export default Footer;