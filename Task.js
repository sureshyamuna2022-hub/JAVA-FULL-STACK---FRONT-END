// // Day1 task //
// // Not double equal to // //

// // let a = 10;
// // let b = "20";
// // console.log(a != b)

// // Not triple equal to program//
// // let a = 10;
// // let b = "10";
// // console.log(a !== b)


// //////////////////////////////////////////////////
// // Fahrenheit to Celsius // //

// // f = 90
// // c = (f - 32) * 5 / 9
// // console.log("Answer :", c)

// // let f = 90;
// // let c = (f - 32) * 5 / 9;
// // console.log("Answer :", c);

// ////////////////////////////////////////////////////

// Kilometer to mail conveter // 

// // km = 10
// // mile = km * 0.621371
// // console.log("Answer :", mile)

// let km = 10;
// let mile = km * 0.621371;
// console.log("Answer :", mile)

//////////////////////////////////////////////////
//mail to Kilometer conveter  //

// mile = 10
// km = mile * 1.60934
// console.log("Answer :", km)

// let mile = 10;
// let km = mile * 1.60934;
// console.log("Answer :", km);


////////////////////////////////////////////////////
// gram to pound Converter //
// gram = 1000
// pound = gram * 0.00220462
// console.log("Answer :", pound)

// let gram = 1000;
// let pound = gram * 0.00220462;
// console.log("Answer :", pound);
/////////////////////////////////////////////////////
// Pound to Gram Converter //

// pound = 2
// gram = pound * 453.592
// console.log("Answer :", gram)

// let pound = 2;
// let gram = pound * 453.592;
// console.log("Answer :", gram);

/////////////////////////////////////////////////
// Leap Year //

// let year = 2024;

// if (year % 4 == 0) {
//     console.log("Leap Year");
// }
// else {
//     console.log("Not a Leap Year");
// }

// Not a Leap Year  //

// let year = 2023;

// if (year % 4 == 0) {
//     console.log("Leap Year");
// }
// else {
//     console.log("Not a Leap Year");
// }

// //////////////////////////////////////////
//  Mobil number validation  //

// let mobile = "9876543210";

// if (mobile.length == 10) {
//     console.log("Valid Mobile Number");
// }
// else {
//     console.log("Invalid Mobile Number");
// }

// let mobile = "76543210";

// if (mobile.length == 10 && !isNaN(mobile)) {
//     console.log("Valid Mobile Number");
// }
// else {
//     console.log("Invalid Mobile Number");
// }


//////////////////////////////////////////////////////////////////////////////////
// Day2 task//

// week names using switch case //

// let day = 3;
// switch(day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Day");
// }

// month names using Switch case //

// let month = 5;
// switch(month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid Month");
// }

////////////////////////////////////////////
// substring//

// let str = "JavaScript";
// let result = str.substring(0, 4);
// console.log("Substring:", result);

/////////////////////////////////////////////////////
// Date Calculator (Display Current Date)r //

// let today = new Date();
// console.log("Date :", today.getDate());
// console.log("Month :", today.getMonth() + 1);
// console.log("Year :", today.getFullYear());

//Time Calculator (Display Current Time)

// let now = new Date();
// console.log("Hours :", now.getHours());
// console.log("Minutes :", now.getMinutes());
// console.log("Seconds :", now.getSeconds());

// Date and Time Together//

// let dt = new Date();
// console.log("Date :", dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear());
// console.log("Time :", dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds());

// product price Calculator //

// let price = 500;
// let quantity = 3;
// let total = price * quantity;
// console.log("Total Price :", total);

//////////////////////////////////////////////////
// Age categorize //

// let age = 18;
// switch (true) {
//     case (age >= 0 && age <= 12):
//         console.log("Child");
//         break;

//     case (age >= 13 && age <= 19):
//         console.log("Teenager");
//         break;

//     case (age >= 20 && age <= 59):
//         console.log("Adult");
//         break;

//     case (age >= 60):
//         console.log("Senior Citizen");
//         break;

//     default:
//         console.log("Invalid Age");
// }
/////////////////////////////////////////////////
// nested if else program//

// let a = 10;
// let b = 20;
// let c = 15;
// if (a > b) {
//     if (a > c) {
//         console.log("A is Biggest");
//     } else {
//         console.log("C is Biggest");
//     }
// } else {
//     if (b > c) {
//         console.log("B is Biggest");
//     } else {
//         console.log("C is Biggest");
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////
// Using math methode Generate the 6 digit OTP //

// let otp = Math.floor(Math.random() * 900000) + 100000;
// console.log("Your OTP is:", otp)

// let otp = Math.floor(Math.random()*8000) + 1000
// console.log("Your OTP is:",otp)

 