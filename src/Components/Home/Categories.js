import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  Wrap,
  VStack,
  Center,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BreadImg from '../../Images/bread.png';
import CakeImg from '../../Images/cake.png';
import PuffinImg from '../../Images/puffin.png';
import SaviouriesImg from '../../Images/saviouries.png';
import { Link } from 'react-router-dom';

const MotionVStack = motion(VStack);
const MotionBox = motion(Box);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  hidden: { opacity: 0, y: 40 },
};

const variantBox = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.5 } },
  hidden: { opacity: 0, y: 40 },
};

const Categories = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Container maxW="8xl" my="4rem">
      <VStack gap="4rem">
        <MotionVStack
          ref={ref}
          animate={controls}
          variants={variant}
          initial="hidden"
        >
          <Heading fontSize={{ base: '4xl', md: '6xl' }} fontWeight="400">
            Categories
          </Heading>

          <MotionBox
            animate={controls}
            variants={variantBox}
            initial="hidden"
            maxW={{ base: '90vw', xl: '8xl' }}
            py="3rem"
          >
            <Wrap
              py={{ base: '1rem', md: '2rem' }}
              maxW={{ base: '90vw', md: '90vw' }}
              align={'center'}
              justify="space-around"
            >
              <Link to="/muffins">
                <Center
                  p={{ base: '1rem', md: '2rem' }}
                  minW={{ base: '10rem', md: '16rem' }}
                  gap="1rem"
                >
                  <Image
                    maxW={{ base: '2rem', md: '4rem' }}
                    src={PuffinImg}
                    alt={'Muffins'}
                  />
                  <Text fontSize={{ base: 'md', md: '2xl' }}>Muffins</Text>
                </Center>
              </Link>
              <Link to="/breads">
                <Center
                  p={{ base: '1rem', md: '2rem' }}
                  minW={{ base: '10rem', md: '16rem' }}
                  gap="1rem"
                >
                  <Image
                    maxW={{ base: '2rem', md: '4rem' }}
                    src={BreadImg}
                    alt={'Bread'}
                  />
                  <Text fontSize={{ base: 'md', md: '2xl' }}>Breads</Text>
                </Center>
              </Link>
              <Link to="/cakes">
                <Center
                  p={{ base: '1rem', md: '2rem' }}
                  minW={{ base: '10rem', md: '16rem' }}
                  gap="1rem"
                >
                  <Image
                    maxW={{ base: '2rem', md: '4rem' }}
                    src={CakeImg}
                    alt={'Cake'}
                  />
                  <Text fontSize={{ base: 'md', md: '2xl' }}>Cakes</Text>
                </Center>
              </Link>
              <Link to="/savouries">
                <Center
                  p={{ base: '1rem', md: '2rem' }}
                  minW={{ base: '10rem', md: '16rem' }}
                  gap="1rem"
                >
                  <Image
                    maxW={{ base: '2rem', md: '4rem' }}
                    src={SaviouriesImg}
                    alt={'Savouries'}
                  />
                  <Text fontSize={{ base: 'md', md: '2xl' }}>Savouries</Text>
                </Center>
              </Link>
            </Wrap>
          </MotionBox>
        </MotionVStack>
      </VStack>
    </Container>
  );
};

export default Categories;
