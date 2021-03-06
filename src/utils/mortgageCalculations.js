const mortgageCalculation = ({home_value, down_payment, percentage, interest, loan_term}) => {
  const interestInDecimal = interest / 100;
  const r = interestInDecimal / 12;
  const term = loan_term * 12;
  const interestTimesPayments = (Math.pow(1+r,term)).toFixed(3);

  home_value = home_value - down_payment;

  return (home_value*((r * interestTimesPayments)/(interestTimesPayments - 1))).toFixed(2);
} 

export default mortgageCalculation;

