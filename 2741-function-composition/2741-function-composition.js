/**
 * @param {Function[]} functions
 * @return {Function}
 */
function compose(functions) {
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x); 
        }
        return x;
    };
}


const functions = [
    x => x + 1, 
    x => x * x,  
    x => 2 * x  
];

const composedFunction = compose(functions);
console.log(composedFunction(4)); 


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */