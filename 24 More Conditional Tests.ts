// Equality and Inequality Test1
console.log("Equality test with strings:", "Apple" === "Apple");
// Equality and Inequality Test2
console.log("Inequality test with strings:", ("Apple" as string) != "Orange");

// Tests using the lower case function
console.log("Lower case function test: ", "HELLO".toLocaleLowerCase() ==="hello");

//Numerical tests involving equality
console.log("Equality test with numbers:", 26 === 26);
//Numerical tests involving inequality
console.log("Inequality test with numbers:", (26 as number) != 35);

// Greater than test
console.log("Greater than test:", 10 > 5);
// Less than test
console.log("Less than test:", 5 < 10);

// Greater than and equal to
console.log("Greater than and equal to test:", 10 >= 10);
// Less than or equal to
console.log("Less than or equal to test:", 5<= 10);

// Tests using "and" operator
console.log("And operator test: ", 5===5 && 10 > 5);
// Tests using "or" operator
console.log("Or operator test: ", 5===5 || false);

// Test whether an item is in a array
const fruits :string[] = ['Nashpati', 'Banana', 'Amrood'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));

// Test whether an item is not in array
console.log('Testing "Apple" is not in array: ' , !fruits.includes('Apple'));