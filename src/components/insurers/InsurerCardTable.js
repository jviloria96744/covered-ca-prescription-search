import React, { useState } from "react";
import PropTypes from "prop-types";
import { CardContent, Table, TableBody, Typography } from "@material-ui/core";
import TableHeaderRow from "./TableHeaderRow";
import TableDataRow from "./TableDataRow";
import InsurerDrawer from "./InsurerDrawer";

/**
 *
 * Component to render table in Insurer cards using results of the user prescription search
 */

const InsurerCardTable = ({ prescriptionData, dataKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("Tier");

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
      <Table size="small">
        <TableHeaderRow toggleDrawer={toggleDrawer} />
        <TableBody>
          {prescriptionData.map((scrip) => {
            return (
              <TableDataRow
                key={scrip["Prescription Drug Name"]}
                scrip={scrip}
              />
            );
          })}
        </TableBody>
      </Table>
      <InsurerDrawer
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        dataKey={dataKey}
        drawerType={drawerType}
      />
    </CardContent>
  );
};

InsurerCardTable.propTypes = {
  /**
   * Results of search for specific insurer
   */
  prescriptionData: PropTypes.array.isRequired,
  /**
   * Insurer name key used to access results of API search
   */
  dataKey: PropTypes.string.isRequired,
};

export default InsurerCardTable;
