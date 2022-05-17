import React from 'react'
import { Box, Container, Flex,Button, Spacer, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { DragHandleIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Card from '../components/Card';

function Discussion() {
    return (
        <div>
            <Container maxW={{lg: '6xl'}}>
                <Box w="100%" py="20px" my="20px">
                    <Breadcrumb spacing='8px' separator={<ArrowForwardIcon color='gray.500' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>About</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='/'>Discussion</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <Flex my="20px">
                    <Spacer />
                    <Button
                        colorScheme="teal"
                        justify={'flex-end'}
                        bg="blue.500"
                        leftIcon={'+'}
                        px="25px"
                        _hover={{
                            background: "white",
                            color: "blue.500",
                        }}
                    >
                        Hover me
                    </Button>
                </Flex>
                <Box bg="gray.200" p="20px" borderRadius={'5px'}>
                    <Flex alignItems={'center'}>
                        <Box mr="5px">
                            <DragHandleIcon />
                        </Box>
                        <Box>
                            <Heading as='h3' size='xl' >Discussion rooms</Heading>
                        </Box>
                    </Flex>
                </Box>
                <Card />
            </Container>
        </div>
    )
}

export default Discussion