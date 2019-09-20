module.exports = function check(str, bracketsConfig) {
  let brackets = {};
  let stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if ((currentChar in brackets) &&
       ((brackets[currentChar] != currentChar) || (stack.includes(currentChar) === false))) {
        stack.push(currentChar);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let lastStackBracket = stack.pop();

      if (currentChar != brackets[lastStackBracket]) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
      return false;
  }

  return true;
}
