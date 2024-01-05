import { IconButton } from "@mui/material"
import { MenuContainer, MenuHeader } from "../../styles/menu"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import Options from "./Options"

const MenuMobile = ({matches}) => {
  return (
    <MenuContainer>
    <IconButton>
      <MenuIcon />
    </IconButton>

    <MenuHeader textAlign={"center"} variant="h4">
      My Designs
    </MenuHeader>

    <IconButton>
      <SearchIcon />
    </IconButton>
    <Options matches={matches} />
    </MenuContainer>
  )
}

export default MenuMobile