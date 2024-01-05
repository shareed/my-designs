import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { MenuContainer, MenuHeader, MyList } from "../../styles/menu"
import SearchIcon from "@mui/icons-material/Search"
import Options from "./Options"

const MenuDesktop = ({matches}) => {
  return (
     /*Container--------------------------------------------------------*/
     <MenuContainer>
     {/* Header--------------------------------------------------- */}
     <MenuHeader>
         My Designs
     </MenuHeader>
     {/* List -----------------------------------------------------*/}
     <MyList type="row">
         <ListItemText primary="Home" />
         <ListItemText primary="Categories" />
         <ListItemText primary="Products" />
         <ListItemText primary="Contact Us" />
         <ListItemButton>
             <ListItemIcon>
                 <SearchIcon />
             </ListItemIcon>
         </ListItemButton>
     </MyList>
     <Options matches={matches} />
 </MenuContainer>
  )
}

export default MenuDesktop