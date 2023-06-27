const numberToReversedDigits = (number) =>
  String(number)
    .split("")
    .reverse()
    .map((e) => Number(e));

module.exports = numberToReversedDigits;
