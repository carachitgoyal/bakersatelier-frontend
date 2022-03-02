import { Container } from '@chakra-ui/react';
import React from 'react';
import AboutUs from '../Components/Home/AboutUs';
import Categories from '../Components/Home/Categories';
import FeaturedItems from '../Components/Home/FeaturedItems';
import Hero from '../Components/Home/Hero';

const Home = () => {
  return (
    <Container maxW="9xl" p="0" m="0" pt={{ base: '8rem', md: '0' }}>
      <Hero />
      <FeaturedItems />
      <AboutUs />
      <Categories />
    </Container>
  );
};

export default Home;
