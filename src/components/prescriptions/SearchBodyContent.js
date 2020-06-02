import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

const SearchBodyContent = () => {
  return (
    <Fragment>
      <Typography variant="body1" component="p">
        This tool searches your prescriptions across various{" "}
        <a
          href="https://www.coveredca.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Covered CA*
        </a>{" "}
        Marketplace providers** to determine what cost tier they fall under as
        well as any coverage restrictions that may exist
        <br />
        <br />
      </Typography>
      <Typography variant="body2" element="p">
        *Disclaimer: This site is not affiliated with Covered California in any
        way
        <br />
        **Not all marketplace providers are supported in this tool. It is an{" "}
        <a
          href="https://github.com/jviloria96744/covered-ca-prescription-backend"
          target="_blank"
          rel="noopener noreferrer"
        >
          open project
        </a>{" "}
        to scrape each provider's formulary to get their list of covered
        prescriptions.
      </Typography>
    </Fragment>
  );
};

export default SearchBodyContent;
