import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardHeader,
  Typography,
  CardContent,
} from "@material-ui/core";

const NotSupportedCard = ({ notSupportedInsurers }) => {
  return (
    <Grid item xs={12} md={10}>
      <Card
        variant="outlined"
        raised
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        <CardHeader
          title={
            <Typography variant="body1">
              The following insurers are not currently supported in this tool.
              Feel free to use the links below to visit their formularies
              directly.
            </Typography>
          }
        />
        <CardContent>
          <Grid container spacing={1}>
            {notSupportedInsurers.map((insurer) => {
              return (
                <Grid item xs={2} md={3}>
                  <a
                    href={insurer.formulary_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`/images/${insurer.key}.png`}
                      alt=""
                      style={{ maxWidth: "160px", maxHeight: "70px" }}
                    />
                  </a>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

NotSupportedCard.propTypes = {
  notSupportedInsurers: PropTypes.array.isRequired,
};

export default NotSupportedCard;
