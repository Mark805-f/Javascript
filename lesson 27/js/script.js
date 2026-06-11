//functions

function showMessage(){
    alert("This message is inside the funcition");
}

showMessage();

function sum(number1,  number2){
    return number1 + number2;
}
console.log(sum(25,5));

function toCelsius(f){
    return(5/9)*(f-32);
}
console.log("54 fahrenheit is equal to "+toCelsius(54)+"celsius");
var rezult = toCelsius(54);
console.log("54 fahrenheit is equal to "+result+"celsius");

function dsFuncition(){
    var iocalVar="Digital School";
    alert(localVar);
}
dsFuncition();

function toSeconds(minutes){
    return minutes*60;
}
console.log(toSeconds(60));

function triangleArea(baseLenght, height){
    return 0.5 * baseLenght * height
}
console.log(triangleArea(5,7));

//objects

var car = {
    name:"mercedes",
    color: "red",
    year: 2020,
    kilometers: 0,
    startEngine: function(){
        alert("Vroooom!!!");
    },
    get getkilometers(){
        return this.kilometers;
    },
    set setKilometers(km){
        this.kilometers = km;
    }
};
console.log(car,getkilometers);
car.setKilometers = 100;
console.log(car.getkilometers);

var school = {
    name: "Digital School",
    subject: "programming",
    students: 1500,
    year: 2026
};

alert(car.name);
alert(car['color']);
car.startEngine();

var computer = new Object();

computer.name = "Lenovo";
computer.CPU = "Inter core i7";
computer.RAM = "16gb";
computer.GPU = "GeForcde GT730 2gb Dual Do HP";

computer.type = function(){
    return this.name + "," +this.CPU+ "," +this.RAM+ "," +this.GPU
}

alert(computer.GPU);
alert(computer.type());
delete computer.GPU;
alert(computer.GPU);

function Computer(name, CPU, RAM, GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var computer1 = new Computer("MacBook", "M1 8-CORE", "8GB", "5600M GPU");
var computer2 = new Computer("Acer", "intel Core i3", "4GB", "Integrated")