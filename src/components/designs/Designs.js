import { Container, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import { designs } from "../../data";
import SingleDesign from "./SingleDesignMobile";
import SingleDesignDesktop from "./SingleDesignDesktop";

const Designs = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    const renderDesigns = designs.map(design => (
        <Grid
            item key={design.id}
            xs={2}
            sm={4}
            md={4}
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}>
            
            {matches ? <SingleDesign design={design} matches={matches}/>: <SingleDesignDesktop design={design} matches={matches}/>}
            
        </Grid>
    ))
  return (
      <Container>
          <Grid container
              justifyContent={"center"}
              spacing={{xs: 2, md: 3}}
              sx={{ margin: "20px 4px 10px 4px" }}
              columns={{xs: 4, sm: 8, md: 12}}
          >
              {renderDesigns}
          </Grid>
    </Container>
  )
}

export default Designs