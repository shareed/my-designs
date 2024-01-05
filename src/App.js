import { useEffect } from 'react';
import {Container, Button} from '@mui/material'
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';
import Menu from './components/menu/Menu';

function App() {
  useEffect(() => {
    document.title = "React User Interfaces"
  })
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{
        background: '#fff'
      }}>

        {
          // Menu
          <Menu />
          //Banner
          //Promotions
          //Title
          //Products
          //footer
          //search box
          //App Drawer
        }
        </Container>
      </ThemeProvider>
      
  );
}

export default App;
