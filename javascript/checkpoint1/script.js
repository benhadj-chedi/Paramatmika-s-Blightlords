function minMax(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (max < arr[index]) max = arr[index];
    if (min > arr[index]) min = arr[index];
  }
  return [min, max];
}

function sumOfCubes(nums) {
  let res = 0;
  for (let index = 0; index < nums.length; index++) {
    res += nums[index] ** 3;
  }
  return res;
}

function filterArray(arr) {
  let res = [];
  for (const element of arr) {
    if (typeof element === "number") {
      res.push(element);
    }
  }
  return res;
}

function isSymmetrical(num) {
  // casting  toString
  const str = num.toString();
  for (let index = 0; index < str.length / 2; index++) {
    if (str[index] !== str[str.length - 1 - index]) {
      return false;
    }
  }

  return true;
}

function isSpecialArray(arr) {
  for (let i in arr) {
    if (
      (i % 2 === 0 && arr[i] % 2 !== 0) ||
      (i % 2 !== 0 && arr[i] % 2 === 0)
    ) {
      return false;
    }
  }
  return true;
}

function objectToArray(obj) {
  return Object.entries(obj);
}

function marathonDistance(d) {
  let sum = 0;
  for (const element of d) {
    sum += Math.abs(element);
  }

  // if (sum === 25) return true;
  // else return false;
  return sum === 25;
}

function arrayOfMultiples(num, length) {
  let res = [];
  for (let index = 1; index <= length; index++) {
    res.push(index * num);
  }
  return res;
}
