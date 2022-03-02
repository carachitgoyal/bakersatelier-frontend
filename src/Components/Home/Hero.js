import HeroImage from '../../Images/hero.png';
import React from 'react';
import {
  Box,
  Heading,
  Image,
  Center,
  Text,
  VStack,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Hero = () => {
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      justifyContent="space-between"
      maxW="9xl"
      mx="auto"
      padding="0"
      spacing="0"
    >
      <VStack
        zIndex={'1'}
        p={{ base: '1rem 1rem 0rem 1rem', xl: '0rem 2rem 12rem 2rem' }}
        alignSelf="center"
        spacing={{ base: '1rem', md: '1.5rem', xl: '2rem' }}
        ml={{ base: 'auto', lg: '8rem' }}
        mr={{ base: 'auto', lg: '-20rem' }}
        maxW={{ base: '80vw', lg: '40vw' }}
        alignItems="left"
      >
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeInOut' },
          }}
        >
          <Heading
            lineHeight={{ base: '3rem', md: '6rem' }}
            letterSpacing={'tight'}
            fontWeight={'400'}
            fontSize={{ base: '5xl', md: '74px', xl: '98px' }}
          >
            From our oven to your door
          </Heading>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.7, ease: 'easeInOut' },
          }}
        >
          <Text
            maxW="36rem"
            pb="1rem"
            fontWeight={'300'}
            fontSize={{ base: 'md', md: 'xl' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi
            iure atque, nemo dolorem eius excepturi deleniti molestias earum
            iusto
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 1, ease: 'easeInOut' },
          }}
          display="flex"
        >
          <Box
            as="button"
            bg="brand.brown"
            color="white"
            p="0.8rem 1.6rem"
            fontWeight={'600'}
            _hover={{
              bg: '#844F26',
            }}
          >
            Order Now
          </Box>
        </MotionBox>
      </VStack>
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, delay: 1.2, ease: 'easeInOut' },
        }}
      >
        <Image
          zIndex={'0'}
          src={HeroImage}
          w="clamp(60rem, 80vw,100rem)"
          h={{ base: '40rem', md: '40rem', lg: 'full' }}
          align={'flex-end'}
          objectFit="cover"
          mt="auto"
          transform={{
            base: 'translateY(-8rem)',
            md: 'translateY(-10rem)',
            lg: 'translateY(-4rem)',
          }}
        />
      </MotionBox>
    </Stack>
  );
};

export default Hero;
