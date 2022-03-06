import { Box, Center, Container, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ItemsHOC = ({ heading, url }) => {
  return (
    <Container
      p="0"
      pt={{ base: '6rem', md: '7rem', lg: '7.5rem' }}
      maxW="9xl"
      w="full"
      m="0"
    >
      <Center
        h={{
          base: '15rem',
          md: '18rem',
          xl: '25rem',
        }}
        objectFit={'cover'}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={'center center'}
        backgroundSize={'cover'}
        backgroundImage={url}
      >
        <Text
          textTransform={'capitalize'}
          textShadow={'md'}
          fontSize={['7xl', '7xl', '8xl']}
          color="white"
        >
          {heading}
        </Text>
      </Center>
    </Container>
  );
};

export default ItemsHOC;
