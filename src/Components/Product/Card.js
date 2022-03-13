import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';

const Card = ({ item }) => {
  return (
    <Center>
      <VStack
        bg="#F9F9F9"
        w={{ base: '10rem', md: '22rem' }}
        h={{ base: '14rem', md: '24rem' }}
        mx="auto"
        alignItems={'start'}
        p={{ base: '0.5rem', md: '1rem' }}
      >
        <Image
          w={{ base: '100%', md: '100%' }}
          h={{ base: '8rem', md: '16rem' }}
          objectFit="cover"
          src={item.url}
        />
        <Text
          isTruncated
          maxW={{ base: '8rem', md:'16rem' }}
          noOfLines={1}
          px={'2'}
          fontSize={{ base: 'md', md: 'xl' }}
        >
          {item.title}
        </Text>
        <HStack
          px={'2'}
          w="full"
          justifyContent={'space-between'}
          color="brand.brown"
          fontSize={{ base: 'sm', md: 'md' }}
        >
          <Text>₹ {item.price}</Text>
          <Box
            as="a"
            href="https://api.whatsapp.com/send/?phone=919780928001&text&app_absent=0"
            _hover={{ color: 'black' }}
          >
            Buy Now
          </Box>
        </HStack>
      </VStack>
    </Center>
  );
};

export default Card;
