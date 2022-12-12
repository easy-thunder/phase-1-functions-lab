// Code your solution in this file!
let distanceFromHqInBlocks = function(blocks){
let distanceInBlocks = Math.abs(42 - blocks);

return distanceInBlocks;
};

function distanceFromHqInFeet(blocks){
    let distanceInBlocks = Math.abs(42 - blocks);
    let distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
};



const distanceTravelledInFeet = function(blocks1, blocks2){
    let blockStart = blocks1;
    let blocksEnd = blocks2;
    let distanceInFeet = Math.abs(blockStart - blocksEnd)*264;
    return distanceInFeet;
};


function calculatesFarePrice(start, destination){
    let fareRate = .02;
    let blockStart = start;
    let blocksEnd = destination;
    let distanceInFeet = Math.abs(blockStart - blocksEnd)*264;
    if (distanceInFeet < 400){return 0}
    else if (distanceInFeet >= 400 && distanceInFeet < 2000){
    let farePrice = (distanceInFeet - 400)*fareRate;
    return farePrice;}
    else if (distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25;
    }
    else {return "cannot travel that far"}
//2 blocks *264 * .02
    
};









