// @flow

const config = require("config");

module.exports = () => hello(config.hello);

function hello(x: ?string): string {
  if (x) {
    return x;
  }
  return "default string";
}
