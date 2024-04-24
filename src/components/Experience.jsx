import { Grid } from "@mui/material";
import { PaperStyled } from "../styles/PaperStyled";
import classes from "../styles/experience.module.css";


const Experience = () => {
  return (
    <Grid
      container
      className={classes.experience}
      direction={{ xs: "column-reverse", lg: "row" }}
      mt={"10rem"}
      data-aos='fade-left'
      id='experience'
    >
      <Grid item lg={6} xs={12}>
        <PaperStyled>
          <img
            src="/neoteric.svg"
            style={{ width: "150px", marginRight: "8rem", marginTop: "0.5rem" }}
          />
          <h2>Trainee</h2>
          <h5 style={{ marginTop: "-1.5rem" }}>8 months</h5>
          <p>
            Learn JavaScript, TypeScript and React framework. Create management
            app with NodeJs/MongoDB Backend and React frontend.
          </p>
        </PaperStyled>
      </Grid>
      <Grid item lg={6} xs={12}>
        <h1>Commercial Experience</h1>
        <p className={classes.pclass}>
          Here I present all my commercial experiences that I have gained in the
          IT industry, which are constantly expanding with new experiences.
        </p>
      </Grid>
    </Grid>
  );
};

export default Experience;
