// Initial 14 questions
const initialQuizData =[
        {
            "question": "1. Which of the following is the correct way to declare an integer variable in C++?",
            "options": ["int x;", "integer x;", "int = x;", "x int;"],
            "answer": "int x;"
        },
        {
            "question": "2. What is the correct syntax to output 'Hello World' to the console in C++?",
            "options": ["cout << 'Hello World';", "echo 'Hello World';", "print('Hello World');", "cout >> 'Hello World';"],
            "answer": "cout << 'Hello World';"
        },
        {
            "question": "3. What is the default value of an uninitialized integer variable in C++?",
            "options": ["0", "undefined", "garbage value", "null"],
            "answer": "garbage value"
        },
        {
            "question": "4. Which of the following is used to take input from the user in C++?",
            "options": ["cin", "input", "get", "scan"],
            "answer": "cin"
        },
        {
            "question": "5. What is the result of the expression 10 / 3 in C++?",
            "options": ["3.33", "3", "3.0", "error"],
            "answer": "3"
        },
        {
            "question": "6. Which of the following C++ keywords is used to define a constant variable?",
            "options": ["const", "define", "constant", "static"],
            "answer": "const"
        },
        {
            "question": "7. What is the correct way to create a loop that runs 5 times in C++?",
            "options": ["for (int i = 0; i < 5; i++)", "loop (i = 0; i < 5; i++)", "repeat (i = 0; i < 5; i++)", "for (i = 0; i < 5; i++)"],
            "answer": "for (int i = 0; i < 5; i++)"
        },
        {
            "question": "8. How do you write a comment in C++?",
            "options": ["# This is a comment", "// This is a comment", "<!-- This is a comment -->", "/* This is a comment */"],
            "answer": "// This is a comment"
        },
        {
            "question": "9. Which operator is used to compare equality in C++?",
            "options": ["=", "==", "===", "!="],
            "answer": "=="
        },
        {
            "question": "10. Which of the following statements is true about C++ functions?",
            "options": ["A function must always return a value.", "A function can be called without declaring it.", "A function must have a return type.", "A function can't have parameters."],
            "answer": "A function must have a return type."
        },
        {
            "question": "11. How do you declare a character variable in C++?",
            "options": ["char x;", "character x;", "string x;", "char = x;"],
            "answer": "char x;"
        },
        {
            "question": "12. What does the 'return 0;' statement indicate in C++?",
            "options": ["The program executed successfully.", "The program has encountered an error.", "The program will stop immediately.", "The function will return 0 as the output."],
            "answer": "The program executed successfully."
        },
        {
            "question": "13. Which of the following loops is guaranteed to run at least once in C++?",
            "options": ["for", "while", "do-while", "repeat"],
            "answer": "do-while"
        },
        {
            "question": "14. What is the result of the expression 5 % 2 in C++?",
            "options": ["2", "3", "1", "0"],
            "answer": "1"
        },
        {
            "question": "15. What is the output of the following code?\n int x = 5; cout << ++x;",
            "options": ["6", "5", "error", "undefined"],
            "answer": "6"
        },
        {
            "question": "16. Which of the following data types are considered floating point types in C++?",
            "options": ["int, long", "float, double", "char, string", "bool, int"],
            "answer": "float, double"
        },
        {
            "question": "17. How do you initialize an array of 5 integers in C++?",
            "options": ["int arr[5];", "int arr = {1, 2, 3, 4, 5};", "array int[5];", "int arr[5] = {1, 2, 3, 4, 5};"],
            "answer": "int arr[5] = {1, 2, 3, 4, 5};"
        },
        {
            "question": "18. How do you access the third element of an array in C++?",
            "options": ["arr(2)", "arr[3]", "arr[2]", "arr.2"],
            "answer": "arr[2]"
        },
        {
            "question": "19. What does the break statement do in a loop?",
            "options": ["Exits the loop immediately.", "Continues to the next iteration of the loop.", "Stops the program.", "Pauses the loop."],
            "answer": "Exits the loop immediately."
        },
        {
            "question": "20. What is the size of an int in C++?",
            "options": ["2 bytes", "4 bytes", "8 bytes", "depends on the system"],
            "answer": "depends on the system"
        },
        {
            "question": "21. What is the purpose of the 'new' keyword in C++?",
            "options": ["Allocates memory dynamically.", "Creates a new variable.", "Initializes an array.", "Creates a new class."],
            "answer": "Allocates memory dynamically."
        },
        {
            "question": "22. Which of the following is the correct syntax to define a class in C++?",
            "options": ["class MyClass {}", "class MyClass[] {}", "class MyClass: {}", "MyClass class {}"],
            "answer": "class MyClass {}"
        },
        {
            "question": "23. How do you define a constructor in C++?",
            "options": ["MyClass() {}", "void MyClass() {}", "MyClass() -> {}", "constructor MyClass() {}"],
            "answer": "MyClass() {}"
        },
        {
            "question": "24. What is the purpose of the 'this' pointer in C++?",
            "options": ["Refers to the current object.", "Refers to the parent class.", "Points to the memory address.", "Helps allocate memory."],
            "answer": "Refers to the current object."
        },
        {
            "question": "25. What is the correct way to call a member function of an object in C++?",
            "options": ["object.function();", "object->function();", "object.function;", "function.object();"],
            "answer": "object.function();"
        },
        {
            "question": "26. What is polymorphism in C++?",
            "options": ["The ability to have multiple methods with the same name.", "The ability to create multiple instances of a class.", "The ability to inherit from multiple classes.", "The ability to call base class methods."],
            "answer": "The ability to have multiple methods with the same name."
        },
        {
            "question": "27. Which of the following is the correct way to declare a reference variable in C++?",
            "options": ["int &x;", "int x&;", "reference x;", "ref int x;"],
            "answer": "int &x;"
        },
        {
            "question": "28. How do you dynamically allocate memory for an integer in C++?",
            "options": ["int *ptr = new int;", "int *ptr = malloc(sizeof(int));", "int *ptr = int();", "int *ptr = allocate int;"],
            "answer": "int *ptr = new int;"
        },
        {
            "question": "29. What is the purpose of a destructor in C++?",
            "options": ["To initialize an object.", "To free dynamically allocated memory.", "To copy an object.", "To overload operators."],
            "answer": "To free dynamically allocated memory."
        },
        {
            "question": "30. Which operator is used to allocate memory dynamically in C++?",
            "options": ["malloc", "alloc", "new", "memory"],
            "answer": "new"
        },
        {
            "question": "31. What is the result of the expression 5 + 3 * 2 in C++?",
            "options": ["16", "11", "13", "10"],
            "answer": "11"
        },
        {
            "question": "32. Which of the following is a valid pointer declaration in C++?",
            "options": ["int *ptr;", "int ptr;", "ptr int;", "pointer int;"],
            "answer": "int *ptr;"
        },
        {
            "question": "33. Which of the following statements about constructors in C++ is true?",
            "options": ["A constructor must have the same name as the class.", "A constructor cannot have parameters.", "A constructor is called after the object is created.", "Constructors are only used for object initialization."],
            "answer": "A constructor must have the same name as the class."
        },
        {
            "question": "34. Which type of loop is used when you do not know the number of iterations in advance?",
            "options": ["for", "while", "do-while", "infinite loop"],
            "answer": "while"
        },
        {
            "question": "35. How do you declare a string in C++?",
            "options": ["string str;", "char str[];", "String str;", "std::string str;"],
            "answer": "std::string str;"
        },
        {
            "question": "36. What is the scope of a variable declared inside a function in C++?",
            "options": ["Global scope", "Local scope", "Class scope", "Block scope"],
            "answer": "Local scope"
        },
        {
            "question": "37. Which of the following C++ features allows classes to inherit properties of other classes?",
            "options": ["Encapsulation", "Inheritance", "Abstraction", "Polymorphism"],
            "answer": "Inheritance"
        },
        {
            "question": "38. Which of the following keywords is used to create a derived class in C++?",
            "options": ["inherits", "extends", "class", "public"],
            "answer": "public"
        },
        {
            "question": "39. What is a virtual function in C++?",
            "options": ["A function that can be overridden in a derived class.", "A function that can be called without an object.", "A function that cannot be inherited.", "A function that is automatically called in constructors."],
            "answer": "A function that can be overridden in a derived class."
        },
        {
            "question": "40. What is the purpose of the 'friend' keyword in C++?",
            "options": ["To allow a function to access private members of a class.", "To declare a global function.", "To create a subclass.", "To initialize a class."],
            "answer": "To allow a function to access private members of a class."
        },
        {
            "question": "41. What is a constructor initializer list in C++?",
            "options": ["A list of initial values for class members.", "A list of functions to be called in a constructor.", "A list of classes to be inherited.", "A list of private methods in a class."],
            "answer": "A list of initial values for class members."
        },
        {
            "question": "42. Which of the following C++ statements is used to define a function prototype?",
            "options": ["void function();", "function void();", "function();", "void function{};"],
            "answer": "void function();"
        },
        {
            "question": "43. What is the correct way to access a member function in a derived class in C++?",
            "options": ["baseClass.function();", "derivedClass->function();", "derivedClass.function();", "function->baseClass();"],
            "answer": "derivedClass.function();"
        },
        {
            "question": "44. Which of the following is the correct way to call a function from a base class in C++?",
            "options": ["baseClass.function();", "function.baseClass();", "baseClass->function();", "base->function();"],
            "answer": "baseClass.function();"
        },
        {
            "question": "45. What is the purpose of the 'static' keyword in C++?",
            "options": ["To make a variable local to a function.", "To create a global variable.", "To define a constant variable.", "To restrict the scope of a variable to the current function or file."],
            "answer": "To restrict the scope of a variable to the current function or file."
        },
        {
            "question": "46. What is a stack in C++?",
            "options": ["A linear data structure that follows LIFO (Last In, First Out) principle.", "A linear data structure that follows FIFO (First In, First Out) principle.", "A collection of objects.", "A type of array."],
            "answer": "A linear data structure that follows LIFO (Last In, First Out) principle."
        },
        {
            "question": "47. What is the correct way to declare a constant pointer in C++?",
            "options": ["int* const ptr;", "const int* ptr;", "const ptr int*;", "int const* ptr;"],
            "answer": "int* const ptr;"
        },
        {
            "question": "48. What is the correct way to define an abstract class in C++?",
            "options": ["class Abstract { virtual void func(); };", "abstract class Abstract { void func(); };", "class Abstract { public virtual void func(); };", "class Abstract { virtual void func() = 0; };"],
            "answer": "class Abstract { virtual void func() = 0; };"
        },
        {
            "question": "49. What is a memory leak in C++?",
            "options": ["When memory is allocated but never freed.", "When memory is freed incorrectly.", "When an object goes out of scope.", "When a pointer points to invalid memory."],
            "answer": "When memory is allocated but never freed."
        },
        {
            "question": "50. Which of the following C++ statements correctly initializes a pointer to an integer?",
            "options": ["int *ptr = 0;", "int *ptr;", "ptr = int *;", "int ptr* = &x;"],
            "answer": "int *ptr = 0;"
        }
    ]
    

