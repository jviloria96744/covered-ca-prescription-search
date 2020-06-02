import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, SwipeableDrawer, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { COVERAGE_OBJECT } from "./constants";

/**
 *
 * Drawer Component to display Prescription Tier and Coverage Requirement Definitions
 */

const useStyles = makeStyles(() => ({
  paper: {
    maxWidth: "75%",
  },
}));

const InsurerDrawer = ({ isOpen, drawerType, toggleDrawer, dataKey }) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={() => toggleDrawer(drawerType, false)}
      onOpen={() => toggleDrawer(drawerType, true)}
      classes={{
        paper: classes.paper,
      }}
    >
      <Fragment>
        <Typography variant="h3" style={{ marginBottom: "3vh" }}>
          {COVERAGE_OBJECT[dataKey][drawerType].label}
        </Typography>
        <Divider />
        {COVERAGE_OBJECT[dataKey][drawerType].items.map((item) => {
          return (
            <Fragment key={item.label}>
              <Typography
                variant="body1"
                component="p"
                //key={item.label}
                style={{ marginTop: "3vh" }}
              >
                <strong>{item.label}</strong>
                <br />
                {item.content}
              </Typography>
              <Divider variant="middle" />
            </Fragment>
          );
        })}
      </Fragment>
    </SwipeableDrawer>
  );
};

InsurerDrawer.propTypes = {
  /**
   * Open flag of drawer
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * Flag that determines whether Tier or Coverage definitions should be displayed
   */
  drawerType: PropTypes.string.isRequired,
  /**
   * Insurer name key used to access results of API search
   */
  dataKey: PropTypes.string.isRequired,
  /**
   * Click handler to toggle drawer with Tier/Coverage definitions
   */
  toggleDrawer: PropTypes.func.isRequired,
};

export default InsurerDrawer;
