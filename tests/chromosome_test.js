describe("a chromosome", function () {

    var c;
    var numberOfGenes;
    var geneIndex = 0;

    beforeEach(function () {
        numberOfGenes = 20;
        c = new Chromosome(numberOfGenes);
        c.setGene(geneIndex, new Gene([0, 0, 0, 1]));
    });

    it("should be a gene object", function () {
        expect(typeof c.getGene(geneIndex)).toEqual("object");
    });

    it("should return the fitness value", function () {
        expect(c.getFitness()).toEqual(-100000);
    });

    it("should have a fitness of the desired value", function () {
        var newFitness = -5000;
        c.setFitness(newFitness);
        expect(c.getFitness()).toEqual(newFitness);
    });

});