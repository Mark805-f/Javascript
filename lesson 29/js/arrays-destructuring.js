var students = ["John", "Drin"];

var [s1, s2] = students;
console.log("Student 1: ", s1);
console.log("Student 2: ", s2);

var places = ["London", "Paris", "Mew York", "Berlin"];
var [firstPlace, , SecondPlace] = places;
console.log("SecondPlace: ", SecondPlace);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var [first, second, ...otherNumber] = numbers;
console.log("first:  ", first);
console.log("Second:  ", second);
console.log("Rest:  ", otherNumber);