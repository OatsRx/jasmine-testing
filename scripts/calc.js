//Calculator object
Calculator = function() {
    this.value = 0; //"Calculator" starting value will be 0
}


//prototype of "Calculator" object addition function
Calculator.prototype.add = function(number){
    if (typeof(number) == "number") {
        this.value += number;
    }else {
        alert("Error!")
    }
}