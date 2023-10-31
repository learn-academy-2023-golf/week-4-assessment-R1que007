# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the virtual DOM in React?

Your answer: The virtual DOM is a visual representation of code. It updates specific components rather than refreshing an entire page. 

Researched answer: The virtual DOM is an in-memory representation of the Real DOM. It is a JavaScript object that mimics the structure of the Real Dom. This allows for efficient updates and minimizes the direct manipulation of the real Dom. 

2. Ruby has an implicit return. What does that mean?

Your answer: This means that there is no need for a method or object to have an actual return as the return is implied and the last line of code will be returned.

Researched answer: In Ruby, an implicit return means that a method or block of code will automatically return the result of the last evaluated expression without neediing to explicitly use the 'return' key word. Developers may still use the term as preference or as a means to return a value explicitly or exit a method early.

example:
def divide(a, b)
return "Division by zero is not allowed!" if b == a/b
end

b == a/b is only true if b is equal to zero and the message will return if an attempt to devide by zero is made. 

3. Compare and contrast JavaScript and Ruby. What are three things they have in common and what are three differences?

Your answer: JavaScript and Ruby are similar in the following ways:

-both are dynamic languages, meaning that there is no need to specify the type of data in a variable and the type of data may be changed.

-both use classes, in fact, in Ruby everything is a class.

-They are both object oriented.  

Differences:

-Javascript uses functions and Ruby uses methods.

-Ruby is developer friendl

-Ruby uses cammelCase where Ruby uses snake_case.



Researched answer:

Commonalities:
- Both are dynamic meaning there is no need to declare a variable's data type explicitly. A variable's type may be changed during runtime. 
- Both allow you to pass functions as arguments to other functions, return functions from functions, and store functionsin variables.
- They are both interpreted languages which means that there is no need to compile. Ruby is executed in a web browser, while Ruby code runs using the Ruby interpreter.

Differences:
-Ruby typically runs on servers for web applications and JavaScript runs in the browser.

-They have different naming conventions. Ruby uses snake-case, while JavaScript uses camelCase.

-JavaScript is Multi-paradigm language, which allows both object-oriented and functional programming. Ruby is Object oriented with a strong focus on simplicity and developer experience.

4. STRETCH: What is a version manager?

Your answer: I imagine it manages versions of sorts.

Researched answer: A versioin manager is a tool that helps to manage, and to switch between different versions of software, programming languages, or libraries. Ruby uses RVM (Ruby Version Manager)

## Looking Ahead: Terms for Next Week

1. Ruby blocks: Is a group of code, normally wrapped by {} or by do/end statements. They may be used to enclose a specific set of instruction that can be passed to methods as an argument.

2. RSpec: Is a testing framework for the Ruby programming language. It is used to write tests for Ruby apps. 

3. Test-driven development: is a software development methodology in which a test is written before the code. The steps are as follows: Write a test, Run the test, Write the Code, Run the test again, Refactor, and Repeat.  