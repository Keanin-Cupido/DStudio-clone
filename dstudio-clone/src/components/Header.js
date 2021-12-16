import React from 'react'
import { Stack } from '@mui/material';
import Image from 'material-ui-image'

function Header() {
    return (
        <Stack direction="row">
        <Image src="http://loremflickr.com/300/200"/>
        </Stack>
    )
}

export default Header
