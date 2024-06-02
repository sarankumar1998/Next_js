'use client'
import { AppBar, Stack, styled, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const StyledToolBar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between',
  background:'black'
}) 

const NavBar = () => {
  return (
    <AppBar position='static'>
      <StyledToolBar>
        <Typography variant='h5'>Next</Typography>
        <Stack direction='row' justifyContent='space-between' width='20%'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/contact'>Contact</Link>
        </Stack>
      </StyledToolBar>
    </AppBar>
  )
}

export default NavBar