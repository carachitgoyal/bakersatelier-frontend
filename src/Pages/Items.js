import { Center, Container, VStack, Wrap } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemsHOC from '../Components/Items/Items.HOC';
import Card from '../Components/Product/Card';

// http://localhost:8080/api/v1/items/?category=muffins
const Items = () => {
  const [data, setData] = useState([]);
  let { category } = useParams();
  useEffect(() => {
    axios
      .get(`/api/v1/items/?category=${category}`)
      .then(res => {
        console.log(res.data.getItems);
        setData(res.data.getItems);
      })
      .catch(err => console.log(err));
  },[category]);

  return (
    <Container maxW="9xl" p="0" m="0">
      <ItemsHOC
        url="https://images.unsplash.com/photo-1612539466296-4ecf1db303e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1543&q=80"
        heading="Cakes"
      />
      <Center
        maxW={'8xl'}
        mx="auto"
        py={{ base: '2rem', md: '6rem', xl: '8rem' }}
      >
        <Wrap
          align="center"
          justify="center"
          mx="auto"
          spacing={['0.5rem', '1rem', '2rem']}
        >
          {data.map(item => (
            <Card item={item} />
          ))}
        </Wrap>
      </Center>
    </Container>
  );
};

export default Items;
