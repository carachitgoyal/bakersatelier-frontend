import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import AboutImage from '../../Images/about.webp';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const MotionVStack = motion(VStack);
const MotionBox = motion(Box);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  hidden: { opacity: 0, y: 40 },
};

const variantImage = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.8 } },
  hidden: { opacity: 0, y: 40 },
};

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <Container mx="auto" maxW={'8xl'} my="8rem" p="0">
      <MotionVStack
        ref={ref}
        animate={controls}
        variants={variant}
        initial="hidden"
      >
        <Heading fontSize={{ base: '4xl', md: '6xl' }} fontWeight="400">
          About Us
        </Heading>
        <Text
          maxW="36rem"
          fontWeight={'300'}
          fontSize={{ base: 'md', md: 'xl' }}
        >
          these are the featured items
        </Text>
        <HStack
          overflow={'hidden'}
          maxW="8xl"
          justifyContent={{ base: 'space-between', md: 'space-around' }}
          py="4rem"
          spacing={{ base: '0', lg: '4rem' }}
        >
          <MotionBox
            animate={controls}
            variants={variantImage}
            initial="hidden"
            maxW={{ base: '30rem', md: '40rem' }}
          >
            <Image
              zIndex={'0'}
              src={AboutImage}
              h={{ base: '16rem', md: '20rem', lg: '24rem' }}
              align={'flex-end'}
              objectFit="cover"
              objectPosition="right top"
              mt="auto"
            />
          </MotionBox>
          <VStack alignItems={'start'} pr="1rem">
            <Text fontWeight="500" fontSize={{ base: 'sm', md: 'xl' }}>
              They are baked specially for you
            </Text>
            <Text
              maxW="36rem"
              fontWeight={'300'}
              fontSize={{ base: 'xs', md: 'md' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id purus
              in nulla eget scelerisque massa aliquam felis in. Sed nunc eget
              phasellus ultricies massa, vitae sapien euismod viverra. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Id purus in
              nulla eget scelerisque massa aliquam felis in.
            </Text>
          </VStack>
        </HStack>
      </MotionVStack>
    </Container>
  );
};

export default AboutUs;
