describe("Calculator", function(){
    describe("Addition tests", function() {
        it("should return 42", function() {
            expect(addition(20,22)).toBe(42);
        });
        it("should return 26", function() {
            expect(addition(7,19)).toBe(26);
        });
        it("shoud return an error if we dont supply two numbers", function() {
            expect(addition("Hitchhikers", "Guide")).toBe("Error!");
        });
    });
});

