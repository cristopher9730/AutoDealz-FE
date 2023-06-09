import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AppBar,createTheme,ThemeProvider, Typography, Box, Button} from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Dashboard } from "./Dashboard";
import { useState } from "react";

const icon = {
  margin: '15px',
  fontSize: '60px'
}
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#0F0D0B',
      contrastText:'#C9611B'
    },
    secondary:{
      main: '#C9611B',
      contrastText:'#0F0D0B'
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
        },
      },
    },
  },
});

const flex = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}

const flexAppBar = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const title = {
  fontSize: 25,
  fontFamily: 'Verdana'
}



const App = () => {
  const [open, setOpen] = useState(false);
  const handleInfo=(param)=>{setInfo(param)};
  const handleModal=(param)=>{setOpen(param)};
  const [info, setInfo] = useState(false);
  

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <AppBar color='primary' position='fixed' sx={flexAppBar}>
        <Box sx={flex}>
          <DirectionsCarIcon sx={icon}/>
          <Typography variant="h1" sx={title}>AutoDealz</Typography>
        </Box>
        <Box>
        <Button onClick = {()=>{
          handleModal(true);
          handleInfo(false);
        } } size='medium' variant='contained'
         color='secondary' sx={{m:'15px'}}>Add Car</Button>
        </Box>
      </AppBar>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Dashboard openModal={open} handleModal={handleModal} handleInfo={handleInfo} info={info}/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
