const number = 'dfdsfadfasdfadf 999-999-9999';
const regex = /\d\d\d-\d\d\d-\d\d\d\d/;
const match = regex.exec(number);
console.log(match)

//literal character - Rainbow

//Meta Character 
//\d -> 0-9
//\d\d\d-\d\d\d-\d\d\d\d 999-999-9999
//. any character
//* 0 or more
//.* any number or characher more

//single Char
// \d
// \w a-z A-Z 0-9 \W - 'not'
// \s white space

//quantifier
// * - 0 or more characters
// + - one or more characters
// ? - 0 or 1 characher ? optionally  
// {min,max}
// {n} - \w{5} finds all 5 lettter words 

//position
// ^ begining
// $ last
// \b wordbounding
