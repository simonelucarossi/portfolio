import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Grid,
    GridItem,
  } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { HiOutlineUser } from 'react-icons/hi';
import { SiFiverr } from 'react-icons/si';  
import { GiSmartphone } from 'react-icons/gi';
import { ImInstagram } from 'react-icons/im';
import {AiOutlineMail} from 'react-icons/ai';
  
  export const ContactForm = () => {
      const MotionGridItem = motion(GridItem);
    return (

        <Grid
            height='100%'
            mb="50px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            padding='2px'
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1.7 }}
        >
            <MotionGridItem 
                rowSpan={{ base: '1', lg: '2' }}
                colSpan={{ base: '3', lg: '1' }} 
                bg="tomato"
                background='#2c2c2c'
                borderRadius='8px'
                padding='20px'
                color='white'
                marginRight={{ base: '0', lg: '-20px' }}
            >
                <WrapItem >
                  <Box w="90%">
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="center">
                        <Button
                          size="md"
                          height="48px"
                          width="90%"
                          variant="solid"
                          color="#DCE2FF"
                          bg="#ef6f6f"
                          fontSize="13px"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<GiSmartphone color="white" size="25px" />}>
                          +39-3286714930
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="90%"
                          variant="solid"
                          bg="#385898"
                          fontSize="13px"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<AiOutlineMail color="white" size="20px" />}>
                          simonerossi@protonmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="90%"
                          variant="solid"
                          bg="#9e1d15"
                          color="#DCE2FF"
                          fontSize="13px"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<ImInstagram color="white" size="22px" />}>
                          @simonelucarossi
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="90%"
                          variant="solid"
                          color="#DCE2FF"
                          bg="#5da96d"
                          fontSize="13px"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<SiFiverr color="white" size="22px" />}>
                            Visit Fiverr Profile
                        </Button>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
            </MotionGridItem>
            <MotionGridItem border="2px solid #ededed" boxShadow="-4px 0px 3px #1a1a1a8f" borderRadius="12px" 
                animate={{ x: [-410, 0] }}
                transition={{ duration: 1.5, delay: 0.8 }}
                rowSpan={{ base: '1', lg: '2' }}
                colSpan={{ base: '3', lg: '2' }}  
                marginTop={{ base: '-20px', lg: '0px' }}
                bg="white"
            > 
                <WrapItem height="100%" >
                  <Box bg="white" borderRadius="lg" width="100%" height="100%">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel fontSize="16px">Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                                height="40px"
                                pointerEvents="none"
                                children={<HiOutlineUser color="#bfbfbf" />}
                                fontSize="20px" 
                                marginLeft="5px" 
                                marginRight="5px"
                            />
                            <Input height="40px" pl="40px" fontSize="15px" type="text" size="md" _focus={{ border:'2px solid', borderColor: '#385898'}}/>
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel fontSize="16px">Your Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              height="40px"
                              pointerEvents="none"
                              children={<AiOutlineMail color="#bfbfbf" />}
                              fontSize="20px" 
                              marginLeft="5px" 
                              marginRight="5px"
                            />
                            <Input height="40px" fontSize="15px" pl="40px" type="text" size="md" _focus={{ border:'2px solid', borderColor: '#385898'}} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel fontSize="16px">Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            fontSize="15px"
                            placeholder="Insert you message..."
                            _focus={{ border:'2px solid', borderColor: '#385898'}}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#385898"
                            fontSize="12px"
                            h="35px"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
            </MotionGridItem>
        </Grid>
    );
  }

  export default ContactForm;