describe("Calculator", function(){
    
    beforeEach(function() { //before each test instance we can reset the value of "Calculator" back to 0
       calc = new Calculator; //assigning "Calculator" object to variable "calc"
    });
    
    describe("Addition tests", function() {
        it("should return 42", function() {
            calc.add(20) //"calc.add" functon taken from prototype of "Calculator" object 
            calc.add(22)
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            calc.add(7)//"calc.add" functon taken from prototype of "Calculator" object
            calc.add(19)
            expect(calc.value).toBe(26);
        });
        it("shoud return an error if we dont supply two numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");//"calc.add" functon taken from prototype of "Calculator" object will return error as data type is string not number
            expect(window.alert).toHaveBeenCalledWith
                ("Error!");
        });
    });
});

