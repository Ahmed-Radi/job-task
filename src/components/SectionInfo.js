import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Box, Flex, Heading, Progress, Text, StackDivider, VStack } from "@chakra-ui/react"
import { UnlockIcon, ViewIcon } from '@chakra-ui/icons';
import { sectionData } from './sectionData';

function SectionInfo() {
    return (
        <>
            <Box my="20px">
                <Flex align={'center'} justify={'space-between'}>
                    <Heading as={'h5'} size="md">Lesson</Heading>
                    <FontAwesomeIcon icon={faEllipsisVertical} bg={'green'} />
                </Flex>
                <VStack spacing={6} align='stretch' divider={<StackDivider borderColor='gray.200' />}>
                    {sectionData.map(data => (
                        <Flex justify="space-between" align={'center'}>
                            <Flex align={'center'} flexBasis="158px">
                                <Box mr="5px">
                                    {data.icon}
                                </Box>
                                <Box>
                                    <Heading as="h6" size="sm">
                                        {data.sectionName}
                                    </Heading>
                                </Box>
                            </Flex>
                            {data.date !== '' ? (
                                <>
                                    <Flex flexDir={'column'}>
                                        <Text mb="5px">upload Date:</Text>
                                        <Heading as="h6" size="xs">{data.date}</Heading>
                                    </Flex>
                                    <Flex flexDir={'column'}>
                                        <Heading as="h6" size="sm" mb="5px"><Progress value={data.views} max={data.maxViews} min={0} minW="150px" h="5px" borderRadius={'5px'} /></Heading>
                                        <Heading as="h6" size="xs">
                                            <Flex align={'center'}>
                                                <ViewIcon mr="5px" />
                                                {data.views > 0 ? `Views: ${data.views} / ${data.maxViews}` : 'Un published Yet'}
                                            </Flex>
                                        </Heading>
                                    </Flex>
                                </>
                            ) : ''
                            }
                            <Flex align={'center'}>
                                {data.openOrClose === true ? (
                                    <UnlockIcon color={'green.300'} mr="10px" />
                                ) : <UnlockIcon mr="10px" />}
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </Flex>
                        </Flex>
                    ))}
                </VStack>
            </Box>
        </>
    )
}

export default SectionInfo