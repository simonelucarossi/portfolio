import React from 'react';
import {Flex, useColorModeValue, Text, Grid, GridItem, Button, Box, ListItem, List, ListIcon} from '@chakra-ui/react';
import { IoStorefrontOutline, IoCloudDownloadOutline, IoBuildSharp } from 'react-icons/io5';
import { MdCheckCircle } from 'react-icons/md';

const Services = () => {

    const buttonHireMeBackGround = useColorModeValue('#ef6f6f', 'black');

    const servicesList = [
        {
            title: 'FRONT-END SERVICES',
            price: '40/p.',
            objects: [
                'React',
                'Vue',
                'Angular',
                'React-Native',
                'E-Commerce',
                'Stripe',
            ],
            icon: <IoStorefrontOutline className='services__service_category_icon'/>,
        }, 
        {
            title: 'BACK-END SERVICES',
            price: '50/p.',
            objects: [
                'NodeJS',
                'Ruby on Rails',
                'MongoDB',
                'PostgresDB',
                'Others',
                'Free Updates',
            ],
            icon: <IoCloudDownloadOutline className='services__service_category_icon'/>,
        },
        {
            title: 'SOFTWARE SERVICES',
            price: '30/Email',
            objects: [
                'SEO',
                'Support on your app',
                'Support on your web site',
                'Video Editing',
                'Figma',
                'Free Updates',
            ],
            icon: <IoBuildSharp className='services__service_category_icon'/>,
        }
    ]

    return (
        <Box 
            className='test-timeline' 
            id={'firstContainerRef'}
            padding={{
                base: '0px',
                lg: '0vw 19vw 0vw 19vw'
            }}
        >
            <>
                <Flex
                            direction={'column'}
                            alignItems={'center'}
                            mb={'5rem'}
                            mt={'3rem'}
                        >
                            <Text
                                fontSize={17}
                                fontWeight={500}
                                mb={-2}
                                color={'lightgray'}
                            >
                                WHAT I OFFER?  
                            </Text>
                            <Text
                                fontSize={26}
                                fontWeight={600}
                                mb={1}
                            >
                              SERVICES    
                            </Text>
                            <div 
                                className="section-title-divider"
                                style={{
                                    width: '6vw',
                                    height: '4px',
                                    borderRadius: '5px',
                                    backgroundColor: '#ef6f6f',
                                    marginBottom: '25px'
                                }}
                            />
                        </Flex>

                <Grid pl={10} pr={10} mb={20} gap={20} templateColumns={"repeat(3, 1fr)"}>
                            {
                                servicesList.map((service, index) => {
                                    return (
                                        <GridItem 
                                            key={index}
                                            colSpan={{ base: '3', lg: '1' }}
                                            className={'services__service_container'}
                                        >
                                            <Flex direction={'column'} justifyContent={'center'} h={'100%'}>
                                                <h2 className='services__service_category_title'>{service?.title}</h2>
                                                <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
                                                    {
                                                        service?.icon
                                                    }
                                                    <Text className='services__service_category_price'>
                                                        {
                                                            service?.price
                                                        }
                                                    </Text>
                                                </Flex>
                                                <List borderRadius={10} boxShadow={'0px 0px 0px 1.4px #bfbfbf8c'} p={10} spacing={9} mt={'1.5rem'} mb={'5rem'} >
                                                    {
                                                        service?.objects?.map((serviceItem, index) => {
                                                            return (
                                                                <ListItem key={index} display={'flex'}>
                                                                    <ListIcon as={MdCheckCircle} color='blue.500' fontSize={'2rem'}/>
                                                                    <Text mt={'-0.3em'} ml={'.2 em'} fontSize={'2.5rem'}>{serviceItem}</Text>
                                                                </ListItem>
                                                            )
                                                        })
                                                    }
                                                </List>
                                                <Button leftIcon={<IoCloudDownloadOutline style={{ paddingRight: '5px', fontSize: '30px'}}/>} borderRadius={7} color={'white'} p={10} fontSize={18} bg={buttonHireMeBackGround}>
                                                    Download my CV
                                                </Button>
                                            </Flex>
                                        </GridItem>

                                    )
                                })
                            }

                            {/* <GridItem 
                                colSpan={{ base: '3', lg: '1' }}
                                className={'services__service_container'}
                            >
                                <Flex direction={'column'} justifyContent={'center'} h={'100%'}>
                                    <h2 className='services__service_category_title'></h2>
                                    <Flex justifyContent={'center'}>
                                        <IoCloudDownloadOutline className='services__service_category_icon'/>
                                    </Flex>
                                    <UnorderedList>
                                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                                        <ListItem>Consectetur adipiscing elit</ListItem>
                                        <ListItem>Integer molestie lorem at massa</ListItem>
                                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                                    </UnorderedList>
                                    <Button leftIcon={<IoCloudDownloadOutline style={{ paddingRight: '5px', fontSize: '30px'}}/>} borderRadius={7} color={'white'} p={10} fontSize={18} bg={buttonHireMeBackGround}>
                                        Download my CV
                                    </Button>
                                </Flex>
                            </GridItem>
                            <GridItem 
                                colSpan={{ base: '3', lg: '1' }}
                                className={'services__service_container'}
                            >
                                <Flex direction={'column'} justifyContent={'center'} h={'100%'}>
                                    <h2 className='services__service_category_title'></h2>
                                    <IoBuildSharp className='services__service_category_icon'/>
                                    <UnorderedList>
                                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                                        <ListItem>Consectetur adipiscing elit</ListItem>
                                        <ListItem>Integer molestie lorem at massa</ListItem>
                                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                                    </UnorderedList>
                                    <Button leftIcon={<IoCloudDownloadOutline style={{ paddingRight: '5px', fontSize: '30px'}}/>} borderRadius={7} color={'white'} p={10} fontSize={18} bg={buttonHireMeBackGround}>
                                        Download my CV
                                    </Button>
                                </Flex>
                            </GridItem> */}
                        </Grid>
            
            </>
            </Box>
    )

}

export default Services;