/*When will it fail:
Test 1. One or both parameters are not numbers
Test 2. We don't have two parameters*/

function Sum(A, B) {

    //Test 1.
    if (typeof A !== 'number' && typeof B !== 'number') {
        console.log("The parameters need to be numbers")
    }

    //Test 2.
    if (arguments.length !== 2) {
        console.log("This function needs two parameters");
    }

    else
        return A + B;

}

//Test by changing input here
console.log(Sum(1,2))

