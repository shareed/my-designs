import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner';

const Banner = () => {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md')); 
 return (
   <BannerContainer>
     
      </BannerContainer>
 )
}

export default Banner