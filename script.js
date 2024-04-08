/* 1. Check if a number is odd or even in JS. Check if it is a number.*/

let a = 2;
if (typeof a === 'number') {
    if (a % 2 === 0) {
        console.log("The number " + a + " is even.");
    } else {
        console.log("The number " + a + " is odd.");
    }
} else {
    console.log("The variable is not a number");
}

/* 2. Check if input variable is a number or not.*/

let b = "123";
if (typeof b === 'number') {
    console.log("The varibale " + b + " is a number");
} else {
    console.log("The variable is not a number");
}

/* 3. Find the largest of two numbers.*/

let c = 12;
let d = -1;
if (typeof c === 'number' && typeof d === 'number') {
    if (c > d) {
        console.log("C is bigger than D");
    } else if (d > c) {
        console.log("D is bigger than C");
    } else {
        console.log("The numbers are equal");
    }
} else {
    console.log("The variables are not numbers");
}


/* 4. Find if the number is present in given range.*/

let e = 101;
let f = 2000;
let num = 102;

if (num > e && num < f) {
    console.log("The number " + num + " is in the range.");
} else {
    console.log("The number is not in the range");
}

/* 5.Perform arithmetic operations on two numbers.*/

// test case
let g = 12;
let h = 2;
let operator = "%";

//solution to the task
if (typeof g === 'number' && typeof h === 'number') {
    if (operator === '+') {
        console.log(g + h);
    } else if (operator === "-") {
        console.log(g - h);
    } else if (operator === "*") {
        console.log(g * h);
    } else if (operator === "/") {
        if (h !== 0) {
            console.log(g / h);
        } else {
            console.log("You cannot devide by 0.");
        }
    } else if (operator === "%") {
        if (h !== 0) {
            console.log(g % h);
        } else {
            console.log("You can't have reminder when you divide by 0.");
        }
    } else if (operator === "**") {
        console.log(g ** h);
    } else {
        console.log("Invalid operator.");
    }
} else {
    console.log("The variables are not numbers.");
}
//solution ends here

/* 6.Check if a triangle is a right triangle.*/

let m=4;
let n=3;
let p=5;

if (m**2 + n**2 === p**2) {
    console.log("This is a right triangle.");
} else {
    console.log("This is NOT a right triangle.");
}

/* 7.Swap the values of two numbers if the values of the numbers are not the same.*/

let x=10;
let y=21;

if (x !== y) {
    let temp=x;
    x=y;
    y=temp;
    console.log("X = " + x);
    console.log("Y = " + y);
} else {
    console.log("The values are equal.");
}
 