// Retrieve the quiz data from localStorage or use the initial questions if not already stored
let quizData = JSON.parse(localStorage.getItem("quizData")) || initialQuizData;
//localStorage.clear();
//localStorage.removeItem('quizData');
let currentQuestionIndex = 0;
let score = 0;

// Wait for the DOM to be fully loaded before running the quiz
document.addEventListener('DOMContentLoaded', function() {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
        const state = JSON.parse(savedState);
        currentQuestionIndex = state.currentQuestionIndex;
        score = state.score;
        loadQuestion();
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('quizContent').style.display = 'block';
    } else {
        document.getElementById('quizContent').style.display = 'none';
    }
});

// Start the quiz
function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;

    document.getElementById('startButton').style.display = 'none';
    document.getElementById('quizContent').style.display = 'block';

    loadQuestion();
}

// Load a question
function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const questionData = quizData[currentQuestionIndex];
        const quizContent = `
            <div class="question">${questionData.question}</div>
            <div class="answers">
                ${questionData.options.map((option, index) => `
                    <div class="answer">
                        <input type="radio" name="answer" value="${option}" id="option${index}">
                        <label for="option${index}">${option}</label>
                    </div>
                `).join('')}
            </div>
            <button class="btn" id="hidden-button" onclick="submitAnswer()">Next</button>
        `;
        document.getElementById('quizContent').innerHTML = quizContent;
    } else {
        showResult();
    }
}

