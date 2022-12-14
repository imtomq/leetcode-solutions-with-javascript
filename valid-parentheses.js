/**
 * @param {string} s
 * @return {boolean}
 */

// https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  const match = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const hashMap = [];

  for (let i = 0; i < s.length; i++) {
    if (match[s[i]]) {
      hashMap.push(s[i]);
    } else {
      if (s[i] === match[hashMap[hashMap.length - 1]]) {
        hashMap.pop();
      } else {
        return false;
      }
    }
  }
  return hashMap.length === 0;
};
