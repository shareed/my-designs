import { Stack } from "@mui/material";
import { Design, DesignAddToCart, DesignFavButton, DesignImage, DesignOptionButton, DesignOptionsWrapper } from "../../styles/designs"
import DesignMeta from "./DesignMeta"
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";

const SingleDesignDesktop = ({ design, matches }) => {
  return (
    <>
    {/* product container */}
    <Design>
      {/* Image */}
      <DesignImage src={design.image} />
      {/* Meta */}
      <DesignMeta design={design} matches={matches} />
      {/* Options */}
      <DesignOptionsWrapper>
        <Stack direction="column">
          <DesignFavButton isFav={0}>
          <FavoriteIcon />
          </DesignFavButton>
          <DesignOptionButton>
            <ShareIcon color={'primary'}/>
          </DesignOptionButton>
          <DesignOptionButton>
            <FitScreenIcon color={'primary'}/>
          </DesignOptionButton>
        </Stack>
      </DesignOptionsWrapper>
    </Design>
      <DesignAddToCart variant="container">
          Add To Cart
      </DesignAddToCart>
    {/* Footer */}
    </>
  )
}

export default SingleDesignDesktop;