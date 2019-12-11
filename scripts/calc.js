//Calculator object
Calculator = function() {
    this.value = 0; //calculator starting value will be 0
}


//prototypes of Calculator object addition function
Calculator.prototype.add = function(number){
    if (typeof(number) == "number") {
        this.value += number;
    }else {
        alert("Error!")
    }
}