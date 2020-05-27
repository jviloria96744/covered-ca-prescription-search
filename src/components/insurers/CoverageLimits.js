import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  AppBar,
  Typography,
} from "@material-ui/core";
import { COVERAGE_OBJECT } from "./constants";

const CoverageLimits = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={6}>
      <Card variant="outlined" raised style={{ marginTop: "10px" }}>
        <AppBar position="static" color="primary">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            variant="scrollable"
          >
            {COVERAGE_OBJECT.map((item) => (
              <Tab key={item.label} label={item.label} />
            ))}
          </Tabs>
        </AppBar>
        <CardContent>
          <Typography variant="body2" component="p">
            {COVERAGE_OBJECT[value].content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CoverageLimits;
