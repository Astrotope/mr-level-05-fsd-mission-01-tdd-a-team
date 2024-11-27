function calculateRiskRating(input) {
  // Debugging log for received input
  console.log("Received input:", input);

  // Validate input: check if null, undefined, or not an object
  if (!input || typeof input !== "object") {
    return {
      error: "error",
      description: "Input is null, undefined, or not a valid object. It must be a valid JSON object.",
    };
  }

  // Destructure the input
  const { claim_history } = input;

  // Check if required key is missing
  if (claim_history === undefined) {
    return {
      error: "error",
      description: "Missing required key: claim_history.",
    };
  }

  // Validate that claim_history is a string
  if (typeof claim_history !== "string") {
    return {
      error: "error",
      description: "claim_history must be a string.",
    };
  }

  // Convert the claim history to lowercase and count keywords
  const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  const text = claim_history.toLowerCase();
  let riskCount = 0;

  keywords.forEach((keyword) => {
    const regex = new RegExp(keyword, "g");
    const matches = text.match(regex);
    if (matches) {
      riskCount += matches.length;
    }
  });

  // Risk rating must be between 1 and 5
  const riskRating = Math.min(Math.max(riskCount, 1), 5);

  console.log("Calculated risk rating:", riskRating); // Debugging log for risk rating

  return { risk_rating: riskRating };
}

module.exports = { calculateRiskRating };


