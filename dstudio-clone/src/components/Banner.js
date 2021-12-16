import { Badge, Box, Container, Divider, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

// Images
import card_1 from "./img/card_1.jpg"
import card_2 from "./img/card_2.jpg"
import card_3 from "./img/card_3.jpg"

function Banner() {
    return (
        <Flex flexDirection="column" color="black" width="100vw">
            <Flex flexDirection="column" gap={2} pl={32} pr={32} pt={16} pb={16}>
                <Divider maxW="5%" backgroundColor="black" />
                <Heading fontWeight="black" fontSize="5xl">We Create Remarkable</Heading>
                <Heading fontSize="4xl">Digital Products</Heading>
            </Flex>
            <Flex flexDirection="row" width="100vw">
                <Box flexDirection="column" backgroundColor="black" height="300px" width="100%" backgroundImage={card_1}>
                    <Flex flexDirection="column" color='white' p={8} gap={4}>
                        <Badge maxW="33.33%" borderRadius={0}>Upcoming</Badge>
                        <Heading fontSize="lg">Intelligence in VR Com.</Heading>
                        <BsArrowRight size="30px"/>
                    </Flex>
                </Box>
                <Box flexDirection="column" backgroundColor="black" height="auto" width="100%" backgroundImage={card_2}>
                    <Flex flexDirection="column" color='white' p={8} gap={4}>
                        <Badge maxW="33.33%" colorScheme='green' borderRadius={0}>White Paper</Badge>
                        <Heading fontSize="lg">Media Advertisement AdOns.</Heading>
                        <BsArrowRight size="30px"/>
                    </Flex>
                </Box>
                <Box flexDirection="column" backgroundColor="black" height="auto" width="100%" backgroundImage={card_3}>
                    <Flex flexDirection="column" color='white' p={8} gap={4}>
                        <Badge maxW="33.33%" borderRadius={0}>POC</Badge>
                        <Heading fontSize="lg">Covid 19 Applications Design.</Heading>
                        <BsArrowRight size="30px"/>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Banner
