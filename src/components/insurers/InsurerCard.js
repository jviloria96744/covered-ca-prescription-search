import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

const InsurerCard = ({ insurerName, formularyUrl, prescriptions }) => {
  console.log(prescriptions);
  return (
    <Grid item xs={5}>
      <Card variant="outlined" raised style={{ marginTop: "10px" }}>
        <CardHeader title={insurerName} />
        <CardContent>
          {prescriptions.map((scrip) => {
            return (
              <Typography variant="body2" component="p" key={scrip.Value}>
                {scrip.Label}
              </Typography>
            );
          })}
        </CardContent>
        <CardActions>
          <a href={formularyUrl} target="_blank" rel="noopener noreferrer">
            View {insurerName} Formulary
          </a>
        </CardActions>
      </Card>
    </Grid>
  );
};

InsurerCard.propTypes = {
  insurerName: PropTypes.string.isRequired,
  formularyUrl: PropTypes.string.isRequired,
  prescriptions: PropTypes.array.isRequired,
};

export default InsurerCard;
