import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'

// Icons
import { FaRegLightbulb } from 'react-icons/fa'
import { GrLinkNext } from 'react-icons/gr'

function Card_1(props) {
    return (
        <Flex flexDirection="column" maxW="50%" backgroundColor={props.colour} color={props.textColour} p={12} gap={8}>
            <Box backgroundColor={props.textColour} p={4} maxW="20%">
                <FaRegLightbulb color={props.colour}/>
            </Box>
            <Heading>{props.title}</Heading>
            <Text color={props.descColour}>{props.desc}</Text>
            <Button colorScheme='green' borderRadius={0} pr={8} pl={8} alignItems="center" gap={2}>
                Get Quote<GrLinkNext />
            </Button>
        </Flex>
    )
}

export default Card_1
