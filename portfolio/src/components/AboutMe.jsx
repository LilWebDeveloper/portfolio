import { Grid } from "@mui/material";
import classes from "../styles/about_me.module.css";


const AboutMe = () => {
  return (
    <Grid
      container
      textAlign={"center"}
      alignItems={"center"}
      mt={"10rem"}
      data-aos="fade-right"
      id='aboutme'
    >
      <Grid item xs={12}>
        <h1>About me</h1>
        <p className={classes.pclass}>
          Frontend Developer And Backend Developer And MongoDB
        </p>
      </Grid>

      <Grid item lg={6} xs={12} mt={"3rem"}>
        <p className={classes.aboutme}>
          A software engineer, the modern-day architect of digital realms,
          navigates the ethereal landscapes of code, sculpting intangible
          structures that shape our technological world. With fingers poised
          over keyboards like virtuoso pianists, they compose symphonies of
          logic, their minds a labyrinth of algorithms and solutions. Their
          canvas is a screen, a vast expanse where lines of code dance in
          intricate patterns, weaving the fabric of programs and applications.
          Each keystroke is a brushstroke, crafting intricate architectures and
          breathing life into innovative designs. In this digital atelier, they
          don the mantle of problem solvers, confronting bugs and glitches like
          valiant knights in an ever-evolving quest for perfection. Debugging
          becomes a noble pursuit, unraveling the mysteries hidden within the
          tangled webs of code.
        </p>
      </Grid>
      <Grid item lg={6} xs={12} mt={"3rem"}>
        <img src="/cv2.jpg" className={classes.imgclass} />
      </Grid>
    </Grid>
  );
};

export default AboutMe;
