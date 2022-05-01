// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    return Math.abs(number - 42);
}

function distanceFromHqInFeet(number) {
    distanceFromHqInBlocks(number); {
        return Math.abs(number - 42) * 264;
    }
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination); {
        let distance = Math.abs(destination - start) * 264;

        if (distance >=1 && distance <=400) {
            return distance * 0;
        }else if (distance >=401 && distance <=2000) {
            return (distance - 400) * .02;
        }else if (distance >=2001 && distance <=2499) {
            return 25;
        }else {
            return `cannot travel that far`;
        }
    }
}