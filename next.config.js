const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

withNextEnv = nextEnv();
module.exports = withNextEnv({});
