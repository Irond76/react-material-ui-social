import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import Groups2Icon from '@mui/icons-material/Groups2';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
const Sidebar = ({mode, setMode}) => {
  return (
    <Box 
    
    flex={1} padding={2} 
    sx={{display: { xs: "none", sm: "block"} }} >
      <Box position='fixed'>
          <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href='#home' >
                  <ListItemIcon>
                      <HomeIcon  sx={{color: 'skyblue'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Homepage" sx={{color: 'lightskyblue'}} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href='#home'sx={{color: 'lightskyblue'}} >
                  <ListItemIcon>
                      <ArticleIcon sx={{color: 'skyblue'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Pages" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href='#home' sx={{color: 'lightskyblue'}}>
                  <ListItemIcon>
                      <Groups2Icon sx={{color: 'skyblue'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Groups" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href='#home' sx={{color: 'lightskyblue'}} >
                  <ListItemIcon>
                      <StorefrontIcon sx={{color: 'skyblue'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Marketplace" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href='#home'sx={{color: 'lightskyblue'}} >
                  <ListItemIcon>
                      <PersonIcon sx={{color: 'skyblue'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Friends" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href='#home' sx={{color: 'lightskyblue'}} >
                  <ListItemIcon>
                      <SettingsIcon sx={{color: 'skyblue'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href='#home'sx={{color: 'lightskyblue'}} >
                  <ListItemIcon>
                      <AccountBoxIcon sx={{color: 'skyblue'}} />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href='#home' >
                  <ListItemIcon>
                      <ModeNightIcon sx={{color: 'skyblue'}} />
                  </ListItemIcon>
                  <Switch onChange={e => setMode(mode === 'light'? "dark" : "light")} />
                  </ListItemButton>
              </ListItem>
          </List>

      </Box>
    </Box>
              
  )
}

export default Sidebar
                