import { Box, Button, IconButton, styled } from "@mui/material";
import { Colors } from "../theme";
import { slideInBottom, slideInRight } from "../../animation";


//Inherits from Box
export const Design = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      position: "relative",
    },
    
}));

//Inherits from img
export const DesignImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
    background: Colors.plum,
    padding: '10px',
    [theme.breakpoints.down("md")]: {
      width: "80%", 
      padding: '24px',
    },
  
}));

export const DesignActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4,
  }));
  
//Inherits from DesignActionButton
export const DesignFavButton = styled(DesignActionButton)(({ isfav, theme }) => ({
    color: isfav ? Colors.primary : Colors.light,  
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      right: 0,
      top: 0,
    },
}));
  
export const DesignAddToCart = styled(Button, {
    shouldForwardProp: (prop) => prop !== "show",
  })(({ show, theme }) => ({
    width: "120px",
    fontSize: "12px",
    [theme.breakpoints.up("md")]: {
      position: "absolute",    
      bottom: "2%",
      width: "300px",
      padding: "10px 5px",
      animation:
        show &&
        `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
    background: Colors.secondary,
    opacity: 0.9,
  }));

  export const DesignMetaWrapper = styled(Box)(({theme}) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));
  
  export const DesignActionsWrapper = styled(Box)(({ show, theme }) => ({ 
    [theme.breakpoints.up("md")]: {
      display: show ? 'visible' : 'none',
      position: "absolute",
      right: 0,
      top: '20%',
      animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    }
  }));