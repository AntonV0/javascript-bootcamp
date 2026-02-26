// ! This is a simple JavaScript program that prints "Hello, World!" to the console.
console.log('Hello, World!');

// To run JavaScrip in Command prompt, use node filename.js

// ? To connect JS file to HTML file, we can use the <script> tag in the HTML file. For example:
// <script src="filename.js"></script>

// ? ------------------------------------------------------------------------------------------------

// To make text appear on the webpage, we can also use the innerHTML property. For example:
// document.body.innerHTML = "Hello, World!";

// Another way (deprecated) to make text appear on the webpage is to use the document.write() method. 
// For example:
// document.write('Hello, World!');

// To get a pop up alert box, we can use the alert() function. For example:
// alert('Hello, World!');

// ! ------------------------------------------------------------------------------------------------

// ! JAVASCRIPT VARIABLES:

// ! ------------------------------------------------------------------------------------------------

// ? let:

let a = 89 // Declare a variable that can be reassigned later.
console.log(a); // ? Output: 89
// let is better for real world use because it has block scope and cannot be redeclared, which helps 
// prevent bugs and makes code easier to maintain.

let d, e = 90; // Declare multiple variables in one line. 
// d is declared but not initialised, while e is declared and initialised to 90.

// ? Multiple variable declarations with let must be separated by a comma.
// let d, e = 20, 30 
// This will cause an error because you cannot declare multiple variables with let in the same line
// without separating them with a comma. The correct way to declare multiple variables with let is:
// let d = 20, e = 30;

// let a = 8, 9, 0 // This will also cause an error (but in Python it would create a tuple))

// ? ------------------------------------------------------------------------------------------------

// ? var:

var b = 65 // Declare a variable that can be reassigned later and has function scope.
console.log(b); // ? Output: 65
// var is generally not recommended for use in modern JavaScript because it has function scope and 
// can be redeclared, which can lead to bugs.

// ? let has block scope, while var has function scope
if(true) {
    let a = 67 // a has block scope (only accessible within this block).
    var b = 45 // b has function scope (accessible throughout the function, but not outside of it).
};

// ? Redeclaring a variable with let will cause an error, while redeclaring a variable with var will not
// let a = 90; // This will cause an error because 'a' has already been declared with let.
// var b = 66; // No error because 'b' has been declared with var and can be redeclared.

// ? ------------------------------------------------------------------------------------------------

// ? const:

const c = 28 // Declare a variable that cannot be reassigned and has block scope.
console.log(c); // ? Output: 28

// ? ------------------------------------------------------------------------------------------------

// ? Using typeof operator to check the type of a variable:
console.log(typeof a); // ? Output: number

// ? Number as an object:
let num = new Number(42); // Create a Number object
console.log(num); // ? Output: [Number: 42]
console.log(typeof num); // ? Output: object

// ? String as an object:
let str = new String("Hello"); // Create a String object
console.log(str); // ? Output: [String: 'Hello']
console.log(typeof str); // ? Output: object

// ? ------------------------------------------------------------------------------------------------

// ? User defined input:

// let userInput = prompt("Please enter your name:");
// console.log(userInput);
// This will show a prompt box to the user and store the input in the variable userInput.

// This is only available in a browser environment, so it will not work in Node.js or other 
// non-browser environments.

// ? ------------------------------------------------------------------------------------------------

// ? Swapping variables:

let x = 5;
let y = 10;

// Swapping using a temporary variable (older method):
let temp = x; // x = 5, temp = 5
x = y; // x = 10, temp = 5
y = temp; // y = 5, temp = 5
console.log("After swapping using a temporary variable:");
console.log("x:", x); // ? Output: x: 10
console.log("y:", y); // ? Output: y: 5

// Swapping using destructuring assignment (ES6 feature):
[x, y] = [y, x];
console.log("After swapping using destructuring assignment:");
console.log("x:", x); // ? Output: x: 5
console.log("y:", y); // ? Output: y: 10

// ! ------------------------------------------------------------------------------------------------

// ! JAVASCRIPT MEMORY MODEL:

// ! ------------------------------------------------------------------------------------------------

// ? JavaScript uses two types of memory: stack and heap. The stack is used for storing primitive 
// ? values (like numbers, strings, booleans) and function calls, while the heap is used for storing
// ? objects and arrays.

// ? Stacks are:
// 1. LIFO (Last In, First Out) data structure.
// 2. Used for storing primitive values (number, string, boolean, etc.) and function calls.
// 3. Memory is automatically managed and freed when a function call is completed.
// 4. Faster access compared to heap memory.

// Stacks store the actual values of primitive types.

// ? Heaps are:
// 1. Used for storing objects and arrays.
// 2. Memory is managed manually by the programmer (using new and delete).
// 3. Slower access compared to stack memory due to dynamic memory allocation and garbage collection.

// Heaps store references to objects, while the actual objects are stored in the heap memory. 
// When you assign an object to a variable, you are actually assigning a reference to that object 
// in the heap.


