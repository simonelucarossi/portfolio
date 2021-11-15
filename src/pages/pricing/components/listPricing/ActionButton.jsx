import { Button } from '@chakra-ui/react'
import * as React from 'react'

export const ActionButton = (props ) => (
  <Button
    bg={'#4a80bb'}
    size="lg"
    w="full"
    color='white'
    fontWeight="extrabold"
    py={{ md: '8' }}
    {...props}
  />
);