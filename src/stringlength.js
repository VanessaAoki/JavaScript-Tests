module.exports = stringLength;

function stringLength(string) {
  if (string.length > 1 && string.length < 10) {
    return string.length
  } else {
    return "Error";
  }
};
