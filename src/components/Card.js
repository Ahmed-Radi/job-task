import React from 'react'
import { Box, Text, Flex, Heading, Image, VStack, StackDivider, AvatarGroup } from "@chakra-ui/react"
import { DragHandleIcon, UnlockIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { userInfo } from './data'

function Card() {
    return (
        <>
            <Box mt="20px" w="100%">
                <Flex justifyContent={'space-between'} flexWrap='wrap'>
                    {userInfo.map((data, key) => (
                        <Box key={key} w={{lg: "31%", md: "48%", sm: "48%"}} border={'1px'} borderColor="#ddd" mb={{lg: "30px", sm: '20px'}} p="20px" borderRadius="7px">
                            <Flex justifyContent={'space-between'} >
                                <Flex>
                                    <Box mr="10px">
                                        <Image
                                            borderRadius='full'
                                            boxSize='40px'
                                            src={data.userAvatar}
                                            alt={data.userName}
                                        />
                                    </Box>
                                    <Box>
                                        <Flex flexDir={'column'}>
                                            <Heading as="h5" size={'sm'} textTransform="capitalize">{data.userName}</Heading>
                                            <Heading as="h6" fontSize='12px' textTransform="capitalize">By: {data.adminName}</Heading>
                                        </Flex>
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Box mr="5px">
                                        <UnlockIcon color={'green.300'}/>
                                    </Box>
                                    <Box><DragHandleIcon /></Box>
                                </Flex>
                            </Flex>
                            <VStack spacing={2} align='stretch' divider={<StackDivider borderColor='gray.200' />}>
                                <Box>
                                    {data.description}
                                </Box>
                                <Flex justify={'space-between'}>
                                    {data?.dataInfo?.map((d, key) => (
                                        <Box key={key}>
                                            <Text fontSize={'14px'}>{d?.header}:</Text>
                                            <Heading as="h6" fontSize="12px">{d?.info}</Heading>
                                        </Box>
                                    ))}
                                </Flex>
                                <Flex justify="space-between" align={'center'}>
                                    <Box>
                                        <AvatarGroup size='sm' children max={3} spacing="-4" borderColor={'#3182CE'}>
                                            {data.userInClass}
                                        </AvatarGroup>
                                    </Box>
                                    <Flex>
                                        <Box mr="5px">
                                            <FontAwesomeIcon color="#3182CE" icon={faFile} />
                                        </Box>
                                        <Box>
                                            <Text>{data.filesNumber}</Text>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </VStack>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </>
    )
}

export default Card