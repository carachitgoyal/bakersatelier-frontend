import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../Images/logo.png';

const Logo = () => {
  return (
    <Box w={{ base: '8rem', md: '10rem' }}>
      <Link to="/">
        <Image src={LogoImage} />
      </Link>
    </Box>
  );
};

export default Logo;
