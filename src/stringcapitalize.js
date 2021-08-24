module.exports = stringcapitalize;

function stringcapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
