
const num1 = 39;
const num2 = 59;


console.log("Addition", num1 + num2);
console.log("Substraction", num1 - num2)
console.log("Multiplication", num1 * num2);
console.log("Divide", num1 / num2);
console.log("Remainder", num1 % num2);






let num1 = 45;
let num2 = 56

let temp;

console.log("Before swapping", "num1 ->", num1, "num2 ->", num2);

temp = num2;
num2 = num1;
num1 = temp;

console.log("After swapping", "num1 ->", num1, "num2 ->", num2);




let math = 50;
let english = 67;
let sanskrit = 57;

let totalMarks = math + english + sanskrit;
let averageMarks = totalMarks / 3;
let percentage = (totalMarks / 300) * 100;

console.log("Total Marks", totalMarks);
console.log("Average Marks", averageMarks)
console.log("Percentage", percentage);




let price = 1000;
let quantity = 2;

let originalBill = price * quantity;
let discount = originalBill * 10 / 100;
let finalBill = originalBill - discount;

console.log("Original Bill :", originalBill);
console.log("Discount Amount :", discount);
console.log("Final Bill :", finalBill);


let length = 20;
let width = 30;

let area = length * width;
let perimeter = 2 * (length * width);

console.log("Area :", area);
console.log("Perimeter :", perimeter)



let number1 = 16;

if (number1 % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


let num = 10;

if (num > 0) {
    console.log("Positive Number");
} else if (num < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}



let num1 = 25;
let num2 = 24;

if (num1 > num2) {
    console.log(num1, "is greater than ", num2);
} else if (num2 > num1) {
    console.log(num2, "is greater than ", num1);
} else {
    console.log(num1, "is equals to ", num2);
}



let num1 = 20;
let num2 = 20;
let num3 = 20;

if (num1 >= num2 && num1 >= num3) {
    console.log("Num1 is largest");
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Num2 is largest");
} else {
    console.log("Num3 is largest");
}





let age = 18;

if (age < 0) {
    console.log("Invalid age");
} else if (age >= 18) {
    console.log("Eligible to vote")
} else {
    console.log("Not eligible to vote");
}






let age = 45;
let hasLicense = true;


if (age < 0) {
    console.log("Invalid age");
} else if (age >= 18 && hasLicense) {
    console.log("Bhai tum chala skte ho gadi");
} else {
    console.log("Beta khidhr ?? Tum nhi chala skte ho gadi");
}



let number = 4;

if (number >= 10 && number <= 100) {
    console.log("Number is between 10 and 100");
} else {
    console.log("Number is outside 10 and 100");
}



let percentage = 100;

// if (percentage < 0 || percentage > 100) {
//     console.log("invalid percentage");
// } else if (percentage >= 90) {
//     console.log("Grade : A");
// } else if (percentage >= 80) {
//     console.log("Grade : B");
// } else if (percentage >= 70) {
//     console.log("Grade : C");
// } else if (percentage >= 60) {
//     console.log("Grade : D");
// } else if (percentage >= 40) {
//     console.log("Grade : E");
// } else {
//     console.log("Grade : F");
// }


//

if (percentage < 0 || percentage > 100) {
    console.log("invalid percentage");
} else if (percentage >= 90 && percentage <= 100) {
    console.log("Grade : A");
} else if (percentage >= 80 && percentage <= 89) {
    console.log("Grade : B");
} else if (percentage >= 70 && percentage <= 79) {
    console.log("Grade : C");
} else if (percentage >= 60 && percentage <= 69) {
    console.log("Grade : D");
} else if (percentage >= 40 && percentage <= 59) {
    console.log("Grade : E");
} else {
    console.log("Grade : F");
}



let percentage = 100;

// if (percentage < 0 || percentage > 100) {
//     console.log("invalid percentage");
// } else if (percentage >= 90) {
//     console.log("Grade : A");
// } else if (percentage >= 80) {
//     console.log("Grade : B");
// } else if (percentage >= 70) {
//     console.log("Grade : C");
// } else if (percentage >= 60) {
//     console.log("Grade : D");
// } else if (percentage >= 40) {
//     console.log("Grade : E");
// } else {
//     console.log("Grade : F");
// }


let math = 40;
let science = 78;
let english = 59;

let total = math + science + english;

if (math < 40 || science < 40 || english < 40) {
    console.log("Result : FAIL");
} else {
    let avg = total / 3;

    if (avg >= 75) {
        console.log("Distinction");
    } else if (avg >= 60) {
        console.log("First Division");
    } else if (avg >= 50) {
        console.log("Second Division");
    } else {
        console.log("Pass");
    }
}


let units = 201;

let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Bill", bill);




let username = "admin";
let password = "12345"

if (username === "admin" && password === "12345") {
    console.log("Login successfully");
} else {
    console.log("Invalid credentials");
}



let salary = 50000;
let experience = 4;

let bonus;

if (experience >= 10) {
    bonus = salary * 20 / 100;
} else if (experience >= 5) {
    bonus = salary * 10 / 100;
} else if (experience >= 2) {
    bonus = salary * 5 / 100;
} else {
    bonus = 0
}

let finalSalary = salary + bonus;

console.log("Original salary", salary);
console.log("Bonus", bonus);
console.log("Final Salary", finalSalary);



let age = 60;

if (age < 0) {
    console.log("Invalid age");
} else if (age <= 12) {
    console.log("Child");
} else if (age <= 19) {
    console.log("Teenager");
} else if (age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}




let num = 5;

switch (num) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid number");
}







