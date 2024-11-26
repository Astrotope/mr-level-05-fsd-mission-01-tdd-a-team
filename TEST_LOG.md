# (1) ToDo Test Suites Created and Passing...

```bash
npm test

> feature-api-03@0.0.1 test
> jest

 PASS  ./api-03.test.js
  Turners Car Auctions - Insurance API Upgrade (Main Use Case and Valid Inputs)
    ✎ todo Main use case, valid inputs
    ✎ todo Maximum risk rating
    ✎ todo Valid input, string car_value with '$'
    ✎ todo car_value as string without '$'
    ✎ todo Risk rating as decimal value
    ✎ todo car_value as float string with '$'
    ✎ todo Valid input, no formatting
    ✎ todo Valid input with whitespace
  Turners Car Auctions - Insurance API Upgrade (Invalid Inputs and Edge Cases)
    ✎ todo Edge case, risk_rating = 0
    ✎ todo Edge case, risk_rating = 6
    ✎ todo Invalid JSON (semi-colons instead of commas)
    ✎ todo Non-numeric car_value
    ✎ todo Non-numeric risk_rating
    ✎ todo Negative car_value
    ✎ todo Ensure error message specifies risk_rating issue
    ✎ todo Ensure error message specifies car_value issue
    ✎ todo Zero risk_rating
    ✎ todo Negative risk_rating
    ✎ todo Missing car_value
    ✎ todo Missing risk_rating
    ✎ todo Empty JSON input
    ✎ todo car_value as negative string
  Turners Car Auctions - Insurance API Upgrade (Boundary Testing)
    ✎ todo car_value = 0
    ✎ todo Smallest possible valid inputs
    ✎ todo Edge case, very large car_value
    ✎ todo Largest valid inputs
    ✎ todo Boundary condition for rounding up
  Turners Car Auctions - Insurance API Upgrade (Rounding and Format Testing)
    ✎ todo Rounding check, half-to-even (bankers' rounding)
    ✎ todo Rounding check, exact half
    ✎ todo Check rounding differences in last month
    ✎ todo Ensure rounding up for consistency
    ✎ todo Fractional car_value
  Turners Car Auctions - Insurance API Upgrade (Large Input and Formatting)
    ✎ todo Edge case, very large car_value
    ✎ todo Testing large strings (quotes removed)
  Turners Car Auctions - Insurance API Upgrade (Miscellaneous Tests)
    ✎ todo Testing negative car_value format
    ✎ todo Empty string for risk_rating

Test Suites: 1 passed, 1 total
Tests:       36 todo, 36 total
Snapshots:   0 total
Time:        0.498 s
Ran all test suites.
```
