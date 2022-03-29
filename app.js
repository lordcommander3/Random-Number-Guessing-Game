var y= Math.floor(Math.random()*11);
var guess =1;
document.getElementById("submitguess").onclick = function(){
    var x = document.getElementById("guessfield").value;
    
    if(x == y){
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                       + guess + " GUESS ")
    }else if(x > y){guess++;
        alert("Your written value is higher than the actual random number ;)")
    }else{ guess++;
        alert("Your written value is lower than the actual random number ;)");
        console.log(x)
    }
}


