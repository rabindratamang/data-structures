const string = 'Hello, this is Rainbow';
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
