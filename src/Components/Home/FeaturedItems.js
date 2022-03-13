import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../Product/Card';
import axios from 'axios';

const MotionVStack = motion(VStack);
const MotionBox = motion(Box);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  hidden: { opacity: 0, y: 40 },
};

const variantBox = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.8 } },
  hidden: { opacity: 0, y: 40 },
};

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
//route - http://localhost:8080/api/v1/items/?featured=true
const FeaturedItems = () => {
  const [data, setData] = useState([]);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    axios
      .get('https://bakersatelier.herokuapp.com/api/v1/items/?featured=true')
      .then(res => {
        setData(res.data.getItems);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Container my="4rem">
      <VStack gap="4rem">
        <MotionVStack animate={controls} variants={variant} initial="hidden">
          <Heading fontSize={{ base: '4xl', md: '6xl' }} fontWeight="400">
            Featured Items
          </Heading>

          <MotionBox
            ref={ref}
            animate={controls}
            variants={variantBox}
            initial="hidden"
            maxW={{ base: '90vw', xl: '8xl' }}
            py="3rem"
          >
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <Slider {...settings}>
              {data.length > 0 ? (
                data.map(item => <Card item={item} />)
              ) : (
                <Text>Loading...</Text>
              )}
            </Slider>
          </MotionBox>
        </MotionVStack>
      </VStack>
    </Container>
  );
};

export default FeaturedItems;
