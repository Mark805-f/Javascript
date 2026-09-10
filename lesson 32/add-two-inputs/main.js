var imput1 = document.querySelector('#input1');
var imput2 = document.querySelector('#input2');
var ans = document.querySelector('#ans');
var button = document.querySelector('#btn');

button.addEventListener('click', function() {
    ans.innerHTML = parseInt(input1.value) * parseInt(input2.value)
});