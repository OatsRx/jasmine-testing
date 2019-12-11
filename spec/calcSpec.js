describe("Calculator", function(){
    
    var calc = new Calculator; //assigning "Calculator" object to variable "calc"
    
    describe("Addition tests", function() {
        it("should return 42", function() {
            calc.add(20) //"calc.add" functon taken from prototype of "Calculator" object 
            calc.add(22)
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            calc.add(7)
            calc.add(19)
            expect(calc.value).toBe(26);
        });
        it("shoud return an error if we dont supply two numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith
                ("Error!");
        });
    });
});

