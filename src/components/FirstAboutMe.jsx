import { Grid, Button } from "@mui/material";
import classes from "../styles/first_about_me.module.css";


const FirstAboutMe = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = "CV Kacper Falęcki.pdf";
    link.href = "/CV Kacper Falęcki.pdf";
    link.click();
  };
  return (
    <Grid container className={classes.firstaboutme} data-aos="fade-right">
      <Grid item lg={6} xs={12}>
        <p style={{ fontSize: "3.5rem", fontWeight: "bold", margin: 4 }}>
          I&apos;m Kacper F<a className={classes.dot}>.</a>{" "}
        </p>
        <p className={classes.h4class}>
          Frontend Developer / Fullstack Developer
        </p>
        <p className={classes.pclass}>
          I am Frontend / Fullstack Developer based in Poland and very intrested
          in web developer.Constantly developing my skills and learning new
          technologies related to the industry.
        </p>
        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "#FF9A00",
            "&:hover": {
              backgroundColor: "#AB6700",
            },
          }}
          onClick={onDownload}
        >
          Download My CV
        </Button>
      </Grid>
      <Grid item lg={6} xs={12}>
        <img src="/cv2.jpg" className={classes.imgclass} />
      </Grid>
    </Grid>
  );
};

export default FirstAboutMe;
