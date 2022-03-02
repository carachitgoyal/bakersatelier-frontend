import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  hidden: { opacity: 0, y: 40 },
};

const Category = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      variants={variant}
      initial="hidden"
      maxW={{ base: '90vw', xl: '8xl' }}
      py="3rem"
    >
      category
    </MotionBox>
  );
};

export default Category;
