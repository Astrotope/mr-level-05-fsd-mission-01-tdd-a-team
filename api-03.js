/**
 * Function to generate insurance quote
 * @param {Object} input - The input JSON containing car_value and risk_rating
 * @param {string|number} input.car_value - The value of the car (can be text or number)
 * @param {string|number} input.risk_rating - The risk rating for the insurance (can be text or number)
 * @returns {Object} - The output JSON containing monthly_premium and yearly_premium
 */
function generateQuote(input) {
  console.log("Received input:", input);

  if (!input || typeof input !== "object") {
    return { error: "Invalid input. Must provide a JSON object." };
  }

  const { car_value, risk_rating } = input;

  console.log("Received car_value:", car_value);
  console.log("Received risk_rating:", risk_rating);

  // Parse the inputs to numbers
  const parsedCarValue = parseFloat(car_value);
  const parsedRiskRating = parseFloat(risk_rating);

  // Validate parsed inputs
  if (isNaN(parsedCarValue) || parsedCarValue <= 0) {
    return { error: "Invalid car_value. Must be a positive number." };
  }
  if (isNaN(parsedRiskRating) || parsedRiskRating <= 0 || parsedRiskRating > 5) {
    return { error: "Invalid risk_rating. Must be a number between 1 and 5." };
  }

  // Business rule logic: Premium calculations
  const yearly_premium = (parsedCarValue * parsedRiskRating) / 100.0;
  const monthly_premium = (yearly_premium / 12);

  // Define reusable rounding function
  const roundToTwoDecimals = (value) => parseFloat(value.toFixed(2));

  // Round premiums to 2 decimal places and return output in JSON format
  return {
    monthly_premium: roundToTwoDecimals(monthly_premium),
    yearly_premium: roundToTwoDecimals(yearly_premium),
  };
}

module.exports = { generateQuote };
