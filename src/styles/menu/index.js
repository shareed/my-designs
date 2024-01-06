import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors} from '../theme/index'
import '@fontsource-variable/raleway/wght-italic.css';

//Container
export const MenuContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'
}));

//Header
//Inherits from Typography
export const MenuHeader = styled(Typography)(() => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "2em",
    fontFamily: '"Raleway Variable", "sans-serif"',
    // fontWeight: 900,
    color: Colors.plum,
    // "&:hover": {
    //   animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
    // },
}));



export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
}));

export const OptionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,  
    borderTop: `1px solid ${Colors.border}`
  }));
  
  export const OptionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
  }));