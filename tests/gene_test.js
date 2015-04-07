describe("a gene", function () {

    var gene;
    var geneBits = [0, 0, 0, 1];

    beforeEach(function () {
        gene = new Gene(geneBits);
    });

    it("should be defined", function () {
        expect(gene).toBeDefined();
    });

    it("should return a string", function () {
        expect(typeof "").toEqual("string");
    });

    it("should return a string containing the array", function () {
        expect(gene.toString()).toEqual("0001");
    });

    it("should return the value of the given index", function(){
        expect(gene.getBit(0)).toEqual(geneBits[0]);
    });

});