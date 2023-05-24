# Flatten N-dimensional array into One dimensional

For Example:- Input is [[1, [2, [3, [4]]]], 5, [6, [7, 8, [9]]], 10] , output will be [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]

## Usage

```
var FlattenArr = require('Flattenme'); //For ES6 import :- import Flattenme from "flattenme";
let FlattenedArr = Flattenme([[1,[3,4,5]]]) //expectedOutput :- [1,3,4,5]
```