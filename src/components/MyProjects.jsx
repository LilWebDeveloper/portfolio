import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Grid, Stack } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const MyProjects = () => {
  return (
    <Grid
      container
      textAlign={"center"}
      mt={"10rem"}
      mb={"10rem"}
      spacing={2}
      data-aos="fade-right"
      id="projects"
    >
      <Grid item xs={12}>
        <h1>My Projects</h1>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: 345, margin: "auto" }}>
          <CardMedia
            sx={{ objectFit: "contain" }}
            component="img"
            alt="Takfornying"
            height="160"
            image="/logo2021takfornying.jpg"
          />
          <CardContent>
            <Typography
              color={"black"}
              gutterBottom
              variant="h5"
              component="div"
            >
              Takfornying Management App
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"justify"}
            >
              Management Web Application is a user-friendly app designed to
              simplify management tasks for bosses and managers. With this app,
              you can easily search and manage orders and employees. The
              application provides different levels of access, ensuring that
              employees can only view order information, while authorized users
              have full control.
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              target="_blank"
              sx={{ color: "#ff9a00", margin: "auto" }}
              href="https://github.com/LilWebDeveloper/TakfornyingApp"
            >
              Repository
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: 345, margin: "auto", paddingTop: "1rem" }}>
          <Stack direction="row" gap={1} justifyContent={"center"}>
            <AutoStoriesIcon sx={{ color: "lightblue", fontSize: "3.5rem" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "lightblue",
                textDecoration: "none",
              }}
            >
              BOOKSFINDER
            </Typography>
          </Stack>
          <CardContent>
            <Typography
              color={"black"}
              gutterBottom
              variant="h5"
              component="div"
            >
              Book Finder
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"justify"}
            >
              BookFinder is a user-friendly website that utilizes the Google
              Books API to help you search and discover books. With a vast
              database of titles, it allows you to explore a wide range of
              genres, authors, and subjects. BookFinder provides a simple and
              intuitive interface, enabling you to easily enter book titles to
              initiate your search. The website returns comprehensive results,
              displaying relevant book details such as the cover image,
              synopsis, publication information. Whether you are a bookworm or
              simply seeking a specific title, BookFinder serves as a valuable
              tool to explore and find the perfect book for your reading
              pleasure.
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              target="_blank"
              sx={{ color: "#ff9a00", margin: "auto" }}
              href="https://github.com/LilWebDeveloper/BookFinder"
            >
              Repository
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card
          sx={{
            maxWidth: 345,
            margin: "auto",
          }}
        >
          <CardMedia
            sx={{ objectFit: "contain" }}
            component="img"
            alt="bookingo"
            height="70"
            image="/bookingo.png"
          />
          <CardContent>
            <Typography
              color={"black"}
              gutterBottom
              variant="h5"
              component="div"
            >
              Bookingo
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"justify"}
            >
              Bookingo is a user-friendly website that uses a backend built with
              NodeJS, Express and MongoDB to help you book appointments at your
              favorite places such as hairdressers, beauticians, etc. Bookingo
              provides a simple and intuitive interface that allows you to
              easily manage your visits and making new appointments. The website
              displays comprehensive results, displaying important company
              details such as photo, vacancies and which employee is available
              on a given date. Bookingo is a valuable tool for discovering and
              finding the perfect service that will give you pleasure while
              escaping from everyday duties.
            </Typography>
          </CardContent>
          <CardActions>
            <Typography
              m={"auto"}
              color={"#ff9a00"}
              gutterBottom
              variant="h7"
              component="div"
            >
              In progress...
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MyProjects;
