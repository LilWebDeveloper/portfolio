import Typography from "@mui/material/Typography";

export function Copyright() {
  return (
    <Typography variant="body2" color="grey" align="center" sx={{ mt: 1 }}>
      {"Copyright © "}
      Website by The KF Developer {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
