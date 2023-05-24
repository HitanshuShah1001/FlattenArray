function Flatten({ array, ans }) {
  for (let element of array) {
    if (Array.isArray(element)) {
      ans.concat(Flatten({ array: element, ans }));
    } else if (typeof element === "object") {
      ans.push(JSON.stringify(element));
    } else {
      ans.push(element);
    }
  }
}

function Flattenme(array) {
  let ans = [];
  Flatten({ array, ans });
  return ans;
}

module.exports = Flattenme;
