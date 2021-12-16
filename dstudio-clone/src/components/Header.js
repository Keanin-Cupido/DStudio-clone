import React from 'react'
import { Image, Button, Link, Flex } from "@chakra-ui/react";
import { GrLinkNext } from 'react-icons/gr'

// Images
import logo from "./img/last_quarter.svg"
import menu from "./img/hamburger_menu.svg"

function Header() {
    return (
        <Flex justifyContent="space-between" alignItems="center" width="100%" pl={16} pr={16} pt={8} pb={8}>
            <Image src={logo} width="3em"/>

            <Flex gap="1.5em" color="black" fontWeight="medium">
                <Link href="#">About</Link>
                <Link href="#">Services</Link>
                <Link href="#">Retainership</Link>
            </Flex>

            <Flex gap="3em">
                <Button colorScheme='green' borderRadius={0} pr={8} pl={8}>Work <GrLinkNext /></Button>
                <Image src={menu} width="2em"/>
            </Flex>
        </Flex>
    )
}

export default Header
