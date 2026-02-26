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

// ! ------------------------------------------------------------------------------------------------

// ! JAVASCRIPT DATA TYPES:

// ! ------------------------------------------------------------------------------------------------

// ? Built-in data types include:
// 1. Number: Represents numeric values (e.g., 42, 3.14).
// a = 3.14; (floating-point number literal) and a = 42; (integer literal)

// 2. String: Represents sequences of characters (e.g., "Hello, World!").
// a = "Hello, World!"; (string literal) and a = 'Hello, World!'; (also a string literal)

// 3. Boolean: Represents logical values (true or false).
// a = true; (boolean literal) and a = false; (also a boolean literal)

// 4. Null: Represents the intentional absence of any object value (null).
// a = null; (null literal) is used to indicate that a variable has no value or is empty.

// 5. Undefined: Represents a variable that has been declared but not assigned a value (undefined).
// a = undefined; (undefined literal)

// 6. Symbol: Represents a unique identifier (e.g., Symbol('description')).
// a = Symbol('description'); creates a new symbol with the description 'description'.

// 7. BigInt: Represents integers with arbitrary precision (e.g., 9007199254740991n).
// a = BigInt(9007199254740991); (BigInt literal)

// 8. NaN: Represents a value that is "Not-a-Number" (e.g., 0/0).
// a = NaN; (Not-a-Number literal)

// 9. Infinity: Represents positive infinity (e.g., 1/0) and negative infinity (e.g., -1/0).
// a = Infinity; (Positive infinity)
// a = -Infinity; (Negative infinity)

// ? ------------------------------------------------------------------------------------------------

// ? Built-in object types include:
// 1. Object: Represents a collection of key-value pairs (e.g., { name: "Alice", age: 30 }).

// 2. Array: Represents an ordered list of values (e.g., [1, 2, 3, 4, 5]).
// 3. Function: Represents a reusable block of code that performs a specific task 
//              (e.g., function greet() { console.log("Hello!"); }).
// 4. Date: Represents a specific point in time (e.g., new Date()).

// ? ------------------------------------------------------------------------------------------------

// ? Primitive types are immutable and are stored directly in the variable, while object types are 
// ? mutable and are stored as references in the variable.

// For example, Symbols are unique and immutable primitive values, while objects can have properties 
// that can be changed after they are created.
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // ? Output: false (because each Symbol is unique)

let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
console.log(obj1 === obj2); // ? Output: false (because obj1 and obj2 are different objects in memory)

// Example showing mutability of objects:
let person1 = { name: "Bob", age: 25 };
console.log("Before mutation:", person1); // ? Output: { name: 'Bob', age: 25 }
person1.age = 26; // Mutating the age property of person1
console.log("After mutation:", person1); // ? Output: { name: 'Bob', age: 26 }

// ? ------------------------------------------------------------------------------------------------

// ? By default, all JavaScript objects inherit from the Object prototype, which provides common 
// ? methods and properties that can be used on all objects. 

// For example, the toString() method is available on all objects and can be used to convert
// an object to a string representation. 

// JavaScript provides built-in constructors for creating specific types of objects, 
// such as Object(), Array(), Function(), and Date(). 
// You can create instances of these object types with specific properties and methods.

// For example, you can create a new object using the Object constructor like this: 
let obj = new Object(); 
// or create an array using the Array constructor like this: 
let arr = new Array(1, 2, 3);

// ? Using isArray() method to check if a variable is an array:
console.log("Is arr an array?", Array.isArray(arr)); // ? Output: true

// ? Using instanceof operator to check if an object is an instance of a specific constructor:
console.log("Is obj an instance of Object?", obj instanceof Object); // ? Output: true
console.log("Is arr an instance of Array?", arr instanceof Array); // ? Output: true

// ? Example of an object literal:
const person = { first_name: "John", last_name: "Doe" };
console.log("Type of person:", typeof person); // ? Output: object
console.log("Is person an instance of Object?", person instanceof Object); // ? Output: true

// ? Example of creating an object using the Object constructor with properties:
const cars = new Object();
cars.brand = "Toyota"; // .brand is a property of the cars object
cars.model = "Corolla";
cars.price = 20000;
console.log("Car details:", cars); // ? Output: { brand: 'Toyota', model: 'Corolla', price: 20000 }

// ! ------------------------------------------------------------------------------------------------

// ! JAVASCRIPT FORMATTING:

// ! ------------------------------------------------------------------------------------------------

// ? Template literals (introduced in ES6) allow for easier string formatting and multi-line strings.
let name1 = "Alice";
let age1 = 30;
let greeting = `Hello, my name is ${name1} and I am ${age1} years old.`;
console.log(greeting); // ? Output: Hello, my name is Alice and I am 30 years old.

// Template literals use backticks (`) instead of ' or " quotes, and expressions can be embedded
// inside ${} placeholders.

// ? Number formatting can be done using the toFixed() method, which formats a number to a 
// ? specified number of decimal places.
let num7 = 3.14159;
console.log("Formatted number (2 decimal places):", num7.toFixed(2)); // ? Output: 3.14

// ? Date formatting can be done using the toLocaleDateString() method, which formats a date 
// ? according to the locale and options provided.
let date = new Date();
console.log("Formatted date (US locale):", date.toLocaleDateString('en-US')); // ? Output: MM/DD/YYYY
console.log("Formatted date (UK locale):", date.toLocaleDateString('en-GB')); // ? Output: DD/MM/YYYY

// ! ------------------------------------------------------------------------------------------------

// ! JAVASCRIPT TYPE CASTING:

// ! ------------------------------------------------------------------------------------------------

// ? Type casting is the process of converting a value from one type to another. In JavaScript, type 
// ? casting can be done explicitly using built-in functions or implicitly by the JavaScript engine.

// ? ------------------------------------------------------------------------------------------------

// ? Explicit type casting can be done using functions like Number(), String(), Boolean(), etc.

let strNum = "123";
let num8 = Number(strNum);

console.log("Explicit type casting (String to Number):", num8); // ? Output: 123
console.log("Type of num8:", typeof num8); // ? Output: number

// Explicit type casting can use the String() function to convert a number to a string:
let num9 = 456;
let str9 = String(num9);
console.log("Explicit type casting (Number to String):", str9); // ? Output: "456"

// Using parseInt() to convert a string to an integer:
let strInt = "789abc"; // parseInt will parse the number until it encounters a non-numeric character
let intNum = parseInt(strInt);
console.log("Explicit type casting (String to Integer):", intNum); // ? Output: 789

// Using parseFloat() to convert a string to a floating-point number:
let strFloat = "3.14xyz"; // parseFloat will parse the number until it encounters a non-numeric char
let floatNum = parseFloat(strFloat);
console.log("Explicit type casting (String to Float):", floatNum); // ? Output: 3.14

// Using Boolean() to convert a value to a boolean:
console.log("Explicit type casting (String to Boolean):", Boolean("Hello")); // ? Output: true
console.log("Explicit type casting (Empty String to Boolean):", Boolean("")); // ? Output: false
console.log("Explicit type casting (Number to Boolean):", Boolean(0)); // ? Output: false
console.log("Explicit type casting (Non-zero Number to Boolean):", Boolean(42)); // ? Output: true

// Converting string to an array using Array.from():
let strArray = "Hello";
let arrFromStr = Array.from(strArray);
console.log("Explicit type casting (String to Array):", arrFromStr); 
// ? Output: ['H', 'e', 'l', 'l', 'o']

// Converting an array to a string using join():
let arr1 = ['H', 'e', 'l', 'l', 'o'];
let strFromArr = arr1.join('');
console.log("Explicit type casting (Array to String):", strFromArr); // ? Output: "Hello"

// ? ------------------------------------------------------------------------------------------------

// ? Implicit type casting occurs when JavaScript automatically converts values to the expected type
// ? based on the context of the operation. 

// For example, when using the + operator with a string and a number, JavaScript will convert the
// number to a string and concatenate the values.

let str1 = "The number is: ";
let num10 = 42;
let result3 = str1 + num10; // Implicit type casting (Number to String)
console.log("Implicit type casting (String + Number):", result3); // ? Output: The number is: 42
console.log("Type of result3:", typeof result3); // ? Output: string

// Another example of implicit type casting is when using the == operator, which performs type
// coercion before comparing values. For example:

let num11 = 5;
let str2 = "5";

console.log("Using == operator (with type coercion):", num11 == str2); 
// ? Output: true (because the string "5" is coerced to the number 5 before comparison)

console.log("Using === operator (strict equality):", num11 === str2); 
// ? Output: false (because the types are different and no coercion occurs)

// ! ------------------------------------------------------------------------------------------------

// ! JAVASCRIPT CONDITIONAL STATEMENTS:

// ! ------------------------------------------------------------------------------------------------

// ? Conditional statements allow you to execute different code blocks based on certain conditions.
// ? The most common conditional statements in JavaScript are if, else if, else, and switch.

// The ternary operator is also a conditional operator that allows you to write a simple if-else 
// statement in a single line.

// ? ------------------------------------------------------------------------------------------------

// ? if, else, and else if statements:

// The if statement executes a block of code if a specified condition is true.
let num12 = 10;
if (num12 > 5) {
    console.log("num12 is greater than 5"); // ? Output: num12 is greater than 5
}

// The else statement executes a block of code if the condition in the if statement is false.
let num13 = 3;
if (num13 > 5) {
    console.log("num13 is greater than 5");
} else {
    console.log("num13 is not greater than 5"); // ? Output: num13 is not greater than 5
}

// The else if statement allows you to check multiple conditions.
let num14 = 5;
if (num14 > 5) {
    console.log("num14 is greater than 5");
} else if (num14 === 5) {
    console.log("num14 is equal to 5"); // ? Output: num14 is equal to 5
} else {
    console.log("num14 is less than 5"); // ? Output: num14 is less than 5
}

// ? Example: Finding out if a triangle is equilateral, isosceles, or scalene based on angles
let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

if (angle1 === angle2 && angle2 === angle3) {
    // you cant do angle1===angle2===angle3 because it will be evaluated as (angle1===angle2)===angle3,
    // which will return a boolean valueand then compare that boolean value to angle3, which is 
    // not the intended logic.
    console.log("The triangle is equilateral");
} else if (angle1 === angle2 || angle2 === angle3 || angle1 === angle3) {
    console.log("The triangle is isosceles");
} else {
    console.log("The triangle is scalene");
}

// ? Output: The triangle is equilateral

// ? ------------------------------------------------------------------------------------------------

// ? switch statement:

// The switch statement allows you to execute different code blocks based on the value of a variable.
let day = "Monday";
switch (day) { // Evaluate the expression (day) and compare it to the case labels.
    case "Monday": // case label for "Monday"
        console.log("Today is Monday"); 
        break; // Exit if this case is executed to prevent fall-through to the next cases.
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default: // The default case is executed if none of the above cases match the value of day.
        console.log("Invalid day");
}   

// ? Output: Today is Monday

// ! ------------------------------------------------------------------------------------------------

// ! JAVASCRIPT CONTROL STRUCTURES:

// ! ------------------------------------------------------------------------------------------------

// ? Control structures allow you to control the flow of your program based on certain conditions or
// ? to repeat a block of code multiple times. The most common control structures in JavaScript are 
// ? loops (for, while, do-while) and the ternary operator.

// ? ------------------------------------------------------------------------------------------------

// ? for loop:

// The for loop is used to repeat a block of code a specific number of times. It consists of three 
// parts: the initialisation, the condition, and the increment/decrement.

for (let i = 0; i < 5; i++) { // Initialisation: let i = 0; Condition: i < 5; Increment: i++
    console.log("Iteration:", i);
}

// ? Output: Iteration: 0, Iteration: 1, Iteration: 2, Iteration: 3, Iteration: 4

// ? ------------------------------------------------------------------------------------------------

// ? for...in loop:
// The for...in loop is used to iterate over the properties of an object. It provides a simpler 
// syntax for iterating over object properties.

