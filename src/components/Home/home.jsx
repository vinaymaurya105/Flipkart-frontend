import React from "react";

import { Box, makeStyles } from "@material-ui/core";
import Baner from "./baner";
import Navbar from "./navBar";
import MidSection from "./midSection";

//Styling in component using class

const useStyle = makeStyles({
  container: {
    padding: 10,
    background: "#f2f2f2",
  },
  wraper: {
    marginTop: 55,
  },
});

function Home() {
  const classes = useStyle();

  return (
    <Box className={classes.wraper}>
      <Navbar />
      <Box className={classes.container}>
        <Baner />
      </Box>
      <MidSection />
      <MidSection />
      <MidSection />
      <MidSection />
      <MidSection />
      <MidSection />
    </Box>
  );
}

export default Home;
