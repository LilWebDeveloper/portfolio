import { Grid } from "@mui/material";
import { SkillPaper } from "../styles/SkillPaper";
import classes from "../styles/myskills.module.css"


const MySkills = () => {

  return (
    <Grid container mt={"10rem"} data-aos='fade-left' id='skills'>
      <Grid item xs={12} textAlign={"center"}>
        <h1>My Technologies</h1>
        <p className={classes.pclass}>Technologies used in work and creating projects</p>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={4}>
          <SkillPaper>
            <img src="/TS.png" style={{ paddingTop: "2.5rem", width:"150px" }} />
          </SkillPaper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SkillPaper>
            <img
              src="/React.png"
              width="180px"
              style={{ paddingTop: "2rem" }}
            />
          </SkillPaper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SkillPaper>
            <img
              src="/Redux.png"
              width="220px"
              style={{ paddingTop: "2rem" }}
            />
          </SkillPaper >
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SkillPaper>
            <img
              src="/MaterialUI.png"
              width="260px"
              style={{ paddingTop: "3rem" }}
            />
          </SkillPaper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SkillPaper>
            <img
              src="/NodeJS.png"
              width="200px"
              style={{ paddingTop: "3.5rem" }}
            />
          </SkillPaper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SkillPaper>
            <img
              src="/Express.png"
              width="230px"
              style={{ paddingTop: "4rem" }}
            />
          </SkillPaper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SkillPaper>
            <img
              src="/MongoDB.png"
              width="260px"
              style={{ paddingTop: "4rem" }}
            />
          </SkillPaper >
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SkillPaper>
            <img
              src="/Git.png"
              width="260px"
              style={{ paddingTop: "2.5rem" }}
            />
          </SkillPaper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <SkillPaper>
            <img
              src="/VSC.png"
              width="260px"
              style={{ paddingTop: "2.5rem" }}
            />
          </SkillPaper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MySkills;