let num1 = 53;
let num2 = 4;
let operator = "/"

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(num1 / num2);
        }
        break;
    case "%":
        console.log(num1 % num2);
        break;
    default:
        console.log("Invalid operator");
}




let num = 5;

switch (num) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}



let num1 = 53;
let num2 = 4;
let choice = 4;

switch (choice) {
    case 1:
        console.log("Addition", num1 + num2);
        break;
    case 2:
        console.log("Multiplication", num1 * num2);
        break;
    case 3:
        console.log("Substraction", num1 - num2);
        break;
    case 4:
        if (num2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log("Division", num1 / num2);
        }
        break;
    case 5:
        console.log("Remainder", num1 % num2);
        break;
    default:
        console.log("Invalid choice");
}




let signal = "yellow";

switch (signal) {
    case "red":
        console.log("STOP");
        break;
    case "green":
        console.log("GO");
        break;
    case "yellow":
        console.log("WAIT");
        break;
    default:
        console.log("Invalid signal");
}

let balance = 235;
let withdrawAmmount = 235;

if (withdrawAmmount <= 0) {
    console.log("Invalid withdrawAmmount");
} else if (withdrawAmmount > balance) {
    console.log("Insufficient Balance");
} else {
    let remaining = balance - withdrawAmmount;
    console.log("Withdraw Successfull");
    console.log("Remaining Amount", remaining);
}


let age = 12;
let numberOfTickets = 4;

let totalTicketprice;

if (age < 0) {
    console.log("Invalid age");
} else if (age <= 12) {
    totalTicketprice = 100 * numberOfTickets
} else if (age <= 59) {
    totalTicketprice = 200 * numberOfTickets
} else {
    totalTicketprice = 120 * numberOfTickets
}

console.log("Total", totalTicketprice);




let = quantity = 100;
let choice = 4;
let price;

switch (choice) {
    case 1:
        console.log("Burger Selected");
        price = 50
        break;
    case 2:
        console.log("Pizza Selected");
        price = 250
        break;
    case 3:
        console.log("Pasta Selected");
        price = 180
    case 4:
        console.log("Sandwich Selected");
        price = 120
        break;
    case 5:
        console.log("Momos Selected");
        price = 40;
        break;
}

if (choice >= 1 && choice <= 4 && quantity > 0) {
    let total = price * quantity;
    console.log("Total", total);
} else {
    console.log("Invalid choice or quantity");
}



let units = 1355;

let bill;

if ( units <= 0){ 
    console.log("Invalid Units");
} else if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

let discount;

// check for discount
if(bill >= 2000){
    discount = bill * 10 / 1000
} else {
    discount = 0
}

let finalBill = bill - discount

console.log("Units" , units);
console.log("Original Bill" , bill);
console.log("Discount" , discount);
console.log("Final Bill" , finalBill);



let balance = 235;
let withdrawAmmount = 200;
let deposit = 300;
let choice = 3;

switch (choice) {
    case 1:
        console.log("Current Balance :", balance);
        break;
    case 2:
        if (deposit > 0) {
            balance += deposit;
            console.log("Money deposited successfully");
            console.log("New Balance", balance);
        } else {
            console.log("Invalid deposit ammount");
        }
        break;
    case 3:
        if (withdrawAmmount <= 0) {
            console.log("Invalid withdraw ammount");
        } else if (withdrawAmmount > balance) {
            console.log("Insufficient Balance");
        } else {
            let remaining = balance - withdrawAmmount;
            console.log("Withdraw Successfull");
            console.log("Remaining Amount", remaining);
        }
        break;
    case 4:
        console.log("Thanks for using the ATM");
        break;
    default:
        console.log("Invalid choice");
}



let num = 16;

if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

if (num > 0) {
    console.log("Positive Number");
} else if (num < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}

if (num > 100) {
    console.log("Greater than 100");
} else if (num < 100) {
    console.log("Less than 100");
} else {
    console.log("Equal to 100");
}



let student = "Nishant";
let rollNumber = 33;
let mathMarks = 56;
let scienceMarks = 65;
let englishMarks = 35;


let totalMarks = mathMarks + scienceMarks + englishMarks;
let percentage = (totalMarks / 300) * 100
let grade;
let result = "PASS"

if (percentage < 0 || percentage > 100) {
    console.log("invalid percentage");
} else if (percentage >= 90 && percentage <= 100) {
    grade = "A"
} else if (percentage >= 80 && percentage <= 89) {
    grade = "B"
} else if (percentage >= 70 && percentage <= 79) {
    grade = "C"
} else if (percentage >= 60 && percentage <= 69) {
    grade = "D"
} else if (percentage >= 40 && percentage <= 59) {
    grade = "E"
} else {
    grade = "F"
}

if (mathMarks < 40 || scienceMarks < 40 || englishMarks < 40) {
    result = "FAIL"
}


console.log("Name : ", student);
console.log("Roll no : ", rollNumber);
console.log("Math :", mathMarks);
console.log("Science : ", scienceMarks);
console.log("English : ", englishMarks);
console.log("Total : ", totalMarks);
console.log("Percentage : ", percentage);
console.log("Grade : ", grade);
console.log("Result : ", result);