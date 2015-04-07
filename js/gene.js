var Gene = function(_bits){ // bit array
    var bits = _bits;

    // Functions start
    var getBit = function(index){
        return bits[index];
    };

    var toString = function(){
        var result = "";
        for(var i = 0; i < bits.length; i++){
            result += bits[i];
        }
        return result;
    };

    // TESTING
    var foo = function(){
        console.log("This is gene");
    };

    return{
        foo: foo,
        getBit: getBit,
        toString: toString
    };

};