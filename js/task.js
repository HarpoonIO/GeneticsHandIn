var Task = function (name) {

    // Constants
    var NoOf_Genes = 12;
    var NoOf_Chromosones = 20;
    var NoOf_Iteraitons = 2;
    var NoOf_GeneBits = 4;
    var NoOf_DifferentGenes = 4;
    var MutationProbability = 0.01;

    // Variables
    var trainCapacity = [5000, 5000, 5000, 5000, 5000, 5000, 10000, 10000, 15000, 15000, 25000, 25000];
    var routeCapacity = [10000, 20000, 30000, 20000];
    var chromosomeCapacity = new Array(NoOf_GeneBits);
    var extraCapacity = new Array(NoOf_GeneBits);
    var relativeSurplus = new Array(NoOf_GeneBits);
    var geneCollection = new Array(NoOf_DifferentGenes);
    var c;  // chromosome
    var g;  // gene
    var f;  // fitness

    // 'constructor'
    // TODO: populateGeneColleciton()
    console.log("Generation 0");
    new Generics(this, NoOf_Genes, NoOf_Chromosones, NoOf_Iteraitons, NoOf_GeneBits, NoOf_DifferentGenes); // TODO: check this

    // populate collection of possible genes...
    var populateGeneCollection = function () {
        geneCollection[0] = new Gene([0, 0, 0, 1]);
        geneCollection[1] = new Gene([0, 0, 1, 0]);
        geneCollection[2] = new Gene([0, 1, 0, 0]);
        geneCollection[3] = new Gene([1, 0, 0, 0]);
    };

    // The fitness
    var fitness = function(c){ // c is a Chromosome

        for(var i = 0; i < NoOf_GeneBits; i++){
            chromosomeCapacity[i] = 0;
        }

        for(var i = 0; i < NoOf_Genes; i++){
            g = c.getGene(i);
            for(var j = 0; j < NoOf_GeneBits; j++){
                chromosomeCapacity[j] = g.getBit(j) * trainCapacity[i];
            }
        }

        for(var i = 0; i < NoOf_GeneBits; i++){
            extraCapacity[i] = chromosomeCapacity[i] - routeCapacity;
            relativeSurplus[i] = chromosomeCapacity[i] / routeCapacity;
        }
        // TODO: check Math.min()....
        f = Math.min(Math.min(relativeSurplus[0], relativeSurplus[1]), Math.min(relativeSurplus[2], relativeSurplus[3]));
        f = Math.max(f, 0);
        c.setFitness(f);

    };

    var printChromosome = function(c){ // 'c' is a chromosome

        if(c){
            console.log(c.toString());
        }else{
            console.log("No fit chromosome");
        }

    };

    // Print iteration result
    var printIteratinon = function(n, tot, avg, cFirst, cSecond){
        console.log("Two best chromosomes: ");
        printChromosome(cFirst);
        printChromosome(cSecond);
        console.log("Iteration number: " + n + ", Total fitness: " + tot + ", Average: " + avg);
        if(n < NoOf_Iteraitons && cSecond){
            console.log("Best Genes: " + cFirst.toString(), " and " + cSecond.toString()); // TODO: change this...
        }
    };

    var printMessage = function(s){
        console.log(s);
    };

    // TESTING
    var foo = function () {
        console.log("This is task");
    };

    return {
        foo: foo
    };

};