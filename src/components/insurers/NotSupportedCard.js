import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardHeader,
  Typography,
  CardContent,
} from "@material-ui/core";

/**
 *
 * Component that renders card with non-supported insurers.  Their logo with a link to their formulary is the only thing that is rendered
 */

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
          <Grid container spacing={1} justify="space-around">
            {notSupportedInsurers.map((insurer) => {
              return (
                <Grid item xs={5} md={4}>
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
  /**
   * Array of non-supported Insurer objects
   */
  notSupportedInsurers: PropTypes.array.isRequired,
};

export default NotSupportedCard;
