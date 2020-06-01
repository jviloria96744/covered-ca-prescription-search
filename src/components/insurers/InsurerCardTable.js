import React, { useState, Fragment } from "react";
import propTypes from "prop-types";
import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  SwipeableDrawer,
  Button,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { COVERAGE_OBJECT } from "./constants";

const useStyles = makeStyles(() => ({
  paper: {
    maxWidth: "75%",
  },
}));

const InsurerCardTable = ({ prescriptionData, dataKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("Tier");
  const classes = useStyles();

  const toggleDrawer = (type, state) => {
    setIsOpen(state);
    setDrawerType(type);
  };

  if (prescriptionData.length === 0) {
    return (
      <CardContent>
        <Typography variant="body1" component="p">
          No Results Found
        </Typography>
      </CardContent>
    );
  }
  return (
    <CardContent>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "40%" }}>
              <Typography variant="button">Prescription Drug Name</Typography>
            </TableCell>
            <TableCell style={{ width: "20%" }} align="center">
              <Button
                color="primary"
                onClick={() => toggleDrawer("Tier", true)}
              >
                Drug Tier
              </Button>
            </TableCell>
            <TableCell style={{ width: "40%" }} align="center">
              <Button
                color="primary"
                onClick={() => toggleDrawer("coverageRequirements", true)}
              >
                Coverage Requirements and Limits
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prescriptionData.map((scrip) => {
            return (
              <TableRow key={scrip["Prescription Drug Name"]}>
                <TableCell component="th" scope="row">
                  {scrip["Prescription Drug Name"]}
                </TableCell>
                <TableCell align="center">{scrip["Drug Tier"]}</TableCell>
                <TableCell align="center">
                  {scrip["Coverage Requirements and Limits"]}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
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
    </CardContent>
  );
};

InsurerCardTable.propTypes = {
  prescriptionData: propTypes.array.isRequired,
  dataKey: propTypes.string.isRequired,
};

export default InsurerCardTable;
