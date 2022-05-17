import React from 'react'
import { Box, Container, VStack, Flex, Button, Spacer, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Portal } from "@chakra-ui/react"
import { DragHandleIcon, UnlockIcon, ArrowForwardIcon, PlusSquareIcon } from '@chakra-ui/icons';
import SectionInfo from '../components/SectionInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEllipsisVertical, faBookOpen, faClapperboard, faFile } from '@fortawesome/free-solid-svg-icons';

function Unit() {
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
                                <BreadcrumbLink href='/unit'>Unit</BreadcrumbLink>
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
                        Module
                    </Button>
                </Flex>
                <Box bg="gray.200" p="20px" borderRadius={'5px'}>
                    <Flex alignItems={'center'} justify={'space-between'}>
                        <Flex align={'center'}>
                            <DragHandleIcon mr="5px" />
                            <Heading as='h3' size='xl'>Unit one 1</Heading>
                        </Flex>
                        <Flex align={'center'}>
                            <UnlockIcon mr="10px" />
                            {/* Start PopOver */}
                            <Popover>
                                <PopoverTrigger>
                                    <PlusSquareIcon mr="10px" />
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent w="auto">
                                        <PopoverBody>
                                            <VStack space={2} align={'flex-start'}>
                                                <Flex align={'center'}>
                                                    <Box flexBasis="10px" display="flex" justifyContent={'center'}>
                                                        <FontAwesomeIcon color="#CBD5E0" icon={faBookOpen} />
                                                    </Box>
                                                    <Heading as="h6" fontSize={'12px'} color="#718096" textTransform={'capitalize'} ml={'10px'}>Add lesson Plan</Heading>
                                                </Flex>
                                                <Flex align={'center'}>
                                                    <Box display="flex" justifyContent={'center'}>
                                                        <FontAwesomeIcon color="#CBD5E0" icon={faClapperboard} />
                                                    </Box>
                                                    <Heading as="h6" fontSize={'12px'} color="#718096" textTransform={'capitalize'} ml={'10px'}>Add Video</Heading>
                                                </Flex>
                                                <Flex align={'center'}>
                                                    <Box flexBasis="16px" display="flex" justifyContent={'center'}>
                                                        <FontAwesomeIcon color="#CBD5E0" icon={faFile} />
                                                    </Box>
                                                    <Heading as="h6" fontSize={'12px'} w="130px" color="#718096" textTransform={'capitalize'} ml={'10px'}>Add Course material</Heading>
                                                </Flex>
                                            </VStack>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Portal>
                            </Popover>
                            {/* End PopOver */}
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </Flex>
                    </Flex>
                </Box>
                <SectionInfo />
            </Container>
        </div>
    )
}

export default Unit