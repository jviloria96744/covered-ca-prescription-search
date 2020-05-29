import React from "react";
import propTypes from "prop-types";
import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

const InsurerCardTable = ({ prescriptionData }) => {
  if (!prescriptionData) {
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
            <TableCell>Prescription Drug Name</TableCell>
            <TableCell>Drug Tier</TableCell>
            <TableCell>Coverage Requirements and Limits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prescriptionData.map((scrip) => {
            return (
              <TableRow key={scrip["Prescription Drug Name"]}>
                <TableCell component="th" scope="row">
                  {scrip["Prescription Drug Name"]}
                </TableCell>
                <TableCell>{scrip["Drug Tier"]}</TableCell>
                <TableCell>
                  {scrip["Coverage Requirements and Limits"]}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </CardContent>
  );
};

InsurerCardTable.propTypes = {
  prescriptionData: propTypes.array.isRequired,
};

export default InsurerCardTable;
