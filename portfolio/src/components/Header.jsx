import { Grid } from "@mui/material";
import classes from "../styles/header.module.css";
import { HeaderButton } from "../styles/NavLink";

const Header = () => {
  return (
    <Grid container className={classes.header}>
      <Grid item md={4} xs={12} className={classes.logo} textAlign={"center"}>
        <img src="/KF.png"></img>
      </Grid>
      <Grid item md={8} xs={12} className={classes.menu}>
        <HeaderButton
          onClick={() => {
            const element = document.getElementById("experience");
            element.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Experience
        </HeaderButton>
        <HeaderButton
          onClick={() => {
            const element = document.getElementById("aboutme");
            element.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          About Me
        </HeaderButton>
        <HeaderButton
          onClick={() => {
            const element = document.getElementById("skills");
            element.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Skills
        </HeaderButton>
        <HeaderButton
          onClick={() => {
            const element = document.getElementById("projects");
            element.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Projects
        </HeaderButton>
      </Grid>
    </Grid>
  );
};

export default Header;
