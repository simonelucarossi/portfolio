import { Box, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import CardBadge from './CardBadge';

export const Card = (props ) => {
  const { children, isPopular, ...rest } = props
  return (
    <Box
      bg={useColorModeValue('#fbfbfb', '#222222')}
      position="relative"
      border={useColorModeValue('1px solid #e5e5e5', '2px solid #262626')}
      px="6"
      pb="6"
      pt="16"
      overflow="hidden"
      shadow="lg"
      maxW="100%"
      width="100%"
      {...rest}
    >
      {isPopular && <CardBadge>Most Popular</CardBadge>}
      {children}
    </Box>
  )
}