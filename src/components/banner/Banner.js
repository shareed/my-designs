import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner';

const Banner = () => {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md')); 
 return (
   <BannerContainer>
     <BannerImage src='/images/banner/womanOnComputer.png'/>
     <BannerContent>  
       <Typography variant='h6'>Huge Collection</Typography>
       <BannerTitle variant='h2'>New Designs</BannerTitle>
       <BannerDescription variant='subtitle'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua.
       </BannerDescription>
     </BannerContent>
   </BannerContainer>
 )
}

export default Banner