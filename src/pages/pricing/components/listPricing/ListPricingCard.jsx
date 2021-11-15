import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { FcCustomerSupport, FcElectronics, FcCommandLine } from 'react-icons/fc';
import { ActionButton } from './ActionButton';
import { PricingCard } from './PricingCard';

const ListPricingCard = () => {
    return (
        <Box
            as="section"
            bg={useColorModeValue('white', '#222222')}
            py="14"
            px={{ base: '4', md: '8' }}
        >
            <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={{ base: '8', lg: '10' }}
            maxW="7xl"
            mx="auto"
            justifyItems="center"
            alignItems="center"
            >
            <PricingCard
                data={{
                price: '$29',
                name: 'Back-End Services',
                features: [
                    'NodeJS ~ Ruby on Rails',
                    'MongoDB',
                    'PostgresDB',
                    'Others',
                    'Free Updates',
                ],
                }}
                transform={{ lg: 'scale(1.18)' }}
                icon={FcCommandLine}
                button={
                <ActionButton variant="outline" borderWidth="2px">
                    Contact
                </ActionButton>
                }
            />
            <PricingCard
                zIndex={1}
                isPopular
                transform={{ lg: 'scale(1.25)'}}
                data={{
                price: '$49',
                name: 'Web UI / Software',
                features: [
                    'Web app UI components',
                    'Java Software',
                    'Python Software',
                    'JS Scripts',
                    'Free Updates',
                ],
                }}
                icon={FcElectronics}
                button={<ActionButton>Contact</ActionButton>}
            />
            <PricingCard
                data={{
                price: 'Email',
                name: 'Other Services',
                features: [
                    'SEO',
                    'Support on your app',
                    'Support on your web site',
                    'Video Editing',
                    'Free Updates',
                ],
                }}
                transform={{ lg: 'scale(1.15)' }}
                icon={FcCustomerSupport}
                button={
                <ActionButton variant="outline" borderWidth="2px">
                    Contact
                </ActionButton>
                }
            />
            </SimpleGrid>
        </Box>
    )
};

export default ListPricingCard;