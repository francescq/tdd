/*! test v0.0.0 - MIT license */
'use strict';

var test = function (A) {
    let smallest = 1;
    if(!A) {
        return smallest;
    }

    let sortNumber = function (a, b) {
        return a - b;
    };
    let sortedPositiveArray = A.sort(sortNumber);


    for (let i = 0; i < sortedPositiveArray.length; i++) {
        let value = sortedPositiveArray[i];

        if (value > 0) {
            if (smallest < value) {
                return smallest;
            } else if (smallest === value) {
                smallest++;
            }
        }
    }

    return smallest;

}

if (typeof module !== "undefined") {
    module.exports = test;
}