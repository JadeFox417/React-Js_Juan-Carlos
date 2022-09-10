function isPrime(number) {
  // number <=1 is not a prime number
  if (number <= 1) return false;

  // number 2 and 3 are prime number
  if (number === 2 || number === 3) return true;
  else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

let result = isPrime(3) ? console.log(`Prime Number`) : console.log(`Not Prime Number`);
// let result = isPrime(7) ? console.log(`Prime Number`) : console.log(`Not Prime Number`);
// let result = isPrime(10) ? console.log(`Prime Number`) : console.log(`Not Prime Number`);
