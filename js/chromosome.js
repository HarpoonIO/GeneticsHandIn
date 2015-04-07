var Chromosome = function (noOfGenes) {
    var genes = new Array(noOfGenes);
    var fitness = -100000;

    // Functions start
    var getGene = function (index) {
        return genes[index];
    };

    var setGene = function (index, gene) {
        genes[index] = gene;
    };

    var getFitness = function(){
        return fitness;
    };

    var setFitness = function(f){
        fitness = f;
    };

    var toString = function(){
        var result = "";
        for(var i = 0; i < genes.length; i++){
            result += genes[i].toString() + " ";
        }
        return result;
    };

    // TESTING
    var foo = function () {
        console.log("This is chromosome");
    };

    return {
        foo: foo,
        getGene: getGene,
        setGene: setGene,
        getFitness: getFitness,
        setFitness: setFitness,
        toString: toString
    };

};