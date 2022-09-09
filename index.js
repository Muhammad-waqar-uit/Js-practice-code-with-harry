/*
  //chapter 1
//question1
let a = 'waqar';
let b = 1;
console.log(a + b)
//question2
console.log(typeof a)
console.log(typeof b)
console.log(typeof (a + b))

//question 3
const d = {
  'waqar': 3,
  'nice': 'yes',
  2: 33
}

// object variable cannot be re assigned.

d['nam2'] = 'hello'

console.log(d)


//operator in js

console.log('operator in js')

console.log('a+b==',1+2)
console.log('a-b==',1-2)
console.log('a/b==',1/2)
console.log('a*b==',2*3)
//power
console.log(2**3)

//modulo (reminder)
console.log(2%4)

//let r=3;
//console.log(++r)
//console.log(r)


//let g=4;

//console.log(g--)

//console.log(g)
let a=4;
console.log(a=2)
*/
//variables
/*
let a=10;
let b=3;

//addition
console.log(a+b);
/*result : 3 or if one of each value was a string then it
 will just concatenate with the number*/
/*
//subtraction
console.log(a-b); //result : 7

// multiplication
console.log(a*b); //result : 30

//division
console.log(a/b); //result : 3.3333 'accurate result no round of xD'

//exponent
console.log(a**b);

//modulus or remainder
console.log(a%b);

//incrementation
console.log(a++); //result will be 10 but after that when you call it will just be 11
console.log(a--);
/*same with this result will be 11 because of the addition 
but when you call it will be 10 again*/
//so let's just break it down
//declaring variable
/*
  let a=4;
a++;// 4 is now 5 but when you print this line it will show 4.
console.log(a);//now it will show 5

//same with the decrements
console.log(a--);//console will show 5
console.log(a);//now it will tell you that it is 4
*/
/*
let a=4;
let b=5;

console.log(a==b ? true:false);
*/
let x=4;
let y=4;
console.log(x>y && x===y); //result false and true means false cause of AND operator 
console.log(x>y || x===y); //result true due to OR operator 
console.log(!false);//result true due to NOT operator