const { createUser } = require('./api');  // Import createUser from api.js

describe('User API Tests', () => {
  test('should create a new user', () => {
    const newUser = { id: 1, name: 'John Doe' };
    const result = createUser(newUser); // Function to be implemented
    expect(result).toEqual(newUser);
   });
  test.todo('should fetch a user by ID');
  test.todo('should delete a user');
