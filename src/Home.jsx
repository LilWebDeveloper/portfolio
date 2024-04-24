import { Grid } from "@mui/material";
import Header from "./components/Header";
import FirstAboutMe from "./components/FirstAboutMe";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";


const Home = () => {
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
