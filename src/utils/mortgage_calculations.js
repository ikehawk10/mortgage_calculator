const mortgage_calculation = ({home_value, down_payment, percentage, interest, loan_term}) => {
  let total;
  const interestInDecimal = interest / 100;
  const n = loan_term * 12;
  const r = interestInDecimal / 12;
  // const interestTimesPayments = Math.pow((1 + interestInDecimal), loan_term);
  const interestTimesPayments = (Math.pow(1+r,180)).toFixed(3);

  total = (home_value*((r * interestTimesPayments)/(interestTimesPayments - 1))).toFixed(2);



  return total;
} 

export default mortgage_calculation;

