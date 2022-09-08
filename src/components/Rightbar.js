import React from 'react';
import { Box, Typography, ImageList, ImageListItem  } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const Rightbar = () => {
  return (
    <Box 
    flex={2} 
    padding={2}
    sx={{display: {xs: "none", sm: "block" }}}
    >
     <Box position='fixed'width={300}>
          <Typography variant='h6'fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={7}>
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/4.jpg" />
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/5.jpg" />
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          </AvatarGroup>
          <Typography variant='h6'fontWeight={100} marginTop={2} marginBottom={2}>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
              <ImageListItem>
                  <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" alt="" />
              </ImageListItem>
              <ImageListItem>
                  <img src="https://material-ui.com/static/images/image-list/burgers.jpg" alt="" />
              </ImageListItem>
              <ImageListItem>
                  <img src='https://images.unsplash.com/photo-1522770179533-24471fcdba45' alt="" />
              </ImageListItem>
              
              
          </ImageList>
          <Typography variant='h6'fontWeight={100} marginTop={2} >
            Latest Conversations
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      
    </List>
     </Box>
    </Box>
  )
}

export default Rightbar
              
              
              
    