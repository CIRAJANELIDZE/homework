/*გამოაცხადეთ ორი ცვლადი a,b მიანიჭეთ მნიშვნელობები 23 და 4
დაბეჭდეთ (console.log) a და b რიცხვების ჯამი*/

let a= 23, b= 4;
a= a+b;
console.log(a);

/*დავეჭდეთ a და b რიცხვების ნამრავლი*/

a= 23, b= 4;
a= a*b;
console.log(a);

/*გამოაცხადეთ ახალი ცვლადი c რომელიც იქნება boolean, მიანიჭეთ true და დაბეჭდეთ*/


var d = false;
var c = true;
console.log(c);

var c=10, d=10;
console.log(c==d);

/*გამოახცადეთ ახალი ობიექტის(object) ტიპის ცვლადი
 person თქვენი მონაცემებით ( first name, last name, age,
address(რომელიც შეიცავს: city, country), phone no, email, friends (სახელების სია)*/

var person= {"first name":"cira",
              "last name": "janelidze",
               "age": 37,
               "address": ["georgia","tbilisi"],
               "phone no": 577201865,
                "email": "janelidze.cira@gmail.com",
                "friends": ["nini","natia","maia","cici"] };
 console.log(person);   
 
 /*დაბეჭდეთ person ობიექტის სახელი და მეორე მეგობრის სახელი*/

 console.log(person["first name"]);
 console.log(person.friends [1] );






