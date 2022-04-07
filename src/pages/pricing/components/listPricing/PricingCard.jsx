import {
    Flex,
    Heading,
    Icon,
    List,
    ListIcon,
    ListItem,
    Text,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { HiCheckCircle } from 'react-icons/hi'
  import { Card } from './Card'
import PropTypes from 'prop-types';
  
  export const PricingCard = (props) => {
    const { data, icon, button, ...rest } = props
    const { features, price, name } = data
    const accentColor = useColorModeValue('blue.600', 'blue.200')
  
    return (
      <Card rounded={{ sm: 'xl' }} {...rest}>
        <VStack spacing={6}>
          <Icon aria-hidden as={icon} fontSize="35px" color={accentColor} />
          <Heading size="md" fontWeight="extrabold">
            {name}
          </Heading>
        </VStack>
        <Flex align="flex-end" justify="center" fontWeight="extrabold" color={useColorModeValue('#3a3a3a', '#8d8d8d')} my="8">
          <Heading size="3xl" fontWeight="inherit" lineHeight="0.9em">
            {price}
          </Heading>
          {
              price !== 'Email' ?
              (
                <Text fontWeight="inherit" fontSize="2xl">
                / p.
              </Text>
              ) : ''
          }
          
        </Flex>
        <List spacing="4" mb="8" maxW="28ch" mx="auto">
          {features.map((feature, index) => (
            <ListItem fontWeight="medium" key={index}>
              <ListIcon fontSize="xl" as={HiCheckCircle} marginEnd={2} color={'#ef6f6f'} />
              {feature}
            </ListItem>
          ))}
        </List>
        {button}
      </Card>
    )
  }

  PricingCard.propTypes = {
    data: PropTypes.object,
    icon: PropTypes.object,
    button: PropTypes.object,
    features: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
  }
  