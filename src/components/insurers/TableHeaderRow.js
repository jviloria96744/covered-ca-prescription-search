import React from "react";
import PropTypes from "prop-types";
import {
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@material-ui/core";

/**
 *
 * Component to render column header of prescription results table, includes drawer click handler
 */

const TableHeaderRow = ({ toggleDrawer }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell style={{ width: "30%" }}>
          <Typography variant="button">Prescription Drug Name</Typography>
        </TableCell>
        <TableCell style={{ width: "20%" }} align="center">
          <Button color="primary" onClick={() => toggleDrawer("Tier", true)}>
            Drug Tier
          </Button>
        </TableCell>
        <TableCell style={{ width: "50%" }} align="center">
          <Button
            color="primary"
            onClick={() => toggleDrawer("coverageRequirements", true)}
          >
            Coverage Requirements and Limits
          </Button>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

TableHeaderRow.propTypes = {
  /**
   * Click handler to toggle drawer with Tier/Coverage definitions
   */
  toggleDrawer: PropTypes.func.isRequired,
};

export default TableHeaderRow;
