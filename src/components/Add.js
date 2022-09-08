import React from 'react'
import {Box, styled, Typography, Avatar, Stack, ButtonGroup, Button} from '@mui/material'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyleModal = styled(Modal) ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});
const UserBox = styled(Box) ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})



const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip title="Delete" sx={{position: "fixed", bottom: 20, left:{xs: "calc(50% - 25px)", md: 30}}} onClick={e => setOpen(true)}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    </Tooltip>
    <StyleModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} padding={3} borderRadius={5} color={"text.primary"}>
            <Typography variant='h6'color={"gray"} textAlign="center">
                Create Post
            </Typography>
            <UserBox>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/6.jpg"
            sx={{width: 30, height: 30}} />
            <Typography fontWeight={500}variant="span">John Doe</Typography>
            </UserBox>
            <TextField
                sx={{width: "100%"}}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
            />
            <Stack direction="row" gap={1} marginTop={2} marginBottom={3}>
                <EmojiEmotionsIcon color='primary'/>
                <ImageIcon  color='secondary'/>
                <VideoCameraBackIcon color='success'/>
                <PersonAddIcon color='error'/>
            </Stack> 
            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                <Button>Post</Button>
                <Button sx={{width:"100px" }}><DateRangeIcon /></Button>
                
            </ButtonGroup> 
        </Box>
      </StyleModal>
    </>
  )
}

export default Add