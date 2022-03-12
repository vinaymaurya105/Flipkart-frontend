import { navData } from "../../Data/data";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",

    "&& > *": {
      marginLeft: 45,
    },
  },
  wraper: {
    textAlign: "center",
    padding: 12,
    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  },
  image: {
    width: 65,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
  },
}));

function Navbar() {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      {navData.map((data) => (
        <Box className={classes.wraper}>
          <img src={data.url} alt="img" className={classes.image} />
          <Typography className={classes.text}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Navbar;