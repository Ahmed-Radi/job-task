import React from 'react'
import { Box, Flex, FormControl, Select, Image, InputGroup, InputLeftAddon, Input, InputRightAddon } from '@chakra-ui/react';
import { SearchIcon, EmailIcon, Icon, BellIcon } from '@chakra-ui/icons';

function Layout({children}) {
    const DrawerWidth = '250px'
    const NavbarHeight = '20px'
    const NavbarPadding = '20px'
    const style = {
        width: DrawerWidth
    }
    return (
        <Box>
            {/* Navbar */}
            <Flex>
                <Box p="20px" bg="#fff" sx={{width: `calc(100% - ${DrawerWidth})`, position: 'fixed',top:'0', marginLeft: DrawerWidth}} zIndex={'200'}>
                    <Flex justify='space-between' px="10px" >
                        <Flex bg="#ddd" borderRadius='5px'>
                            <InputGroup size='sm'>
                                <InputLeftAddon bg="transparent" border={'none'} children={<SearchIcon w={3} h={3} borderRadius='5px' />} />
                                <Input
                                    placeholder='courses, tasks, homework'
                                    bg='transparent'
                                    // color="#fff"
                                    width={'240px'}
                                    // position="relative"
                                    border={'none'}
                                    _focus={{outline: 'none'}}
                                    />
                                <InputRightAddon
                                    _after={{content: '""', height: '60%', width: '1px', background: '#eee', top: '50%', transform: 'translateY(-50%)' , position: 'absolute'}}
                                    p='0'
                                    bg={'transparent'}
                                    children={
                                        <FormControl bg='#ddd'>
                                            <Select
                                                id='country'
                                                border={'none'}
                                                h='30px'
                                                w="80px"
                                                _focus={{outline: 'none'}}
                                            >
                                                <option>Task</option>
                                                <option>Course</option>
                                                <option>homework</option>
                                            </Select>
                                        </FormControl>
                                } />
                            </InputGroup>
                        </Flex>
                        <Box>
                            <Flex>
                                <Box bg="gray.300" borderRadius="5px" position={'relative'} w={'32px'} h={'24px'} p='2px'>
                                {/* _before={{content:  '""', height: '10px', width: '10px', position: 'absolute', background: `${s === 't'? 'green' : null }`, top: "2px", right: "-8px"}} */}
                                    <Box display={'flex'} justifyContent="center" alignItems="center">
                                        <Box position={'absolute'} w="6px" h="6px" top="5px" right="0">
                                            <Icon display={'flex'} viewBox='0 0 200 200' color='blue.500' maxW="100%" maxH="100%">
                                                <path
                                                    fill='currentColor'
                                                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                                                />
                                            </Icon>
                                        </Box>
                                        <Box display="flex">
                                            <EmailIcon w="20px" h="20px" />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box bg="gray.300" borderRadius="5px" position={'relative'} w={'32px'} h={'24px'} p='2px' ml={'10px'}>
                                    <Box display={'flex'} justifyContent="center" alignItems="center">
                                        <Box position={'absolute'} w="6px" h="6px" top="5px" right="4px">
                                            <Icon display={'flex'} viewBox='0 0 200 200' color='red.500' maxW="100%" maxH="100%">
                                                <path
                                                    fill='currentColor'
                                                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                                                />
                                            </Icon>
                                        </Box>
                                        <Box display="flex">
                                            <BellIcon w="20px" h="20px" />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box ml="10px" bg="gray.300" borderRadius={'5px'}>
                                    <Box w="150px" h="25px">
                                        <InputGroup h="25px">
                                            <InputLeftAddon h="25px" w="60px" bg="transparent" children={
                                                <Image
                                                    borderRadius='full'
                                                    boxSize='20px'
                                                    src='https://bit.ly/dan-abramov'
                                                    alt='Dan Abramov'
                                                />}
                                            />
                                            <Select placeholder='Option 1' h="25px">
                                                <option value='option1'>Option 1</option>
                                                <option value='option2'>Option 2</option>
                                                <option value='option3'>Option 3</option>
                                            </Select>
                                        </InputGroup>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                {/* Drawer */}
                <Box style={style} mr='20px' display={{sm: 'none', md: 'block'}}>
                    Side bar
                </Box>
                <Box sx={{flex: 1}}>
                    <Box sx={{marginTop: `calc( ${NavbarHeight} + (${NavbarPadding} * 2) + 12px) `}}></Box>
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}

export default Layout