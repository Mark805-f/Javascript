function search () {
    var input, filter, ul, li, a, i, txtvalue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();

    ul = document.getElementById("myList");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtvalue = a.textContent;

        if (txtvalue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = 'block'
        } else {
            li[i].style.display = 'none'
        }
    }
}