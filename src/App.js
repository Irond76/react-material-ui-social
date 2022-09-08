import Navbar from '../src/components/Navbar';
import { useState } from 'react';
import Add from '../src/components/Add';
import Sidebar from '../src/components/Sidebar';
import Feed from '../src/components/Feed';
import Rightbar from '../src/components/Rightbar';
import { Box, Stack,createTheme ,ThemeProvider } from '@mui/material';

function App() {
   const [mode, setMode] = useState("light")

   const DarkTheme = createTheme ({
    palette: {
      mode: mode
    }
   })
  return (
    <ThemeProvider theme={DarkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed />
      <Rightbar />
      </Stack>
      <Add />
    </Box>

    </ThemeProvider>
    );
  }

      
  export default App;


  
  
  
    
    
    
     
