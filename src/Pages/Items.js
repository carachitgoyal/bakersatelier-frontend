import { Center, Container, VStack, Wrap } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemsHOC from '../Components/Items/Items.HOC';
import Card from '../Components/Product/Card';

// http://localhost:8080/api/v1/items/?category=muffins
const Items = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-sparse-arrays
  const imageURL = [
    'https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    ,
    'https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1602&q=80',
    ,
    'https://images.unsplash.com/photo-1613119719948-d53865658a88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    ,
    'https://images.unsplash.com/photo-1612539466296-4ecf1db303e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1543&q=80',
  ];
  let { category } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://bakersatelier.herokuapp.com/api/v1/items/?category=${category}`
      )
      .then(res => {
        console.log(res.data.getItems);
        setData(res.data.getItems);
      })
      .catch(err => console.log(err));
  }, [category]);

  return (
    <Container maxW="9xl" p="0" m="0">
      <ItemsHOC
        url={imageURL[Math.floor(Math.random() * 4)]}
        heading={category}
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
