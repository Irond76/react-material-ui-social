import React from 'react';
import { useState } from 'react';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';

const StyledToolBar = styled(Toolbar) ({
  display:"flex",
  justifyContent: "space-between"
});

const Search = styled("div") (({theme}) => ({
    backgroundColor: 'white',
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));
const Icons = styled("Box") (({theme}) => ({
    display: 'none',
    gap: '20px',
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
}));

const UserBox = styled("Box") (({theme}) => ({
    display: 'flex',
    gap: '10px',
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
}));



const Navbar = () => {
  const [open, setOpen ] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={{display: {xs: 'none', sm:'block' }}}>
          React Development
        </Typography>
          <DeveloperModeIcon fontSize='large' sx={{color: 'white', boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.1)',display: {xs: 'block', sm:'none' } }} />
          <Search><InputBase placeholder='Search...' /></Search>
          <Icons>
          <Badge badgeContent={4} color="error">
              <Mail  />
          </Badge>
          <Badge badgeContent={2} color="error">
              <Notifications />
          </Badge>
          <Avatar 
          sx={{
            width: 30,
             height: 30, 
             backgroundColor: 'skyblue',
             boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.3)'
             }} onClick={e => setOpen(true)}>
            DB
          </Avatar>
          </Icons>
          <UserBox onClick={e => setOpen(true)}>
              <Avatar 
              sx={{
                width: 30,
                height: 30, 
                backgroundColor: 'skyblue',
                boxShadow: '1px 1px 1px 1px  rgba(0,0,0,0.3)'
                }}>
                DB
              </Avatar>
              <Typography variant='span' >Dale Bendixen</Typography>
          </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false) }
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
        
        

export default Navbar
