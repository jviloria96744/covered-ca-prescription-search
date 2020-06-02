import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

/**
 * Basic Navbar component for the application
 */
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
