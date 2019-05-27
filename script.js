//* A = P(1 + r/n)nt  **nt after the brackets is to a power**

//! accumulated interest
accumulatedInterest = (principal, annualRate, nPeriods, nTime) => {
  total = principal * Math.pow(1 + annualRate / nPeriods, nPeriods * nTime)
  return total - principal
}

adjustInterestRate = (interestRate) => {
  return interestRate / 100
}

console.log(accumulatedInterest(10000.00, adjustInterestRate(3.8), 12, 0.5));