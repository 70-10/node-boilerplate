module.exports = x => hello(x);

function hello(x) {
  if (x) {
    return x;
  }
  return "default string";
}
