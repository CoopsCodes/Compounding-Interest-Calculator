//* A = P(1 + r/n)^nt  **^nt after the brackets is to a power**
//! accumulated interest

const accumulatedInterest = (principal, interestRate, months) => {
  const total = principal * Math.pow(1 + (interestRate / 100) / 12, 12 * months);
  const interest = total - principal
  const rounded = interest.toFixed(2)
  return String(rounded)
}

document.querySelector('#interestCalculator').addEventListener('submit', (e) => {
  //* prevents the form submitting the default action.
  e.preventDefault();

  const principal = document.querySelector('#principal').value;
  const interestRate = document.querySelector('#interestRate').value / 12;
  const months = document.querySelector('#months').value;
  const calc = accumulatedInterest(principal, interestRate, months)


  const result = document.querySelector('#totalInterest')
  const text = `
  <p class="calculation">Interest: $${calc}</p>
  `
  // insertAdjacentHTML places the total after the submit button is called
  result.insertAdjacentHTML('afterend', text);
});

function clearResults() {
  document.querySelector(".calculation").remove();
}

function clearForm() {
  document.getElementById("interestCalculator").reset();
}