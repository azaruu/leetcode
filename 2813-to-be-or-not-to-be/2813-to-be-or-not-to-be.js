/**
 * @param {string} val
 * @return {Object}
 */

function expect(val) {
    return {
        toBe: function(expectedVal) {
            if (val === expectedVal) {
                return true; // The values are strictly equal
            } else {
                throw new Error("Not Equal"); // Throw error if not equal
            }
        },
        notToBe: function(expectedVal) {
            if (val !== expectedVal) {
                return true; // The values are strictly not equal
            } else {
                throw new Error("Equal"); // Throw error if equal
            }
        }
    };
}



/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */