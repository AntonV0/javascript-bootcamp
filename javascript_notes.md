# JavaScript Notes

**JavaScript is a versatile programming language commonly used for web development. It allows developers to create interactive and dynamic web pages.**

## JavaScript is a Scripting Language
JavaScript is a scripting language that runs in the browser. It is used to manipulate the Document Object Model (DOM) and create dynamic content on web pages.
It is often used for automating processes, enhancing functionality, and creating dynamic behaviour in applications.

### Characteristics of scripting languages:
- Interpreted: Scripting languages are typically interpreted, meaning they are executed line by line at runtime rather than being compiled into machine code beforehand.
- Dynamic Typing: Scripting languages often have dynamic typing, allowing variables to hold values of different types without explicit declaration.
- High-Level: Scripting languages are high-level languages that abstract away low-level details, making them easier to write and understand.
- Flexible: Scripting languages often provide flexibility in terms of syntax and programming paradigms, allowing developers to choose the style that best suits their needs.

## JavaScript is a Programming Language
JavaScript is also a programming language that can be used for a wide range of applications beyond just web development. It can be used for server-side development with Node.js, mobile app development with frameworks like React Native, and even desktop application development with Electron.

### Characteristics of programming languages:
- Compiled or Interpreted: Programming languages can be either compiled (translated into machine code before execution) or interpreted (executed line by line at runtime).
- Static or Dynamic Typing: Programming languages can have static typing (where variable types are defined at compile time) or dynamic typing (where variable types can change at runtime).
- Low-Level or High-Level: Programming languages can be low-level (closer to machine code) or high-level (abstracting away low-level details).
- Structured or Object-Oriented: Programming languages can support different programming paradigms, such as structured programming (focusing on procedures and functions) or object-oriented programming (focusing on objects and classes).


## ECMAScript
ECMAScript is the standard that defines the syntax and semantics of JavaScript. It is maintained by the ECMA International organisation. The latest version of ECMAScript is ECMAScript 2024, which includes new features and improvements to the language.

ECMA-262 is the official specification for ECMAScript, and it defines the core features of the language. JavaScript implementations, such as those in web browsers, follow this specification to ensure compatibility and consistency across different platforms.

## JavaScript is an Interpreted Language
JavaScript is an interpreted language, which means that it is executed directly by the browser or runtime environment without the need for a separate compilation step. This allows for faster development and easier debugging, as developers can see the results of their code immediately without having to wait for a compilation process. However, it also means that JavaScript may not perform as well as compiled languages in certain situations, especially when it comes to computationally intensive tasks.

## JavaScript engine
A JavaScript engine is a program that executes JavaScript code. It is responsible for parsing, compiling, and executing JavaScript code in a web browser or runtime environment. Some popular JavaScript engines include V8 (used in Google Chrome), SpiderMonkey (used in Mozilla Firefox), and Chakra (used in Microsoft Edge). These engines optimise the execution of JavaScript code to improve performance and provide a better user experience.

## Step-by-step execution of JavaScript code in a browser
1. Fetching the JS Code (loading stage): The browser retrieves the JavaScript code from the server or local file system. This can be done through a `<script>` tag in the HTML document or by dynamically loading scripts using JavaScript.
2. Parsing the JS Code (lexical analysis and syntax parsing): The JavaScript engine reads the script line by line and parses the code to understand its structure and syntax. It breaks down the code into tokens (lexical analysis) and creates an Abstract Syntax Tree (AST) that represents the code's structure. At the parsing stage, the engine also performs syntax checking to ensure that the code is valid and does not contain any errors.
3. Compiling the JS Code (optional): Some JavaScript engines use Just-In-Time (JIT) compilation to optimise the execution of JavaScript code. This involves compiling the code into machine code at runtime, which can improve performance for frequently executed code. However, not all JavaScript engines use JIT compilation, and some may execute the code directly without compiling it.
4. Executing the JS Code: Once the code is parsed (and optionally compiled for optimisation), the JavaScript engine executes the code. This involves running the code line by line, executing functions, and manipulating the DOM as needed. The engine also handles events and manages memory during execution. JS follows single-threaded execution, meaning that it can only execute one piece of code at a time. However, it uses an event loop to manage asynchronous operations and allow for non-blocking execution.
5. Garbage Collection: As the JavaScript code executes, it may create objects and allocate memory. The JavaScript engine includes a garbage collector that automatically frees up memory that is no longer being used by the program, helping to prevent memory leaks and improve performance. It removes unused variables, objects, and functions from memory to ensure efficient memory management.

## Client-side JavaScript
Client-side JavaScript refers to JavaScript code that is executed in the user's web browser. It is used to create interactive and dynamic web pages by manipulating the DOM, handling user events, and making asynchronous requests to the server. Client-side JavaScript can be used for tasks such as form validation, creating animations, and updating content without requiring a page reload. For example, you can use client-side JavaScript to create a dropdown menu that appears when a user clicks on a button, or to validate a form before it is submitted to the server.

## Server-side JavaScript
Server-side JavaScript refers to JavaScript code that is executed on the server rather than in the user's web browser. It is commonly used for building web applications and APIs using frameworks like Node.js. Server-side JavaScript allows developers to handle HTTP requests, interact with databases, and perform server-side logic. For example, you can use server-side JavaScript to create a RESTful API that allows clients to retrieve and manipulate data stored in a database, or to handle user authentication and authorization for a web application.

## JavaScript variables
### In JavaScript, variables are used to store data values. There are three ways to declare variables in JavaScript: `var`, `let`, and `const`.
- `var`: This is the traditional way to declare variables in JavaScript. Variables declared with `var` are function-scoped, meaning they are accessible within the function they are declared in. They can also be re-declared and updated within the same scope.
- `let`: This is a newer way to declare variables in JavaScript. Variables declared with `let` are block-scoped, meaning they are only accessible within the block they are declared in (e.g., within a loop or an if statement). They can be updated but cannot be re-declared within the same scope.
- `const`: This is used to declare constants in JavaScript. Variables declared with `const` are block-scoped and cannot be updated or re-declared within the same scope. They must be initialised with a value at the time of declaration.

### JavaScript variable names must follow certain rules:
- They must begin with a letter, underscore (_), or dollar sign ($).
- They can contain letters, digits, underscores, or dollar signs.
- They cannot be reserved keywords (e.g., `var`, `let`, `const`, `if`, `else`, etc.).
- They are case-sensitive (e.g., `myVariable` and `myvariable` are different variables).
- They should be descriptive and meaningful to improve code readability (e.g., `firstName` instead of `x`).

## DOM (Document Object Model)
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML document as a tree of objects, where each object corresponds to an element in the document. The DOM allows developers to manipulate the content, structure, and style of a web page using JavaScript. For example, you can use the DOM to change the text of a heading, add new elements to a list, or modify the attributes of an image. The DOM provides methods and properties that allow you to access and modify elements in the document, making it possible to create dynamic and interactive web pages.

