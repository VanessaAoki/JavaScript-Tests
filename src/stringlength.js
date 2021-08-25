function stringLength(string) {
  if (string.length > 1 && string.length < 10) {
    return string.length;
  }
  throw new Error('This is not a valid number');
}

module.exports = stringLength;