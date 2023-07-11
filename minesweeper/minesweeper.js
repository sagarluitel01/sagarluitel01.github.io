var  x = 10;
var spanid = 0;
var i = 0;
var xcount = 0;
var arr = new Array(x*x);
for (let index = 0; index < x*x; index++) {
    arr[index] = 0;
}

const boardDiv = document.getElementById("board");

var boardElement = '';
createboard();
function createboard(){
    for (let index = 0; index < x; index++) {
        for (let y = 0; y < x; y++) {
            spanid = (index * x) +y;
            boardElement += `<button onclick="myFunction(`+ index +`,`+ y +`)">&nbsp; <span class="box" id="x`+ spanid + `"></span> &nbsp;</button>`        
        }
        boardElement +=`<br>`
    }
    boardDiv.innerHTML = boardElement;
}

function myFunction(a, b){
    if(i == 0){
        seedTheBoard(a, b);
    }
    check(a, b)
    
    i++;
}
var p = 0;
function check(a, b){
    var num1= (a * x)+b;
    console.log(`x`+num1)
    let clickbutton = document.getElementById("x"+ num1);
    clickbutton.innerHTML = arr[num1];
    if(arr[num1] == 0){
        if(arr[num1-1] == 0){
            if(0 != num1%x){
                let k1 = num1-1
                document.getElementById("x"+ k1).innerHTML = arr[k1];
            }
        }
        if(arr[num1+1] == 0){
            if((x-1) != num1%x){
                let k2 = num1+1
                document.getElementById("x"+ k2).innerHTML = arr[k2];
            }
        }
        if(arr[num1-x] == 0){
            if(num1 > x){
                let k3 = num1-x
                document.getElementById("x"+ k3).innerHTML = arr[k3];
            }
        }
        if(arr[num1-x-1] == 0){
            if(num1 > x && 0 != num1%x){
                let k4 = num1-x-1
                document.getElementById("x"+ k4).innerHTML = arr[k4];
            }
        }
        if(arr[num1-x+1] == 0){
            if(num1 > x && (x-1)!= num1 % x){
                let k5 = num1-x+1
                document.getElementById("x"+ k5).innerHTML = arr[k5];
            }
        }
        if(arr[num1+x] == 0){
            if(num1 < x*x){
                let k6 = num1+x
                document.getElementById("x"+ k6).innerHTML = arr[k6];
            }
        }
        if(arr[num1+x-1] == 0){
            if(num1 < x*x && 0 != num1%x){
                let k7 = num1+x-1
                document.getElementById("x"+ k7).innerHTML = arr[k7];
            }
                
        }
        if(arr[num1+x+1] == 0){
            if(num1 < x*x && (x-1) != num1%x){
                let k8 = num1+x+1
                document.getElementById("x"+ k8).innerHTML = arr[k8];
            }
                
        }
    }

    if(arr[num1] == "X"){
        console.log("you lost");
        clickbutton.style.animation = "myAnimation 2s"
        boardDiv.style.animation = "divAnimation 2s"

        setTimeout( timeoutfun, 3000)
        function timeoutfun(){
            alert("Sorry, You Picked The Wrong Spot! Try Again")
            location.reload();
        }
    }
    p++;
    console.log(p)
    if(p+xcount == x*x -1){
        setTimeout( timeoutfun2, 3000)
        function timeoutfun2(){
            alert("YEY! You Won. ")
            location.reload();
        }
    }

}

function seedTheBoard(a, b){
    
    let raval = Math.floor(Math.random() * x*2) + 16;
    console.log(raval)
    for (let q = 0; q < raval; q++) {
        let row =  Math.floor(Math.random() * x);
        let col =  Math.floor(Math.random() * x);
        console.log(col);
        
        if(row != a || b != col){
            xcount++;
            if((x * row) + col < x*x)
                arr[(x * row) + col] = "X";

            console.log(row + " " + col);
        }
    }

    for (let o = 0; o < arr.length; o++) {
        if(arr[o] == "X"){
            
            if(arr[o-1] != "X"){
                if(0 != o%x){
                    arr[o-1] += 1;
                }
            }
            if(arr[o+1] != "X"){
                if((x-1)!= x%o){
                    arr[o+1] += 1;
                }
            }
            if(arr[o-x] != "X"){
                if(o >= x){
                    arr[o-x] += 1;
                }
            }
            if(arr[o-x-1] != "X"){
                if(o >= x && 0 != o%x){
                    arr[o-x-1] += 1;
                }
            }
            if(arr[o-x+1] != "X"){
                if(o >= x && (x-1)!= o%x){
                    arr[o-x+1] += 1;
                }
            }
            if(arr[o+x] != "X"){
                if(o < x*x-x){
                    arr[o+x] += 1;
                }
            }
            if(arr[o+x-1] != "X"){
                if(o < x*x-x && 0 != o%x)
                    arr[o+x-1] += 1;
            }
            if(arr[o+x+1] != "X"){
                if(o < x*x-x && (x-1)!= o%x)
                    arr[o+x+1] += 1;
            }
        }
    }
    let oo = ""
    for (let t = 0; t < arr.length; t++) {
        if(t % x == 0){
            console.log(oo);
            oo = "";
        } 
        oo += arr[t] +" ";
    }
    console.log(oo);
}