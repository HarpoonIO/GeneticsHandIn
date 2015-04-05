var Gene = function(_bits){ // bit array
    var bits = _bits;

    // Functions start
    var getbit = function(index){
        return bits[index];
    };

    var toString = function(){
        var result = "";
        for(var i = 0; i < bits.length; i++){
            result += bits[i];
        }
        result = "this is a custom toString function call!!!";
        return result;
    };

    // TESTING
    var foo = function(){
        console.log("This is gene");
    };

    return{
        foo: foo,
        getBit: getbit,
        toString: toString
    };

};