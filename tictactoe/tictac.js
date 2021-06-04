

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

function myFunction(n){
    console.log(n)
    
    if(!alreadyTaken(n-1)){
        if(index%2 == 0){
            document.getElementById("x"+n).innerHTML = "X";
            myArray[n-1]= "X";
        }else{
            document.getElementById("x"+n).innerHTML = "O";
            myArray[n-1]= "O";
        }
        index++;
        displayTurn();
        check()
    }else{
       alert("Sorry this spot was already taken, Please select another spot!")
    }

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

function alreadyTaken(a){
    
    if(myArray[a] === "X" || myArray[a] === "O"){
        return true;
    }else{
        return false;
    }
}

    
    