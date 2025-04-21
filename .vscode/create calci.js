function createCalculator() {
    return {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => b !== 0 ? a / b : "Cannot divide by zero"
    };
  }
  
  const calc = createCalculator();
  console.log(calc.add(5, 3));       
  console.log(calc.subtract(10, 2)); 
  console.log(calc.multiply(4, 5));  
  console.log(calc.divide(10, 2));   
  