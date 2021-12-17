import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Card_1 from './Card_1'

function MainSection() {
    return (
        <Flex flexDirection="column" gap={8} backgroundColor="white" color="black" pl={32} pr={32} pt={16} pb={16}>
            <Heading>We Are Here To Make Your Website Look More Elegant And Stylish</Heading>
            <Flex flexDirection="row" gap={32}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Flex>

            <Flex flexDirection="row" gap={4}>
                <Card_1 
                    title="We Develop Zero to Launch" 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    descColour="grey"
                    colour="black"
                    textColour="white"
                />
                <Card_1 
                    title="We give wings to your Business" 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    descColour="grey"
                    colour="#68ffbf"
                    textColour="black"
                />
            </Flex>

            <Heading>Lower your costs, save time, and elevate the customer experience</Heading>
            <Divider backgroundColor="black" mt={8}/>
            <Flex flexDirection="row" gap={12} alignItems="center">
                <Heading fontSize="8xl">$36</Heading>
                <Text fontSize="xl" fontWeight="bold">Lower your costs, save time, and elevate the customer experience</Text>
            </Flex>
            <Divider backgroundColor="black"/>
            <Flex flexDirection="row" gap={12} alignItems="center">
                <Heading fontSize="8xl">80%</Heading>
                <Text fontSize="xl" fontWeight="bold">Direct Growth in business and bring most of the capital at a place</Text>
            </Flex>

        </Flex>
    )
}

export default MainSection
