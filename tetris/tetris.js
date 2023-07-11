
var div = document.createElement('div');

const div1 = document.getElementById("div1")

div.id = "box1";

div.style.width= "40px";
div.style.height="40px";
div.style.backgroundColor = "red";
document.addEventListener("keypress", function onPress(event) {
    console.log(event.key)
    if(event.key == 'a'){
        div1.style.animation = "example 4s";
        console.log("here")
    }
    console.log("testing")
});

