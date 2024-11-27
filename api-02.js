function calculateRiskRating(input) {
  const keywords = ["collide", "crash", "scratch", "bump", "smash"];

  // Validate input
  if (!input || typeof input.claim_history !== "string") {
    return { error: "there is an error" };
  }

  // Convert the claim history to lowercase and count keywords
  const text = input.claim_history.toLowerCase();
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
  return { risk_rating: riskRating };
}

module.exports = { calculateRiskRating };

