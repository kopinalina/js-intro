/* alert('Hello JavaScript'); */

// Змінна, чи variable
// let, const, var
// var - застаріло, працює, але не слід використовувати
// let productPrice = 200 + 1;
// alert(productPrice);
// productPrice = productPrice * 1.1;
// alert(productPrice);

// let userName = prompt('Enter your name');
// alert(userName);

const userAge = Number(prompt('Enter you age'));
alert('Your age is ' + userAge);

// let nextAge = userAge + 1;
const nextAge = add(userAge, 1);
alert('Next year you will be ' + nextAge);

// Arithmetic operators: + - * / 
// % - remainder 20%15 === 5

// Boolean - логічний тип даних
// true - правда
// false - неправда

if (userAge < 18) { // > <= >= == === != !== && || 
    alert('You are underaged!');
} else {
    alert('You are adult');
}

function add(a, b) { // a = userAge, b = 1
    const sum = a + b;
    return sum;
}

