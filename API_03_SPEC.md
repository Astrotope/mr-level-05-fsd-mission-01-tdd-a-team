# API 3. Convert "Car Value" and "Risk Rating" to a "Quote"

### Input/Output Specification

- **Input:** 
  - This API takes 2 parameters as input in JSON format that includes - the "car value" (e.g. $6,614) and "risk rating" of the driver between 1 to 5 (e.g. 5 meaning high risk).
- **Output:** 
  - The output is a JSON format with the suggested monthly and yearly premium for the insurance policy, such as "$50", "$614,".

### Input/Output Format Specification


| INPUT                           | OUTPUT                                      | ERROR OUTPUT                |
|---------------------------------|---------------------------------------------|-----------------------------|
| { car_value: 6614; risk_rating: 5} | { monthly_premium: 27.5; yearly_premium: 330} | { error: "there is an error"} | 

### Business Rulse

#### Yearly Premium
- Yearly premium is calculated by car_value multiplied by driver rating divided by 100.
  - For example, 
    - Car value of $6,614 and driver rating of 5, the yearly premium will be $6,614 * 5 / 100 = $330.

### Monthly Premium
- The monthly premium is the yearly premium divided by 12.
  - For example,
    - The monthly premium in this example will be $300 /12 = $27.5.

### Error Output
- If input values are not valid, return an error.
  - For example,
    - "there is an error"
