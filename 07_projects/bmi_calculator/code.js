// form element ko select kar rahe hain
const form = document.querySelector('form');

// jab form submit hota hai tab ye function chalega
form.addEventListener('submit', function (e) {

  // page reload hone se rokne ke liye
  e.preventDefault();

  // height aur weight ki value le rahe hain
  const height = Number(document.querySelector('#height').value);
  const weight = Number(document.querySelector('#weight').value);

  // result dikhane wala div
  const results = document.querySelector('#results');

  // agar height valid nahi hai
  if (!height || height <= 0) {
    results.innerHTML = ' Please enter a valid height';
    return;
  }

  // agar weight valid nahi hai
  if (!weight || weight <= 0) {
    results.innerHTML = ' Please enter a valid weight';
    return;
  }

  // BMI calculation
  // height cm me hai isliye 10000 se divide kiya
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // BMI category decide kar rahe hain
  let category = '';

  if (bmi < 18.6) {
    category = 'Underweight';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = 'Normal';
  } else {
    category = 'Overweight';
  }

  // final result show karo
  results.innerHTML = `
    <p>Your BMI is <strong>${bmi}</strong></p>
    <p>Category: <strong>${category}</strong></p>
  `;
});
