# Businesstools

[![Build Status](https://travis-ci.org/syron/businesstools.svg?branch=master)](https://travis-ci.org/syron/businesstools)

## Description

The purpose of this project is to create a service that can be used both internally and externally for any kind of customers that need an interactive Business Model Canvas (BMC) or Value Proposition Canvas (VPC).

This project requires this api mock to run: https://github.com/syron/businesstools-api

## Get Started

### 1. Create environment file

Create an environments file 'environment.ts' in /src/environments/ in order to run the app on your local machine and paste in the following. Replace all the empty values. 

```json
export const environment = {
  production: false,
  apiEndpoint: '',
  auth0: {
    clientID: '',
    domain: '',
    audience: '',
    redirectUri: ''
  }
};
```

### 2. Run angular app

Execute the following command `ng serve` and redirect your browser to the displayed url in your command line tool, e.g. `http://localhost:4200/`.

### 3. Enjoy

Enjoy creating your Business Model Canvas tool.