import {Grid, Stack, Typography } from "@mui/material";

import classes from "../styles/footer.module.css";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Copyright } from "./Copywrite";

const Footer = () => {
  return (
    <Grid
      container
      textAlign={"center"}
      alignItems={"center"}
      className={classes.footer}
    >
      <Grid item xs={12} sx={{ marginBottom: "15px", marginTop: "15px" }}>
        <IconButton
          size="large"
          color="primary"
          sx={{ marginRight: "30px", border: "solid 1px grey" }}
          aria-label="Linkedin.com"
          onClick={() =>
            window.open("https://www.linkedin.com/in/kacperfal%C4%99cki/")
          }
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          size="large"
          color="primary"
          sx={{ border: "solid 1px grey" }}
          aria-label="GitHub.com"
          onClick={() => window.open("https://github.com/LilWebDeveloper")}
        >
          <GitHubIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: "15px" }}>
        <Stack direction="row" gap={1} justifyContent={"center"}>
          <EmailIcon sx={{ color: "#ff9a00" }} />
          <Typography>KFALECKI17@GMAIL.COM</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} mb={"15px"}>
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default Footer;
