const joinNames = (namesObj) => {
  let resultString = "";
  for (let i = 0; i < namesObj.length; i++) {
    if (i === namesObj.length - 1) {
      resultString += `${namesObj[i].name}`;
    } else if (i === namesObj.length - 2) {
      resultString += `${namesObj[i].name} & `;
    } else {
      resultString += `${namesObj[i].name}, `;
    }
  }
  return resultString;
};

module.exports = joinNames;