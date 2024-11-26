function calculateCarValue({ model, year }) {
  // Validate inputs
  if (typeof model !== "string") {
    return { error: "there is an error" };
  }
  if (isNaN(year) || year < 0) {
    return { error: "there is an error" };
  }

  // Clean the model: remove non-alphabetic characters using a regular expression(REGEX)
  const cleanedModel = model.replace(/[^a-zA-Z]/g, "");
  // console.log("Cleaned Model:", cleanedModel); // Log cleaned model

  // Calculate sum of alphabet positions
  const charValueSum = cleanedModel // This is called method chaining
    .toUpperCase()
    .split("")
    //sum is the accumulator|char is the current value
    .reduce((sum, char) => {
      const charValue = char.charCodeAt(0) - 64; // .charCodeAt(0) is referring to the ASCII value char eg. Uppercaseletters(A-Z) have values from 65-90. So, -64 will bring A-Z values to 1-26.
      // console.log(`Character: ${char}, Value: ${charValue}`); // Log each character's position value
      return sum + charValue;
    }, 0); // 0 is the initial value for the .reduce() method.

  // console.log("Character Value Sum:", charValueSum); // Log total sum of positions

  // Calculate car value
  const carValue = charValueSum * 100 + year;
  // console.log("Car Value before adding year:", charValueSum * 100); // Log car value before adding the year
  // console.log("Final Car Value:", carValue); // Log final car value

  return { car_value: carValue };
}

// Export the function for testing
module.exports = { calculateCarValue };
