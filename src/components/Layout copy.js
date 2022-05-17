import React from 'react'
import { Box, Flex, FormControl, Select, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function Layout({children}) {
    const DrawerWidth = '250px'
    const NavbarHeight = '20px'
    const style = {
        width: DrawerWidth
    }
    return (
        <Box>
            {/* Navbar */}
            <Flex>
                <Box bg="red" sx={{width: `calc(100% - ${DrawerWidth})`, position: 'fixed',top:'0', marginLeft: DrawerWidth}}>
                    <Flex justify='space-between' px="10px">
                        <Flex>
                            <IconButton aria-label='Search database'
                                icon={<SearchIcon w={3} h={3} />}
                            />
                            <FormControl>
                                <Select id='country' placeholder='Select country'>
                                    <option>United Arab Emirates</option>
                                    <option>Nigeria</option>
                                </Select>
                            </FormControl>
                        </Flex>
                        <Box>
                            aaaaaaaaaaaaaaaaa
                        </Box>
                    </Flex>
                </Box>
                    {/* Drawer */}
                    <Box style={style} mr='20px'>
                        hissssssssssssssssss
                    </Box>
                    <Box sx={{flex: 1}}>
                        <Box sx={{marginTop: NavbarHeight}}></Box>
                        {children}
                    </Box>
                </Flex>
        </Box>
    )
}

export default Layout