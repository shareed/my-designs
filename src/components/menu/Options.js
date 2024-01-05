import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { OptionIconsContainerDesktop, OptionIconsContainerMobile, MyList } from "../../styles/menu";
import { Colors } from "../../styles/theme";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PersonIcon from "@mui/icons-material/Person"
import FavoriteIcon from "@mui/icons-material/Favorite"

const Options = ({matches}) => {
    const Component = matches ? OptionIconsContainerMobile : OptionIconsContainerDesktop
    
    return (
        <Component>
        <MyList type="row">
            <ListItemButton sx={{justifyContent: "center"}}>
                <ListItemIcon sx={{display: "flex", justifyContent: "center", color: matches && Colors.secondary}}>
                    <ShoppingCartIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
            <ListItemButton sx={{justifyContent: "center"}}>
                <ListItemIcon sx={{display: "flex", justifyContent: "center", color: matches && Colors.secondary}}>
                    <FavoriteIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
            <ListItemButton sx={{justifyContent: "center"}}>
                <ListItemIcon sx={{display: "flex", justifyContent: "center", color: matches && Colors.secondary}}>
                    <PersonIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
            </MyList>
            </Component>
    )
}

export default Options