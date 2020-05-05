'use strict';

// radius helper function
function radius(degree) {
    return Math.PI / 180 * degree;
}

function opposite(angle, mag) {
    return Math.sin(radius(angle)) * mag;
}

function adjacent(angle, mag) {
    return Math.cos(radius(angle)) * mag;
}

function convert(angle, mag) {
    let a = adjacent(angle, mag);
    let o = opposite(angle, mag);
    console.log(a, o);
    console.log(a**2 + o**2, mag**2)

    return [a, o]
}

function vectorAdd(v1, v2) {
    let v3 = [v1[0]+v2[0], v1[1]+v2[1]];
    console.log(v3);

    return v3;
}

function vectorSub(v1, v2) {
    let v3 = [v1[0] - v2[0], v1[1] - v2[1]];

    return v3;
}


let v1 = convert(40, 5);
let v2 = convert(100, 6);

let v3 = vectorAdd(v1, v2);