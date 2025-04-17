let globalVar = "I am a global variable";

function printGlobalVar() {
  console.log(globalVar);  // Can access globalVar because it's in global scope
}

printGlobalVar();  // Output: "I am a global variable"
console.log(globalVar); 
//------------------------------------------------------
function testFunctionScope() {
    let localVar = "I am a local variable";
    console.log(localVar);  // Accessible within the function
  }
  
  testFunctionScope();  // Output: "I am a local variable"
  console.log(localVar);  // Error: localVar is not defined (outside the function)
  
