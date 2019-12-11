//Calculator object

Calculator = function() {
    this.value = 0;
}


//prototypes of Calculator object

Calculator.prototype.add = function(number){
    if (typeof(number) == "number") {
        this.value += number;
    }else {
        alert("Error!")
    }
}