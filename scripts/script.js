var collapsed = false;
        function burger() {
            console.log(collapsed);
            if (collapsed) {
                document.getElementById("BurgerMenu").style.display = "none";
            } else {

                document.getElementById("BurgerMenu").style.display = "block";
            }
            collapsed = !collapsed;
        }
function formFunction() {
    var elements = document.getElementById("myForm").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }
    alert(JSON.stringify(obj));
}