// ! ------------------------------------------------------------------------------------------------

// ! JAVASCRIPT OPERATORS:

// ! ------------------------------------------------------------------------------------------------

// ? Arithmetic Operators:
// These operators perform mathematical operations on operands.

let num1 = 10;
let num2 = 5;
console.log("Addition:", num1 + num2); // ? Output: 15
console.log("Subtraction:", num1 - num2); // ? Output: 5
console.log("Multiplication:", num1 * num2); // ? Output: 50
console.log("Division:", num1 / num2); // ? Output: 2
console.log("Modulus:", num1 % num2); // ? Output: 0
console.log("Exponentiation:", num1 ** num2); // ? Output: 100000

// ? Zero division:
console.log("Division by zero:", num1 / 0); // ? Output: Infinity
console.log("Zero divided by a number:", 0 / num1); // ? Output: 0
console.log("Modulus by zero:", num1 % 0); // ? Output: NaN

// ? ------------------------------------------------------------------------------------------------

// ? Assignment Operators:
// These operators assign values to variables.

let a1 = 10;
a1 += 5; // a1 = a1 + 5
console.log("After += operator:", a1); // ? Output: 15

a1 -= 3; // a1 = a1 - 3
console.log("After -= operator:", a1); // ? Output: 12

a1 *= 2; // a1 = a1 * 2
console.log("After *= operator:", a1); // ? Output: 24

a1 /= 4; // a1 = a1 / 4
console.log("After /= operator:", a1); // ? Output: 6

a1 %= 3; // a1 = a1 % 3
console.log("After %= operator:", a1); // ? Output: 0

a1 **= 2; // a1 = a1 ** 2
console.log("After **= operator:", a1); // ? Output: 0 (because 0 raised to any power is still 0)

// ? ------------------------------------------------------------------------------------------------

// ? Comparison Operators:
// These operators compare two values and return a boolean result.

let num3 = 10;
let num4 = 20;
console.log("Equal to (==):", num3 == num4); // ? Output: false
console.log("Not equal to (!=):", num3 != num4); // ? Output: true  
console.log("Strict equal to (===):", num3 === num4); // ? Output: false
console.log("Strict not equal to (!==):", num3 !== num4); // ? Output: true
console.log("Greater than (>):", num3 > num4); // ? Output: false
console.log("Less than (<):", num3 < num4); // ? Output: true
console.log("Greater than or equal to (>=):", num3 >= num4); // ? Output: false
console.log("Less than or equal to (<=):", num3 <= num4); // ? Output: true

// ? ------------------------------------------------------------------------------------------------

// ? Logical Operators:
// These operators are used to combine multiple boolean expressions and return a boolean result.

let bool1 = true;
let bool2 = false;
console.log("Logical AND (&&):", bool1 && bool2); // ? Output: false
console.log("Logical OR (||):", bool1 || bool2); // ? Output: true
console.log("Logical NOT (!):", !bool1); // ? Output: false
console.log("Logical NOT (!):", !bool2); // ? Output: true

// ? ------------------------------------------------------------------------------------------------

// ? Type Operators:
// The typeof operator returns a string indicating the type of the operand.

console.log("Type of num1:", typeof num1); // ? Output: number
console.log("Type of bool1:", typeof bool1); // ? Output: boolean
console.log("Type of str:", typeof str); // ? Output: object (because str is a String object)

// ? ------------------------------------------------------------------------------------------------

// ? instanceof operator:
// The instanceof operator checks if an object is an instance of a specific constructor or class.

console.log("Is num an instance of Number?", num instanceof Number); // ? Output: true
console.log("Is str an instance of String?", str instanceof String); // ? Output: true
console.log("Is num1 an instance of Number?", num1 instanceof Number); 
// ? Output: false (because num1 is a primitive number, not a Number object)

// ? ------------------------------------------------------------------------------------------------

// ? Ternary Operator:
// The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition,
// an expression to execute if the condition is true, and an expression to execute if the condition 
// is false.

// ? Example 1: Check if a person can vote based on their age:
let age = 18;
// The ? is the operator, and the : separates the true and false expressions.
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote:", canVote); // ? Output: Yes

// ? Using an if-else statement to achieve the same result:
let canVote2;
if (age >= 18) {
    canVote2 = "Yes";
} else {
    canVote2 = "No";
}
console.log("Can vote (using if-else):", canVote2); // ? Output: Yes

// ? Example 2: Check if a number is even or odd:
let number = 7;
// The condition checks if the number is divisible by 2 (i.e., even).
let odd_or_even = (number % 2 === 0) ? "Even" : "Odd";
console.log("The number is:", odd_or_even); // ? Output: Odd

// ? Example 3: Finding which number is greater:
let numA = 15;
let numB = 20;
// The condition checks if numA is greater than numB. If true, it returns numA; else, it returns numB.
let greater = (numA > numB) ? numA : numB;
console.log("Greater number is:", greater); // ? Output: 20

