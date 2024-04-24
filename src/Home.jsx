import { Grid } from "@mui/material";
import Header from "./components/Header";
import FirstAboutMe from "./components/FirstAboutMe";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Grid
      sx={{
        backgroundColor: "#161614",
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      <Header />
      <FirstAboutMe />
      <Experience />
      <AboutMe/>
      <MySkills />
      <MyProjects />
      <Footer />
    </Grid>
  );
};

export default Home;
