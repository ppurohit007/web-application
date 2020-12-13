function getChange() {
    
    var cents = document.getElementById("cents").value;
    var quaters = Math.floor(cents / 25);
    var dimes = Math.floor((cents % 25) / 10);
    var nickles = Math.floor(((cents % 25) % 10) / 5);
    var pennies = cents - (quaters * 25 + dimes * 10 + nickles * 5);
    if (cents <= 99){
    document.getElementById("quaters").value = quaters;
    document.getElementById("dimes").value = dimes;
    document.getElementById("nickles").value = nickles;
    document.getElementById("pennies").value = pennies;
    } else {
        alert("Enter numbers between 0 - 99")
    }
    
    
}



    
    