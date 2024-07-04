import merge from "lodash.merge";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const stage = process.env.STAGE || "local";
let envConfig;

if (stage === "production") {
  envConfig = require("./prod").default;
} else {
  envConfig = require("./local").default;
}

const defaults = {
  stage,
  port: 3000,
  env: process.env.NODE_ENV,
  dburl: process.env.DATABASE_URL,
  jwtsecret: process.env.JWT_PK,
};

export default merge(defaults, envConfig);
