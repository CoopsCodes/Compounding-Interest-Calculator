//* A = P(1 + r/n)^nt  **^nt after the brackets is to a power**
//! accumulated interest

document.querySelector('#interestCalculator').addEventListener('submit', (e) => {
  //* prevents the form submitting the default action.
  e.preventDefault();

  const principal = document.querySelector('#principal').value;
  const interestRate = document.querySelector('#interestRate').value;
  const monthlyInterestRate = interestRate / 12
  const months = document.querySelector('#months').value;
  

  accumulatedInterest = (principal, monthlyInterestRate, months) => {
    return total = principal * Math.pow(1 + (monthlyInterestRate / 100) / 12, 12 * months);
  }
  console.log(accumulatedInterest(principal, monthlyInterestRate, months));
});