// Submit the answer and move to the next question
function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const selectedOption = selectedAnswer.value;
        if (selectedOption === quizData[currentQuestionIndex].answer) {
            score++;
        }
    }

    // Save the current progress to localStorage
    const quizState = {
        currentQuestionIndex: currentQuestionIndex + 1,
        score: score
    };
    localStorage.setItem('quizState', JSON.stringify(quizState));

    currentQuestionIndex++;
    loadQuestion();
}

// Show the result
function showResult() {
    const resultContent = `
        <h2>Your Score: ${score} / ${quizData.length}</h2>
        <button class="btn" id="restart-button" onclick="restartQuiz()">Restart Quiz</button>
    `;
    document.getElementById('quizContent').innerHTML = resultContent;
}

// Restart the quiz
function restartQuiz() {
    localStorage.removeItem('quizState');  // Remove saved state from localStorage
    startQuiz();
}

// Handle form submission to add quiz data
document.getElementById('quizDataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const question = document.getElementById('question').value;
    const options = [
        document.getElementById('option1').value,
        document.getElementById('option2').value,
        document.getElementById('option3').value,
        document.getElementById('option4').value
    ];
    const answer = document.getElementById('answer').value;

    const newQuestion = {
        question: question,
        options: options,
        answer: answer
    };

    quizData.push(newQuestion);  // Add the new question to quizData

    // Save the updated quiz data to localStorage
    localStorage.setItem('quizData', JSON.stringify(quizData));

    // Clear form inputs (optional)
    document.getElementById('quizDataForm').reset();

    alert('Question added successfully!');

  
});
