import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';

const Menu = () => {
    //material UI Hook
    const theme = useTheme();

    //to see if the screen size matches the current screen size
    const matches = useMediaQuery(theme.breakpoints.down('md')); //if true(mobile) if false(desktop)
  return (
    <>
      {matches ? <MenuMobile matches={matches} /> : <MenuDesktop matches={matches} />}
    </>
  )
}

export default Menu