// ? ------------------------------------------------------------------------------------------------

// ? typeof operator:
// The typeof operator returns a string indicating the type of the operand.

console.log("Type of age:", typeof age); // ? Output: number
console.log("Type of canVote:", typeof canVote); // ? Output: string

// ? ------------------------------------------------------------------------------------------------

// ? Bitwise Operators:
// These operators perform bitwise operations on binary representations of numbers.

let bit1 = 5; // In binary: 0101
let bit2 = 3; // In binary: 0011
console.log("Bitwise AND (&):", bit1 & bit2); // ? Output: 1 (In binary: 0001)
console.log("Bitwise OR (|):", bit1 | bit2); // ? Output: 7 (In binary: 0111)
console.log("Bitwise XOR (^):", bit1 ^ bit2); // ? Output: 6 (In binary: 0110)
console.log("Bitwise NOT (~):", ~bit1); // ? Output: -6 (In binary: 1010)
console.log("Left Shift (<<):", bit1 << 1); // ? Output: 10 (In binary: 1010)
console.log("Right Shift (>>):", bit1 >> 1); // ? Output: 2 (In binary: 0010)

// ? How binary numbers work:
// Binary is a base-2 number system that uses only two digits: 0 and 1.
// Each digit in a binary number is called a bit, and the value of each bit is determined by its 
// position in the number.
// 2^0 = 1, 2^1 = 2, 2^2 = 4, 2^3 = 8, and so on. To convert a binary number to decimal, you can
// multiply each bit by its corresponding power of 2 and sum the results. For example, the binary 
// number 1011 can be converted to decimal as follows:
// (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (1 * 2^0) = 8 + 0 + 2 + 1 = 11 in decimal.
// To convert numbers to binary, you can repeatedly divide the number by 2 and track the remainders. 
// For example, to convert the decimal number 13 to binary:
// 13 / 2 = 6 remainder 1
// 6 / 2 = 3 remainder 0
// 3 / 2 = 1 remainder 1
// 1 / 2 = 0 remainder 1
// Reading the remainders from bottom to top gives us the binary representation of 13, which is 1101.

// ? ------------------------------------------------------------------------------------------------

// ? Unary Operators:
// These operators operate on a single operand and return a value.

let num5 = 10;
console.log("Unary plus (+):", +num5); // ? Output: 10
console.log("Unary minus (-):", -num5); // ? Output: -10
console.log("Increment (num5++):", num5++); // ? Output: 10 (num5 becomes 11 after this line)
console.log("After increment, num5:", num5); // ? Output: 11
console.log("Decrement (num5--):", num5--); // ? Output: 11 (num5 becomes 10 after this line)
console.log("After decrement, num5:", num5); // ? Output: 10  

// ? ------------------------------------------------------------------------------------------------

// ? Relational Operators:
// These operators compare two values and return a boolean result.

let num6 = 15;
console.log("Greater than (>):", num6 > 10); // ? Output: true
console.log("Less than (<):", num6 < 20); // ? Output: true
console.log("Greater than or equal to (>=):", num6 >= 15); // ? Output: true
console.log("Less than or equal to (<=):", num6 <= 15); // ? Output: true

// ! ------------------------------------------------------------------------------------------------

// ! OPERATOR PRECEDENCE:

// ! ------------------------------------------------------------------------------------------------

// ? Operator precedence determines the order in which operators are evaluated in an expression.
// For example, in the expression:
let result = 10 + 5 * 2; 
// The multiplication operator (*) has higher precedence than the addition operator (+).
console.log("Result of 10 + 5 * 2:", result); 
// ? Output: 20 
// (because 5 * 2 is evaluated first, resulting in 10 + 10)

// ? To change the order of evaluation, you can use parentheses:
let result2 = (10 + 5) * 2;
console.log("Result of (10 + 5) * 2:", result2);
// ? Output: 30
// (because 10 + 5 is evaluated first, resulting in 15 * 2)

// ! ------------------------------------------------------------------------------------------------

// ! JAVASCRIPT TOKENS:

// ! ------------------------------------------------------------------------------------------------

// ? JavaScript tokens are the smallest units of code that have meaning in the language. They include:
// 1. Keywords: Reserved words that have special meaning in JavaScript 
// (e.g., let, const, if, else, function).

// 2. Identifiers: Names used to identify variables, functions, and other entities 
// (e.g., myVariable, myFunction).

// 3. Literals: Fixed values that are directly represented in the code 
// (e.g., numbers, strings, booleans).

// 4. Operators: Symbols that perform operations on operands 
// (e.g., +, -, *, /).

// 5. Punctuation: Symbols that are used to structure the code 
// (e.g., parentheses (), curly braces {}, semicolons ;).

// 6. Comments: Text that is ignored by the JavaScript engine
// (e.g., // This is a single-line comment, /* This is a multi-line comment */).