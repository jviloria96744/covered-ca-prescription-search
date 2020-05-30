import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">
          Covered California Prescription Search
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
