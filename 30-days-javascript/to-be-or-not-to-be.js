/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  let x = val;
  return {
    toBe: function (y) {
      if (val === y) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: function (y) {
      if (val !== y) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
