import { Container, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import { designs } from "../../data";

const Designs = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    const renderDesigns = designs.map(design => {
        <Grid item key={design.id} display="flex" flexDirection={"column"} alignItems={"center"}>

        </Grid>
    })
  return (
      <Container>
          <Grid container justifyContent={"center"} sx={{ margin: "20px 4px 10px 4px" }}>
              {renderDesigns}
          </Grid>
    </Container>
  )
}

export default Designs