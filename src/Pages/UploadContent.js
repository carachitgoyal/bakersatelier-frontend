import {
  Container,
  Box,
  Heading,
  Center,
  Button,
  VStack,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
  Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

const UploadContent = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [featured, setFeatured] = useState(false);

  const titleChangeHandler = event => {
    setTitle(event.target.value);
  };
  const urlChangeHandler = event => {
    setUrl(event.target.value);
  };
  const priceChangeHandler = event => {
    setPrice(event.target.value);
  };
  const handleCategory = event => {
    setCategory(event.target.value);
  };
  const handleFeatured = () => {
    setFeatured(!featured);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    let databody = {
      title: title,
      url: url,
      price: price,
      category: category,
      featured: featured,
    };
    console.log(databody);
    setTitle('');
    setUrl('');
    setPrice('');
    setCategory('');
    setFeatured(false);

    axios
      .post('/api/v1/items', databody)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <Container
      maxW="full"
      centerContent
      py="5rem"
      color="brand.black"
      minH={{ base: '140vh', md: '100vh', lg: '80vh' }}
    >
      <Center
        mt={['16', '16', '24']}
        w={['100vw', '100vw', '640px']}
        px={['8', '16']}
      >
        <VStack spacing={8} my={'8'}>
          <VStack alignItems={'center'}>
            <Heading fontSize={'5xl'} fontWeight="300" color="brand.black">
              Add Product
            </Heading>
          </VStack>
          <WrapItem>
            <Box w={['72', '400px', '530px']}>
              <Box m={8}>
                <VStack spacing={5}>
                  <form action="submit" onSubmit={handleSubmit}>
                    <FormControl isRequired id="name" mb={'4'}>
                      <FormLabel fontSize={['md', 'xl']}>Item Name</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <Input
                          type="text"
                          size={'md'}
                          value={title}
                          onChange={titleChangeHandler}
                          w={['56', '80']}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired id="url" mb={'4'}>
                      <FormLabel fontSize={['md', 'xl']}>
                        URL of Image
                      </FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <Input
                          type="url"
                          size="md"
                          value={url}
                          onChange={urlChangeHandler}
                          w={['56', '80']}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="category" mb={'4'}>
                      <FormLabel fontSize={['md', 'xl']}>Category</FormLabel>
                      <InputGroup mb={'4'}>
                        <Select
                          placeholder="Select category"
                          onChange={handleCategory}
                          value={category}
                          variant="outline"
                          borderColor={'gray.200'}
                          py={'2'}
                          w={['56', '80']}
                        >
                          <option value="muffins">Muffins</option>
                          <option value="cakes">Cake</option>
                          <option value="breads">breads</option>
                          <option value="savouries">Savouries</option>
                        </Select>
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name" mb={'4'} isRequired>
                      <FormLabel fontSize={['md', 'xl']}>Price</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <Input
                          type="text"
                          size="md"
                          value={price}
                          onChange={priceChangeHandler}
                          w={['56', '80']}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name" my={'5'}>
                      <InputGroup borderColor="#E0E1E7">
                        <Checkbox
                          size={'lg'}
                          spacing="1rem"
                          borderColor={'gray.200'}
                          isChecked={featured}
                          onChange={handleFeatured}
                          fontSize={['md', 'xl']}
                        >
                          Add to Featured
                        </Checkbox>
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name" float="right" mb={'4'}>
                      <Button
                        variant="solid"
                        bg="gray.900"
                        rounded={'full'}
                        px="20px"
                        fontSize={'md'}
                        fontWeight={'light'}
                        color="white"
                        _active={{
                          backgroundColor: 'brown',
                        }}
                        _hover={{
                          backgroundColor: 'brown',
                        }}
                        type="submit"
                      >
                        Add Product
                      </Button>
                    </FormControl>
                  </form>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
        </VStack>
      </Center>
    </Container>
  );
};
export default UploadContent;
