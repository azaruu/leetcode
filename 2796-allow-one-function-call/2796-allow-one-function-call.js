/**
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
    let called = false; 
    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args); 
        }
        return undefined; 
    };
}


const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); 
console.log(onceFn(2, 3, 6)); 


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
