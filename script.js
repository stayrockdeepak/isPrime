const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if (number === 1) {
  console.log("1 is neither prime nor composite number.");
} else if (number > 1) {
  // loop through 2 to number-1
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    document.getElementById(
      "isPrime"
    ).innerText = `${number} is a prime number`;
  } else {
    document.getElementById(
      "isPrime"
    ).innerText = `${number} is not a prime number`;
  }
}

// check if number is -ve
else {
  document.getElementById(
    "isPrime"
  ).innerText = `${number} is not a prime number`;
}
