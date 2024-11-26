/**
 * Function to generate insurance quote
 * @param {Object} input - The input JSON containing car_value and risk_rating
 * @param {number} input.car_value - The value of the car
 * @param {number} input.risk_rating - The risk rating for the insurance
 * @returns {Object} - The output JSON containing monthly_premium and yearly_premium
 */
function generateQuote({ car_value, risk_rating }) {
  // Validate inputs
  if (typeof car_value !== "number" || car_value <= 0) {
    return { error: "Invalid car_value. Must be a positive number." };
  }
  if (typeof risk_rating !== "number" || risk_rating <= 0 || risk_rating > 5) {
    return { error: "Invalid risk_rating. Must be a number between 1 and 5." };
  }

  // Business rule logic: Premium calculations
  const yearly_premium = (car_value * risk_rating) / 100.0; 
  const monthly_premium = (yearly_premium / 12);

  // Return calculated premiums in JSON format
  return {
    monthly_premium,
    yearly_premium,
  };
}

module.exports = generateQuote;
