// HERE WE SOLVE BASIC JAVASCRIPT QUESTIONS FOR BEGINNERS

// Q1=Write a program that check the  given 
// number is positive or negative.
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Example usage
checkNumber(-5);
checkNumber(0);
checkNumber(7);


// Q3=Write a program to determine the greater of two numbers.


// Q2=Write a program that checks if a number is even or odd.
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}

// Example usage
checkEvenOdd(4);
checkEvenOdd(7);


// Q4=Create a program to check a student grade and percentage.
function checkGrade(marks) {
    let percentage = (marks / 100) * 100;
    let grade;
    
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    console.log(`Percentage: ${percentage}%`);
    console.log(`Grade: ${grade}`);
}

// Example usage
checkGrade(85);


// Q5=Write a program that greets the user based on the time of day. 


function greetUser() {
    let now = new Date();
    let hours = now.getHours();
    
    if (hours < 12) {
        console.log("Good morning!");
    } else if (hours < 18) {
        console.log("Good afternoon!");
    } else {
        console.log("Good evening!");
    }
}

// Example usage
greetUser();




// Q6=Write a program that calculates the Body Mass Index (BMI) and 
// categorizes it.

function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    let category;
    
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }
    
    console.log(`BMI: ${bmi.toFixed(2)}`);
    console.log(`Category: ${category}`);
}

// Example usage
calculateBMI(70, 1.75);

// Q8=Write a simple JavaScript program that checks if a person is 
// eligible for a CNIC ( show message with name
// )
function checkCNICEligibility(name, age) {
    if (age >= 18) {
        console.log(name + " is eligible for CNIC.");
    } else {
        console.log(name + " is not eligible for CNIC.");
    }
}

// Example usage
checkCNICEligibility("John Doe", 20);
checkCNICEligibility("Jane Smith", 16);
