var Generics = function (_t, _chromosomeSize, _populationSize, _iterations, _genesize, _geneCollection, _mutationProbability, _populationSize) {

    // Variables
    var t = _t; // task
    var g, gMutated; // gene
    var c, cFirst, cSecond; // Chromosome
    var geneCollection = _geneCollection; // array of genes
    var chromosomeCollection = new Array(_populationSize); // array of chromosomes
    var newGeneration = new Array(_populationSize); // array of chromosomes
    var fit, fitFirst, fitSecond, fitTotal, fitAverage, fitWheel, fitCount = 0.1; // TODO: maybe in need of variables(and values) here..
    var mutationProbability = _mutationProbability;
    var populationSize = _populationSize;
    var chromosomeSize = _chromosomeSize;
    var geneSize = _genesize;
    var crossOverPoint;
    var iteraions = _iterations;
    var iterationNumber = 0;

    initPopulation();
    if ((fitFirst > 0) && (fitSecond > 0)) {
        simulate();
    }

    // Functions start
    function initPopulation() {
        for (var i = 0; i < populationSize; i++) {
            c = new Chromosome(chromosomeSize);
            for (var j = 0; j < chromosomeSize; j++) {
                g = geneCollection[geneSize * Math.random()];
                c.setGene(j, g);
            }
            chromosomeCollection[i] = c;
            t.fitness(c);
            t.printChromosome(c);
        }
        evaluate();
    };

    function simulate() {

        while (iterationNumber < iteraions) {
            iterationNumber++;

            newGeneration[0] = cFirst;
            newGeneration[1] = cSecond;

            t.printChromosome(newGeneration[0]);
            t.printChromosome(newGeneration[1]);

            for (var i = 2; i < populationSize; i++) {
                fitCount = 0;
                fitWheel = fitTotal * Math.random();
                for (var j = 0; j < populationSize; j++) {
                    fitCount = fitCount + chromosomeCollection[j].getFitness();
                }
                if (fitCount > fitWheel) {
                    newGeneration[i] = cloneChromosome(chromosomeCollection[j]);
                    break;
                }
            }
        }

        // crossover
        for (var i = 0; i < populationSize; i++) {
            crossOverPoint = chromosomeSize * Math.random();
            for (var j = crossOverPoint + 1; j < chromosomeSize; j++) {
                g = chromosomeCollection[i].getGene(j);
                chromosomeCollection[i].setGene(j, chromosomeCollection[i + 1].getGene(j));
                chromosomeCollection[i + 1].setGene(j, g);
            }
            mutate(i);
            t.fitness(chromosomeCollection[i]);
            t.printChromosome(chromosomeCollection[i]);
            mutate(i + 1);
            t.fitness(chromosomeCollection[i + 1]);
            t.printChromosome(chromosomeCollection[i + 1]);
        }
        evaluate();

    };

    function mutate(chromosomeNumber) {
        for (var i = 0; i < chromosomeSize; i++) {

            if (Math.random() < mutationProbability) {
                g = chromosomeCollection[chromosomeNumber].getGene(i);
                gMutated = geneCollection[geneSize * Math.random()];
                t.printMessage("Mutation number in c: " + chromosomeNumber + "gene: " + geneSize); // TODO: missing something
                chromosomeCollection[chromosomeNumber].setGene(i, gMutated);
            }
        }
    }

    function cloneChromosome(cold) { // Will return a chromosome - cold is a chromosome

        var newC = new Chromosome(chromosomeSize);
        for (var i = 0; i < chromosomeSize; i++) {
            newC.setGene(i, cold.getGene(i))
        }
        newC.setFitness(cold.getFitness());
        return newC;
    
    }

    function evaluate() {

        fitFirst = 0;
        fitSecond = 0;
        fitTotal = 0;
        cFirst = undefined;
        cSecond = undefined;
        for (var i = 0; i < populationSize; i++) {
            c = chromosomeCollection[i];
            fit = c.getFitness();
            fitTotal = fitTotal + fit;
            if (fit > fitFirst) {

                if (cFirst) {
                    fitSecond = fitFirst;
                    cSecond = cloneChromosome(cFirst);
                }
                cFirst = cloneChromosome(c);
                fitFirst = fit;
            } else {

                if (fit > fitSecond) {
                    cSecond = cloneChromosome(c);
                    fitSecond = fit;
                }
            }
        }
        fitAverage = fitTotal / populationSize;
        t.printIteration(iterationNumber, fitTotal, fitAverage, cFirst, cSecond)

    }

    // TESTING
    function foo() {
        console.log("This is genetics");
    };

    return {
        foo: foo
    };

};