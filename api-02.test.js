// const { createUser } = require('./api-02');  // Import createUser from api.js

// describe('User API Tests', () => {
//   test('should create a new user', () => {
//     const newUser = { id: 1, name: 'John Doe' };
//     const result = createUser(newUser); // Function to be implemented
//     expect(result).toEqual(newUser);
//    });
//   test.todo('should fetch a user by ID');
//   test.todo('should delete a user');
// });

// -------------------------------------------------------------->

const { calculateRiskRating } = require('./api-02');

describe('Risk Rating API Tests', () => {
  test('should return a risk rating of 3 for valid input with 3 keywords', () => {
    const input = {
      claim_history:
        "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes.",
    };

    const result = calculateRiskRating(input); 
    expect(result).toEqual({ risk_rating: 3 });
  });

  test.todo('')
  test.todo('')
  test.todo('')
  test.todo('')
});
