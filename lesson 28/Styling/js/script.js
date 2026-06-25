var v_button = document.getElementById('btn1');
var v_button2 = document.getElementById('btn2');
var v_button3 = document.getElementById('btn3');

v_button.onclick = function()
{
    v_yexy.style.color = "red";
    v_text.style.backgroundColor = "lightgrey";
    v_text.style.textAlign = "center";
    v_text.style.fontSize = "100px";
    v_text.style.padding = "20px";
}

v_text.onmouseover = function()
{
    v_text.style.cssText = "color: red; background-color: lightblue; text-align: center; font-size:100px; paddind: 20px;"

}

v_button.onclick = functio()
{
    v_text.setAttribute("class", "test")
}

v_button2.onclick = function()
{
    v_text.setAttribute("class", "test2")
}