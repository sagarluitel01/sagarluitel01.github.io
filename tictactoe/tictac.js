

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var index = 0;



displayTurn();

function displayTurn(){
    if(index%2 == 0){
        document.getElementById("turn").innerHTML = "Player1's Turn";
        
    }else{
        document.getElementById("turn").innerHTML = "Player2's Turn";
    }
}

function myFunction(){
    if(index%2 == 0){
        document.getElementById("one").innerHTML = "X";
        myArray[0]= "X";
    }else{
        document.getElementById("one").innerHTML = "O";
        myArray[0]= "O";
    }
    index++;
    displayTurn();
    check()
}

function myFunction2(){
    if(index%2 == 0){
        document.getElementById("two").innerHTML = "X";
        myArray[1]= "X";
    }else{
        document.getElementById("two").innerHTML = "O";
        myArray[1]= "O";
    }
    index++;
    displayTurn();
    check()
}
function myFunction3(){
    if(index%2 == 0){
        document.getElementById("three").innerHTML = "X";
        myArray[2]= "X";
    }else{
        document.getElementById("three").innerHTML = "O";
        myArray[2]= "O";
    }
    index++;
    displayTurn();
    check()
}
function myFunction4(){
    if(index%2 == 0){
        document.getElementById("four").innerHTML = "X";
        myArray[3]= "X";
    }else{
        document.getElementById("four").innerHTML = "O";
        myArray[3]= "O";
    }
    index++;
    displayTurn();
    check()
}
function myFunction5(){
    if(index%2 == 0){
        document.getElementById("five").innerHTML = "X";
        myArray[4]= "X";
    }else{
        document.getElementById("five").innerHTML = "O";
        myArray[4]= "O";
    }
    index++;
    displayTurn();
    check()
}
function myFunction6(){
    if(index%2 == 0){
        document.getElementById("six").innerHTML = "X";
        myArray[5]= "X";
    }else{
        document.getElementById("six").innerHTML = "O";
        myArray[5]= "O";
    }
    index++;
    displayTurn();
    check()
}
function myFunction7(){
    if(index%2 == 0){
        document.getElementById("seven").innerHTML = "X";
        myArray[6]= "X";

    }else{
        document.getElementById("seven").innerHTML = "O";
        myArray[6]= "O";
    }
    index++;
    displayTurn();
    check()
}
function myFunction8(){
    if(index%2 == 0){
        document.getElementById("eight").innerHTML = "X";
        myArray[7]= "X";
    }else{
        document.getElementById("eight").innerHTML = "O";
        myArray[7]= "O";
    }
    index++;
    displayTurn();
    check()
}
function myFunction9(){
    if(index%2 == 0){
        document.getElementById("nine").innerHTML = "X";
        myArray[8]= "X";
    }else{
        document.getElementById("nine").innerHTML = "O";
        myArray[8]= "O";
    }
    index++;
    displayTurn();
    check()
}


function check(){

    console.log(myArray)
    if(myArray[0] === myArray[4] && myArray[0] === myArray[8]){
        console.log("winner")
        if(myArray[0] == 'X'){
            winnerFun(1);
        }else{
            winnerFun(2);
        }
        
        return;
    }
    if(myArray[2] === myArray[4] && myArray[2] === myArray[6]){
        console.log("winner")
        if(myArray[2] == 'X'){
            winnerFun(1);
        }else{
            winnerFun(2);
        }
       
        return;
    }
    for (let i = 0; i < 3; i++) {
        if(myArray[i] === myArray[i+3] && myArray[i] === myArray[i+6]){
            console.log("winner")
            if(myArray[i] == 'X'){
                winnerFun(1);
            }else{
                winnerFun(2);
            }
           
            return;
        }
        if(myArray[i*3] === myArray[i*3+1] && myArray[i*3] === myArray[i*3+2]){
            console.log("winner")
            if(myArray[i*3] == 'X'){
                winnerFun(1);
            }else{
                winnerFun(2);
            }
            
            return;
        }
    }

    if(index > 8){
        document.getElementById("winner").innerHTML = `It is a tie game :-|  <br> Please Try Again` ;
        setTimeout(function() {
            location.reload();
        }, 2000);

    }
    
}

function winnerFun(player){
    if(player== 1){
        document.getElementById("winner").innerHTML = "Player 1 WON! ";
    }
    else{
        document.getElementById("winner").innerHTML = "Player 2 WON! ";
    }
    setTimeout(function() {
        if (confirm("Play Again?")) {
            location.reload();
        }
        else{
            setTimeout(function() {
                document.getElementById("winner").innerHTML = "Reloading anyways ";
                location.reload();
            }, 2000);

        }
    }, 2000);
    
}

    
    