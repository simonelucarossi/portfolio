import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from "framer-motion"

const Testimonial = ({ children }) => {
    
    const MotionBox = motion(Box); 
  return <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0 }}>{children}</MotionBox>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', '#222')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', '#242424'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h2'} fontSize={'2xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'14px'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} boxSize={140}/>
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box >
      <Container bg={useColorModeValue('#f9f8f8ab', '#2c2c2c')} maxWidth={{ base: '95%', md: '70%', lg: '60%' }} py={12} as={Stack} spacing={12} rounded="xl" marginBottom="25px"
        boxShadow={useColorModeValue("0px 0px 5px #979797d1", "0px 0px 5px #00000040")}
        >
        <Stack spacing={0} align={'center'}>
          <Heading>📢 My Clients Speak 📢</Heading>
          <Text fontFamily="MenloMy" pt="2px">I have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://pbs.twimg.com/profile_images/1342086456249085952/NH4sDI8w.jpg'
              }
              name={'Antonio Lanza'}
              title={'Software Developer at Company'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://avatars.githubusercontent.com/u/1248581?v=4'
              }
              name={'Andrea Rossi'}
              title={'Cloud Engineer at Plex'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://yt3.ggpht.com/ytc/AKedOLTaEuJpvQkuzGcEVXqn7dItZzvAHJuRnh2l6pEOnQ=s900-c-k-c0x00ffffff-no-rj'
              }
              name={'Ivan Di Lelio'}
              title={'CEO at Redev Italia'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}