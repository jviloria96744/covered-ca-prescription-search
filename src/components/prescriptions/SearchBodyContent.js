import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

/**
 *
 * Component that stores static content in the Search card
 * This content includes a description of the tool, links to the CoveredCA website, as well as some disclaimers
 */

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
        <br />
        ***Use of company logos are for informational purposes only. This tool
        is not intended for commercial use
      </Typography>
    </Fragment>
  );
};

export default SearchBodyContent;
