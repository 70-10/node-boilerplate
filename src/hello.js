const config = require("config");

module.exports = () => hello(config.hello);

function hello(x) {
  if (x) {
    return x;
  }
  return "default string";
}