const person2 = { name: "Alice", age: 30, city: "New York" };
for (let key in person2) { // key will take the value of each property name in person2
    console.log(`${key}: ${person2[key]}`); // Access the value of the property using person2[key]
}
// ? Output:
// name: Alice
// age: 30
// city: New York

// ? ------------------------------------------------------------------------------------------------

// ? for...of loop:
// The for...of loop is used to iterate over iterable objects (like arrays, strings, etc.) and 
// provides a simpler syntax for iterating over values.

// ? for...of loop with an array:
const arr2 = [10, 20, 30, 40, 50];
for (let value of arr2) { // value will take the value of each element in arr2
    console.log("Value:", value);
}
// ? Output: Value: 10, Value: 20, Value: 30, Value: 40, Value: 50

// ? for...of loop with a string:
const str3 = "Hello";
for (let char of str3) { // char will take the value of each character in str3
    console.log("Character:", char);
}
// ? Output: Character: H, Character: e, Character: l, Character: l, Character: o

// ? ------------------------------------------------------------------------------------------------

// ? while loop:

// The while loop is used to repeat a block of code as long as a specified condition is true.
let j = 0;
while (j < 5) { // Condition: j < 5
    console.log("Iteration:", j);
    j++; // Increment: j++
}
// ? Output: Iteration: 0, Iteration: 1, Iteration: 2, Iteration: 3, Iteration: 4

// ? ------------------------------------------------------------------------------------------------

// ? do-while loop:
// The do-while loop is similar to the while loop, but it guarantees that the block of code will be
// executed at least once, even if the condition is false.

let k = 0;
do {
    console.log("Iteration:", k);
    k++; // Increment: k++
} while (k < 5);
// ? Output: Iteration: 0, Iteration: 1, Iteration: 2, Iteration: 3, Iteration: 4

// Example of do-while loop where the condition is initially false:
let m = 10;
do {
    console.log("This will be printed at least once, even though the condition is false.");
    m++;
} while (m < 10);
// ? Output: This will be printed at least once, even though the condition is false.

// ? ------------------------------------------------------------------------------------------------

// ? To control the flow of your program, you can use break and continue statements. 
// The break statement is used to exit a loop or switch statement, while the continue statement is 
// used to skip the current iteration of a loop and move to the next iteration.

// ? Example of break statement:
for (let n = 0; n < 10; n++) {
    if (n === 5) {  // When n is equal to 5, the break statement will exit the loop.
        break;
    }
    console.log("Iteration:", n);
}

// ? Output: Iteration: 0, Iteration: 1, Iteration: 2, Iteration: 3, Iteration: 4 
// Loop will exit when n is 5, so it will not print Iteration: 5 or any subsequent iterations.

// ? Example of continue statement:
for (let p = 0; p < 10; p++) {
    if (p % 2 === 0) { // When p is an even number, the continue statement will skip the rest 
                       // of the loop body and move to the next iteration.
        continue;
    }
    console.log("Iteration:", p);
}

// ? Output: Iteration: 1, Iteration: 3, Iteration: 5, Iteration: 7, Iteration: 9

// ? ------------------------------------------------------------------------------------------------

// ? Infinite loops:

for (;;) { // This creates an infinite loop because there is no condition to stop it.
    console.log("This will run forever!");
    break; // Prevent the infinite loop.
}
// ? Output: This will run forever!

// ? Another example of an infinite loop using while:
while (true) { // This creates an infinite loop because the condition is always true.
    console.log("This will also run forever!");
    break; // Prevent the infinite loop.
}
// ? Output: This will also run forever!

// ? ------------------------------------------------------------------------------------------------

// ? Example of a for loop with multiple initialisation and increment expressions:
for (let i = 0, j = 0; i <= 6 && j <= 10; i++, j++) {
    console.log(`i: ${i}, j: ${j}`);
}

// ? Output:
// i: 0, j: 0
// i: 1, j: 1
// i: 2, j: 2
// i: 3, j: 3
// i: 4, j: 4
// i: 5, j: 5
// i: 6, j: 6

