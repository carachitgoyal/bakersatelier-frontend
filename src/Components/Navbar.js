import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="absolute" zIndex={'5'}>
      <Flex
        color="brand.black"
        minH={{ base: '6rem', md: '8rem' }}
        py={{ base: 2 }}
        w="99vw"
        px={{ base: 4 }}
        align={'center'}
        justify="space-between"
        flexDirection={{ base: 'row-reverse', md: 'row' }}
      >
        <Flex
          maxW="3rem"
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
          alignItems="end"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <MdClose color="#E99452" size={26} />
              ) : (
                <HiOutlineMenuAlt3 color="#E99452" size={26} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          maxW={{ base: '8rem', md: '8xl' }}
          mx={{ base: '0', md: 'auto' }}
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'space-between' }}
        >
          <Logo />
          <Flex display={{ base: 'none', md: 'flex' }} align="center" ml="auto">
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                p={2}
                px="6"
                fontSize={'xl'}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'xs'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link to={`${href}`}>
      <Box
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: 'brand.brown' }}
      >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'white' }}
              fontSize={'lg'}
              fontWeight={400}
            >
              {label}
            </Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'white'} w={5} h={5} as={BiChevronRight} />
          </Flex>
        </Stack>
      </Box>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg='white' p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600}>{label}</Text>
        {children && (
          <Icon
            as={BiChevronDown}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack mt={2} pl={4} borderStyle={'solid'} align={'start'}>
          {children &&
            children.map(child => (
              <Link to={`${child.href}`}>
                <Box key={child.label} py={2}>
                  {child.label}
                </Box>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Items',
    children: [
      {
        label: 'Muffin',
        href: '/muffins',
      },
      {
        label: 'Cakes',
        href: '/cakes',
      },
      {
        label: 'Breads',
        href: '/breads',
      },
      {
        label: 'Savouries',
        href: '/savouries',
      },
    ],
  },
  {
    label: 'Contact',
    children: [
      {
        label: 'Instagram',
        href: 'https://instagram.com/bakersatelier_chd?utm_medium=copy_link',
      },
      {
        label: 'Whatsapp',
        href: 'https://api.whatsapp.com/send/?phone=919780928001&text&app_absent=0',
      },
      {
        label: 'Zomato',
        href: 'https://zoma.to/order/20129304',
      },
      {
        label: 'Google',
        href: 'https://business.google.com/v/bakers-atelier-by-shruti/017440765892640493492/a5cd/_?caid=16032994729&agid=141268333588&gclid=Cj0KCQiA3rKQBhCNARIsACUEW_YQpX2aobv8eAr2A4eByBPlaIz_2_qmYlycEjj6ZFTnQW5E2U3gXnUaAi8REALw_wcB',
      },
    ],
  },
];
export default Navbar;
