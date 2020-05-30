import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import InsurerCardTable from "./InsurerCardTable";
import PrescriptionContext from "../../context/prescription/prescriptionContext";

const InsurerCard = ({
  insurerName,
  formularyUrl,
  dataKey,
  supported,
  websiteUrl,
}) => {
  const prescriptionContext = useContext(PrescriptionContext);
  const { prescriptionSearchResults } = prescriptionContext;

  const notSupportedBlock = () => {
    return (
      <CardContent>
        <Typography variant="body1" component="p">
          Sorry, this insurer is not supported in this tool. Feel free to use
          the link below to visit their formulary directly.
        </Typography>
      </CardContent>
    );
  };

  return (
    <Grid item xs={12} md={8}>
      <Card
        variant="outlined"
        raised
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        <CardHeader
          title={
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={`/images/${dataKey}.png`}
                alt=""
                style={{ maxWidth: "160px", maxHeight: "70px" }}
              />
            </a>
          }
        />
        {supported ? (
          <InsurerCardTable
            prescriptionData={prescriptionSearchResults[dataKey]}
          />
        ) : (
          notSupportedBlock()
        )}
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
  websiteUrl: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  supported: PropTypes.bool.isRequired,
};

export default InsurerCard;
