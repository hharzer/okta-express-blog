const okta = require("@okta/okta-sdk-nodejs");


const client = new okta.Client({
  orgUrl: process.env.OKTA_ORG_URL,
  token: process.env.OKTA_TOKEN
});


module.exports = { client };
