import { Avatar } from '@mui/material'
import React from 'react'
import {blue } from '@mui/material/colors';

function AvatarComp({name}:any) {
    return (
        
        <Avatar sx={{ bgcolor: blue[500] }} data-testid="avatar" >{name}</Avatar>
        
    )
}

export default AvatarComp
