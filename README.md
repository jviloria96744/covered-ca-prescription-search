# Covered California Prescription Search

This is the repo behind the [CoveredCA Prescription Search](http://coveredcaprescriptionsearch.com/) web application.

The purpose of this application is to assist someone when trying to compare different Covered California market plans, specifically from the perspective of prescription drug coverage/costs. Currently each provider makes their drug formulary available on their own website, typically by means of a PDF document with a list of prescriptions and what level of coverage is available as well as any requirements/restrictions that exist. This application will allow a user to search multiple prescription drug names/brand names and across the different provider's formularies, aggregating the results.

The back-end API calls are served by two AWS Lambda functions through Amazon API Gateway. The lambda functions are loosely based on the work in this back-end repo, [https://github.com/jviloria96744/covered-ca-prescription-backend](https://github.com/jviloria96744/covered-ca-prescription-backend).

As can be seen in that repo, the source of the data behind this application are the original PDFs of the provider formularies scraped using a collection of ad-hoc scripts. This is definitely not the ideal back-end data source. My goal was to (1) create a simple tool that might assist people going through the same process that I did when researching market plans, but perhaps more importantly, (2) serve as a POC for functionality that can be made available/enhanced on the CoveredCA website provided access to the underlying raw data is possible.

## Example Activity

![Gif-Goes-Here](https://s3-us-west-2.amazonaws.com/assets.jayviloria.com/coveredca-app-activity.gif)

## Get Started

To get started in using this application,

```
git clone https://github.com/jviloria96744/covered-ca-prescription-search.git
npm install
npm start
```

Run tests with, `npm test` and create a production ready build folder with `npm build`. Note: This application does rely heavily on the AWS API calls. Feel free to suggest an alternative data source.
