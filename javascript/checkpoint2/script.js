// Inverser une chaîne
function reverseString(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Compter les caractères
function countCharacters(str) {
  return str.length;
}

// Capitaliser les premiers caractères de chaque mot
function capitalizeWords(sentence) {
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
}

// Trouver le minimum
function findMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Trouver le maximum
function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Somme du tableau
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Filtrer le tableau avec une condition simple (exemple : nombre pair)
function filterEvenNumbers(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Factorielle
function factorial(n) {
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Vérifier si un nombre est premier
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Générer la suite de Fibonacci
function fibonacciSequence(n) {
  var sequence = [];
  if (n >= 1) sequence.push(0);
  if (n >= 2) sequence.push(1);
  for (var i = 2; i < n; i++) {
    var next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }
  return sequence;
}
