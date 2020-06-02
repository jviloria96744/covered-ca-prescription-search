import React from "react";
import PropTypes from "prop-types";
import { TableCell, TableRow } from "@material-ui/core";

/**
 *
 * Component to render each prescription result for each insurer in card table
 */

const TableDataRow = ({ scrip }) => {
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
};

TableDataRow.propTypes = {
  /**
   * Row of data from search results
   */
  scrip: PropTypes.object.isRequired,
};

export default TableDataRow;
