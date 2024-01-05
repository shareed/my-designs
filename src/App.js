import { useEffect } from 'react';
import {Container, Button} from '@mui/material'
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';
import Menu from './components/menu/Menu';
import Banner from './components/banner/Banner';

function App() {
  useEffect(() => {
    document.title = "My Designs"
  })
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{
        background: '#fff'
      }}>
        <Menu />
        <Banner />
        {
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
